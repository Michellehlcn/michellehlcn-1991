import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";


import { useEffect, useState } from "react";
import matter from "gray-matter";
import { CodeBlock, github } from "react-code-blocks";

interface FrontMatter {
    title?: string;
    layout?: string;
    categories?: string[];
    tags?: string[];
}

export default function BlogDetail() {
    const { slug } = useParams<{ slug: string }>();
    const [content, setContent] = useState<string>('');
    const [meta, setMeta] = useState<FrontMatter>({});

    useEffect(() => {
        fetch(`/posts/${slug}.md`)
            .then((res) => {
                console.log(res); if (!res.ok) throw new Error("Post not found");
                return res.text();
            })
            .then((text) => {
                const { data, content } = matter(text);
                setMeta(data);
                setContent(content);
            })
            .catch((e) => setContent('#.Post not found' + e));
    }, [slug]);

    return (
        <main className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 py-12">
            <div className="max-w-5xl mx-auto px-6">

                <Link
                    to="/"
                    className="text-indigo-600 text-sm hover:underline inline-block mb-6"
                > ← Back to Homepage
                </Link>
                {meta.title && (
                    <h1 className="text-5xl font-bold mb-4 ">{meta.title}</h1>
                )}
                {meta.tags && (
                    <div className="mb-6 flex flex-wrap gap-2">
                        {meta.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
                <section className="bg-white p-6 rounded-xl shadow text-sm blogDetail" >
                    <ReactMarkdown
                        children={content}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ inlist, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inlist && match ? (
                                    <CodeBlock
                                        text={String(children).replace(/\n$/, '')}
                                        language={match[1]}
                                        showLineNumbers={true}
                                        theme={github}
                                        />
    
                                ) : (
                                    <code 
                                    className={className} 
                                    {...props} 
                                    style={{ whiteSpace: "pre-wrap", backgroundColor: "#f5f5f5", padding: "2px 4px", borderRadius: "4px" }}
                                    >{children}
                                    </code>
                                );
                            },
                        }}
                    />
                </section>
            </div>

        </main>
    );
}