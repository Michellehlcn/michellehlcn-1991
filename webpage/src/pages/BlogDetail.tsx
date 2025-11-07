// import ReactMarkdown from "react-markdown";
// import { replace, useParams } from "react-router-dom";
// import remarkGfm from "remark-gfm";
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { useEffect, useState } from "react";

// interface MarkdownRendererProps {
//   content: string;
// }

// export default function BlogDetail () {
//     const { slug } = useParams<{ slug: string }>();
//     const [content, setContent] = useState<string>('');
//     useEffect(() => {
//         import(`../posts/${slug}.md`)
//             .then((res) => fetch(res.default))
//             .then((r) => r.text())
//             .then((text) => setContent(text))
//             .catch(() => setContent('#.Post not found'));
//     }, [slug]);

//     return (
//         <main className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 py-12">
//             {
//                 content? (
//                     <ReactMarkdown>
//                         children={content}
//                         remarkPlugins={[remarkGfm]}
//                         components={{
//                             code ({ node, inline, className, children, ...props }){
//                             const match = /language-(\w+)/.exec(className || '');
//                             return !inline && match ? (
//                                 <SyntaxHighlighter 
//                                 style={materialDark}
//                                 language={match[1]}
//                                 PreTag="div"
//                                 {...props}
//                                 >
//                                 {String(children),replace(/\n$/,'')}
//                                 </SyntaxHighlighter>
//                             ): (
//                                  <code
//               className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono"
//               {...props}
//             >{children}</code>
//                             );
//                         },
//                         }}
//                     </ReactMarkdown>
//                 ) : (
//                     <p>Loading ...</p>
//                 )
//             }
//         </main>
//     )
// }