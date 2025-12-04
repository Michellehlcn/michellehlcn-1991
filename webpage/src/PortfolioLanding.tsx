import { useState, useEffect } from 'react';
//import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: 'Payment gateway',
        image: '/humm-wf.png',
        short: 'Humm buy now pay later <> Webflow',
        description: 'Integration between non supportive native platform Webflow and Humm Payment',
        tags: ['Javascript', 'Java', 'GraphAPI']
    },
    {
        id: 2,
        title: 'STRIDEPR',
        image: '/strava-pr.png',
        short: 'OAuth & automation for Strava activity posting via Parkrun weekly',
        description: 'Automates activity posting with AI descriptions',
        tags: ['API', 'OAuth', 'Automation']
    },
    {
        id: 3,
        title: 'Invoice reminder',
        image: '/email.jpg',
        short: 'Payment invoice reminder',
        description: 'The tool helps user to send reminders to clients to pay invoices before the due date',
        tags: ['Golang', 'Smtp']
    },
    {
        id: 4,
        title: 'Pipedrive Connect',
        image: '/pipedrive.svg',
        short: 'CRM pipedrive <> Opensolar',
        description: 'Pipelines between CRM pipedrive, Onedrive, Opensolar to create auto transactions, purchase, deals.',
        tags: ['Python', 'MongoDB', 'GraphAPI']
    },
]
const posts = [
    {
        id: "post_one",
        title: "Rest vs. Soap vs. GraphQL API",
        excerpt:
            "This post is more about all the architectures based on my own experience. TLDR: The winner at this stage is GraphQL ,well but there is much more to dive into the topic if you read through the post.",
        date: "May 11, 2024"
    },
    {
        id: "post_two",
        title: "Facebook Messenger Bot",
        excerpt:
            "In this post, I will cover the basic messenger automation, GraphQL and how to deploy to one of free tier hosts such as Glitch, Vercel or AWS (Noted Heroku at this stage free dyno had been scraped).",
        date: "Dec 24, 2022"
    },
    {
        id: "post_three",
        title: "GoogleSheets Regex Formulas and examples",
        excerpt:
            "The Sheets have been getting tremendous attentions from professional and amateur users (if needless to mention Microsoft365 who joined later in the game).",
        date: "March 06, 2021"
    }
];

const expertise = [
    { title: 'Cloud & Infrastructure', description: 'Scalable, resilient cloud infrastructure with automation CI/CD.' },
    { title: 'APIs & Integration', description: 'OAuth flows, token management, and API orchestration.' },
    { title: 'Data & Automation', description: 'Data pipelines, scraping responsibly, and actionable insights.' },
    { title: 'Frontend & UX', description: 'Clean, responsive interfaces and user-centric design.' },
];

const testimonials = [
    {
        name: "Jeffrey E.",
        title: "CTO",
        feedback:
            "Michelle was given a very difficult and complex task, and absorbed it all within a day. She even continued to work on completing the task after the allocated time to ensure customer satisfaction."
    },
    {
        name: "Garren C.",
        title: "Managing Director, Cadence Advisory",
        feedback:
            " Michelle was very helpful. Worked through our IT issues. Was very responsive. Solved the problems. Was very balanced and fair about additional charges"
    },
    {
        name: "Jess J.",
        title: "Former Marketing Manager",
        feedback:
            "Michelle is extremely knowledgable and patient. She works methodically and is very thorough. I highly recommend her!"
    },
    {
        name: "Andrew B.",
        title: "Chiropractor",
        feedback:
            "Michelle was excellent today with my task. Her attention to detail and high level of execution was highly appreciated."
    },
    {
        name: "Jordan M.",
        title: "GIS Student",
        feedback:
            "Michelle solved the unusual issue I had and explained how/why it could be achieved",
    },
    {
        name: "Gerson R.",
        title: "Web Designer",
        feedback:
            "Michelle is absolutely incredible to work with and went far beyond the call of duty to ensure I ended up with a result that was perfect. Thank you! I highly recommend her and am super happy with the work."
    },
    {
        name: "Anstel Brands P.",
        title: "Manager",
        feedback:
            "Michelle understood this (quite technical) job very easily and knew exactly what i awnted. Was very patient as we worked through a few tech glitches and issues and persisted with completing the job. Thanks!"
    },
];
export default function PortfolioLanding() {
    const [index, setIndex] = useState(0);
    const next = () => setIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    const prev = () => setIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));

    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, []);
    const groupedTestimonials = [];
    for (let i = 0; i < testimonials.length; i += 3) {
        groupedTestimonials.push(testimonials.slice(i, i + 3));
    }
    return (
        <div>
            {/* Hero */}
            <section className='banner bg-[url(/rudolph.jpeg)] bg-cover bg-center  relative w-full overflow-hidden bg-gradient-to-r from-white to-gray-50 py-12'>
                
                {/* <div className='bg-[url(/sketch.png)] bg-top-right inset-0 bg-cover bg-no-repeat h-full absolute '> */}
                 {/*  <img src="/sketch.png" alt="sketch"  className=' absolute  ' ></img> */}
                {/* </div> */}
                
                <div className='hero-container relative h-full  max-w-6xl mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-3 gap-8 items-center'>
                    <div className='md:col-span-2 p-5 bg-white rounded-lg'>
                        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>Building reliable data and automation platforms</h1>
                        <p className='mt-4 text-lg text-gray-600'>Passionate IT engineer with a strong interest in coding, DevOps, infrastructure architecture, and Infrastructure as Code. I’m driven by curiosity and a desire to push the boundaries of what’s possible in technology. 5+ years experience, previously held the role of Data Engineer, and senior software developer, managing an engineer team.
                        </p>
                        <div className='mt-6 flex flex-wrap gap-3'>
                            <a href='#projects' className='inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium shadow hover:bg-indigo-700 transition'>View Projects</a>
                            <a href="#contact" className='inline-flex items-center px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50'>Get in touch</a>
                        </div>

                        <ul className='mt-8 grid sm:grid-cols-3 gap-4 text-sm text-gray-600'>
                            <li>
                                <div className='text-xs text-gray-500'>Location</div>
                                <div className='font-medium'>Sydney, Australia</div>
                            </li>
                            <li>
                                <div className='text-xs text-gray-500'>Availability</div>
                                <div className='font-medium'>Freelance / Contract</div>
                            </li>
                            <li>
                                <div className='text-xs text-gray-500'>Experience</div>
                                <div className='font-medium'>Cloud & Data Engineering 5+ years</div>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4 md:items-end'>
                        <div className='w-full md:w-64 bg-white rounded-lg shadow-sm p-4'>
                            <div className='text-xs text-gray-500'>Key Skills</div>
                            <div className='mt-3 flex flex-wrap gap-2'>
                                {['Python', 'Java', 'Javascript', 'Typescript', 'Go', 'Postgres', 'AWS', 'GCP', 'Terraform', 'Lambda'].map((s) => (
                                    <span key={s} className='px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs'>{s}</span>
                                ))}
                            </div>
                        </div>

                        <div className='w-full md:w-64 bg-white rounded-lg shadow-sm p-4'>
                            <div className='text-xs text-gray-500'>Contact</div>
                            <div className='mt-2 text-sm dont-medium'>michellehlcn.au@gmail.com</div>
                            <div className='text-xs text-gray-400'>Open to contracts & collaborations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main content area: CV (left) +details (right) */}
            <div className='max-w-6xl mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-4 gap-8 py-12'>
                <aside className='md:col-span-1 lg:sticky top-24 self-start'>
                    <div className='bg-white rounded-lg shadow-sm p-6'>
                        {/* Circular profile image */}
                        <div className="flex flex-col items-center justify-end">
                            <img src="/profile.png" alt="MN" className='w-32 h-32 rounded-full border-4 border-white mb-4 object-cover '></img>
                            <h3 className='text-lg font-semibold'>Michelle Nguyen</h3>
                            <p className='mt-2 text-sm text-gray-600 items-center'>IT Engineer</p>
                        </div>


                        <dl className='mt-4 text-sm text-gray-700 space-y-3'>
                            <div>
                                <dt className='text-xs tetx-gray-500'>Current</dt>
                                <dd className='font-medium'>Engineer - Freelance</dd>
                            </div>

                            <div>
                                <dt className='text-xs tetx-gray-500'>Education</dt>
                                <dd className='font-medium'>Dip Cloud Architecture</dd>
                            </div>
                        </dl>

                        <a href="#contact" className='mt-6 block text-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium'>Request CV (PDF)</a>
                    </div>

                    <div className='mt-6 bg-white rounded-lg shadow-sm p-6'>
                        <h4 className='text-sm text-gray-500'>Professional highlights</h4>
                        <ul className='mt-3 list-disc list-inside text-gray-600 space-y-2'>
                            <li>Designed Cloud platform for event data ingestion, multi-microservices</li>
                            <li>Built scheduled jobs and token-safe API integrations</li>
                            <li>Data modelling with complex agrorithm.</li>
                        </ul>
                    </div>
                </aside>

                {/* Right column: Blog + CV details + Projects + Expertise */}
                <section className='md:col-span-3 space-y-8'>
                    {/* Projects List*/}
                    <article id="projects" className='bg-white rounded-lg shadow p-6'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-2xl font-semibold'>Projects</h2>
                            <a href="#" className='tetx-sm text-indigo-600'>See all projects</a>
                        </div>

                        <div className='mt-6 grid md:grid-cols-2 gap-6'>
                            {projects.map((p) => (
                                <div key={p.id} className='rounded-md overflow-hidden border border-gray-100'>
                                    <div className='md:flex flex-col p-6'>
                                        <img src={p.image} alt={p.title} className='h-40 w-full object-cover'></img>
                                        <div className='flex-1 mt-6'>
                                            <h3 className='font-semibold text-2xl'>{p.title}</h3>
                                            <p className='mt-2 text-m text-gray-600'>{p.short}</p>
                                            <p className='mt-3 text-sm text-gray-700'>{p.description}</p>
                                            <p className='mt-4 flex flex-wrap gap-2'>
                                                {p.tags?.map((t) => (
                                                    <span key={t} className='text-xs px-2 py-1 rounded bg-gray-100 text-gray-700'>{t}</span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>

                    {/* Blog */}
                    <article id="blog" className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between ">
                            <h2 className="text-2xl font-semibold">From the Blog</h2>
                            <a href="#" className="text-sm text-indigo-600">View all posts</a>
                        </div>

                        <div className="mt-6 grid md:grid-cols-2 gap-6">
                            {posts.map((post) => (
                                <Link
                                    to={`/blog/${post.id}`}
                                    key={post.id}
                                    className="p-4 border rounded-md hover:shadow-sm transition">
                                    <div className="text-sm text-gray-500">{post.date}</div>
                                    <h3 className="font-semibold mt-6 text-2xl">{post.title}</h3>
                                    <p className="mt-6 text-m text-gray-600">{post.excerpt}</p>
                                    <a href="#" className="mt-3 inline-block text-indigo-600 text-sm">Read →</a>
                                </Link>
                            ))}
                        </div>
                    </article>

                    {/* Expertise
                    <article id="expertise" className="bg-white rounded-lg shadow p-6">
                        <h2 className="tetx-2xl font-semibold">Expertise</h2>
                        <div className="mt-4 grid md:grid-cols-2 gap-4">
                            {expertise.map((e) => (
                                <div key={e.title} className="p-4 border rounded-md">
                                    <h4 className="font-semibold">{e.title}</h4>
                                    <p className="mt-2 text-sm text-gray-600">{e.description}</p>
                                </div>
                            ))}
                        </div>
                    </article> */}


                    {/* Contact CTA */}
                    {/* <article id="contact" className="bg-indigo-600 text-white rounded-lg shadow p-6">
                        <div className="md:flex md:items-center md:justify-between">
                            <div>
                                <h3 className="text-xl font-semibold">Let's work together</h3>
                                <p className="mt-1 text-sm opacity-90">Available for freelance and contract work. Reach out to discuss your project.</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <a href='mailto:michellehlcn.au@gmail.com' className="inline-block px-4 py-2 bg-white text-indigo-600 rounded-md font-medium">Email me</a>
                            </div>
                        </div>
                    </article> */}

                </section>


            </div>

            <div className='relative overflow-hidden'>           
                <section className="video-bg z-0 w-auto min-w-full min-h-full max-w-none object-cover">
                        <video loop autoPlay muted playsInline src="https://seo.nlx.org/pearson/img5/bg-wave.mp4"></video>
                        <div className="vid-btn">
                            <button id="pause">
                                <span aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z">
                                        </path>
                                    </svg>
                                </span>
                                <span className="visuallyHidden">pause background video</span>
                            </button>
                            <button id="play">
                                <span aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                    </svg>
                                </span>
                                <span className="visuallyHidden">play background video</span>
                            </button>
                        </div>
                </section>
                <section className='relative  z-10 text-white p-12 md:p-24 text-center h-full '>
                    <h1 className='text-5xl md:text-6xl font-bold leading-tight'>Michelle Nguyen</h1>
                    <p className='mt-4 text-xl md:text-2xl'>IT Engineer creating data-driven tools, automation</p>
                    <a href="#projects" className='mt-8 inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition'>View Projects</a>  
                </section>

            </div>
            

            <main className='max-w-6xl mx-auto p-6 md:p-12 grid gap-16'>


                {/* Expertise Section */}
                <section id="expertise" className='bg-white rounded-3xl p-8 shadow-lg'>
                    <h2 className='text-4xl font-bold mb-8 text-center'>Expertise</h2>
                    <div className='grid sm:grid-cols-2 gap-6'>
                        {expertise.map((e) => (
                            <div key={e.title} className='p-6 border  border-gray-200 rounded-xl hover:shadow-md transition-shadow'>
                                <h4 className='font-semibold text-xl mb-2'>{e.title}</h4>
                                <p className='text-gray-600. text-sm'>{e.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-semibold">Client Testimonials</h2>
                    <div className="relative overflow-hidden">
                        <motion.div
                            key={index}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className='grid md:grid-cols-3 gap-6 mt-6' >

                            {groupedTestimonials[index].map((t, i) => (
                                <div key={i} className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
                                    <p className="text-gray-700 italic">"{t.feedback}"</p>
                                    <div className="mt-6 font-semibold text-indigo-600">{t.name}</div>
                                    <div className="text-sm text-gray-500">{t.title}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/*  Arrows */}
                        <button
                            onClick={prev}
                            className='absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-indigo-50'>
                            <ChevronLeft className='w-5 h-5 text-indigo-600' />
                        </button>
                        <button
                            onClick={next}
                            className='absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-indigo-50'
                        >
                            <ChevronRight className='w-5 h-5 text-indigo-600' />
                        </button>
                    </div>

                </section>
   
            </main>
            {/* Contact Section */}
            <section id="contact" className="bg-indigo-600 text-white shadow p-6 text-center">
                <h3 className="text-xl font-semibold">Let's work together</h3>
                <p className="mt-2 text-sm opacity-90">Available for freelance and contract work. Reach out to discuss your project.</p>
                <a href='mailto:michellehlcn.au@gmail.com' className="inline-block mt-4 px-4 py-2 bg-white text-indigo-600 rounded-md font-medium">Email me</a>
            </section>
        </div>
    )
}

