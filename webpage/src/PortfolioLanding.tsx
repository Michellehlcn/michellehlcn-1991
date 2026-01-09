import { useState, useEffect } from 'react';
//import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';

const key_skills = ['Python', 'Java', 'Javascript', 'Typescript', 'Go', 'Rust', 'Postgres', 'AWS', 'GCP', 'Terraform', 'Lambda']

const projects = [
    {
        id: 1,
        title: 'Payment gateway',
        image: '/humm-wf.png',
        short: 'Humm buy now pay later <> Webflow',
        description: 'Integration between non supportive native platform Webflow and Humm Payment',
        tags: ['Javascript', 'Java', 'GraphAPI'],
        href:''
    },
    {
        id: 2,
        title: 'stridepr.com.au',
        image: '/strava-pr.png',
        short: 'OAuth & automation for Strava activity posting via Parkrun weekly',
        description: 'Automates activity posting with AI descriptions',
        tags: ['API', 'OAuth', 'Automation'],
        href: 'https://stridepr.com.au/'
    },
    {
        id: 3,
        title: 'Invoice reminder',
        image: '/email.jpg',
        short: 'Payment invoice reminder',
        description: 'The tool helps user to send reminders to clients to pay invoices before the due date',
        tags: ['Golang', 'Smtp'],
        href: ''
    },
    {
        id: 4,
        title: 'Pipedrive Connect',
        image: '/pipedrive.svg',
        short: 'CRM pipedrive <> Opensolar',
        description: 'Pipelines between CRM pipedrive, Onedrive, Opensolar to create auto transactions, purchase, deals.',
        tags: ['Python', 'MongoDB', 'GraphAPI'],
        href: ''
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

// const expertise = [
//     { title: 'Cloud & Infrastructure', description: 'Scalable, resilient cloud infrastructure with automation CI/CD.' },
//     { title: 'APIs & Integration', description: 'OAuth flows, token management, and API orchestration.' },
//     { title: 'Data & Automation', description: 'Data pipelines, scraping responsibly, and actionable insights.' },
//     { title: 'Frontend & UX', description: 'Clean, responsive interfaces and user-centric design.' },
// ];

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
    <main className='flex min-h-dvh flex-col '>
        <div className='grid flex-1 grid-rows-[1fr_auto] overflow-clip grid-cols-[1fr_var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)_1fr] [--gutter-width:--spacing(6)] lg:[--gutter-width:--spacing(10)]'>
            <div className="col-start-2 row-span-full row-start-1 max-sm:hidden  bg-size-[10px_10px] bg-fixed bg-[repeating-linear-gradient(315deg,var(--grid-line-color)_0,var(--grid-line-color)_1px,transparent_0,transparent_50%)]"></div>
            <div className="col-start-4 row-span-full row-start-1 max-sm:hidden  bg-size-[10px_10px] bg-fixed bg-[repeating-linear-gradient(315deg,var(--grid-line-color)_0,var(--grid-line-color)_1px,transparent_0,transparent_50%)]"></div>
            <div className='col-start-3 row-start-1 max-sm:col-span-full max-sm:col-start-1'>
                <div className='line-y mt-12 grid gap-x-5 sm:mt-20 lg:mt-24 lg:grid-cols-[3fr_2fr] '>
                    <div className=' max-lg:line-b sm:px-2 '>
                        <div className='md:col-span-2 p-5 bg-white ring ring-gray-950/5 '>
                            <h1 className='mt-2 text-6xl tracking-tighter sm:text-8xl text-pretty'>Building reliable data and automation platforms</h1>
                            <p className='mt-4 max-w-2xl text-lg/7 font-medium text-pretty text-gray-600 dark:text-gray-400'>Passionate IT engineer with a strong interest in coding, DevOps, infrastructure architecture, and Infrastructure as Code. I’m driven by curiosity and a desire to push the boundaries of what’s possible in technology. 5+ years experience, previously held the role of Data Engineer, and senior software developer, managing an engineer team.
                            </p>
                            <div className='mt-6 flex gap-4 px-4 py-2 whitespace-nowrap max-lg:line-t max-lg:mt-6 sm:px-2 lg:border-t lg:border-(--grid-line-color)'>
                                <a href='#projects' className='gap-2 inline-flex justify-center rounded-full text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-950 text-white hover:bg-gray-800 focus-visible:outline-gray-950 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:hover:bg-gray-200 dark:focus-visible:outline-white dark:focus-visible:outline-white px-4 py-2'>View Projects <svg fill="currentColor" aria-hidden="true" viewBox="0 0 10 10" className="-mr-0.5 w-2.5"><path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path></svg></a>
                                <a href="#contact" className='gap-2 inline-flex justify-center rounded-full text-sm/6 font-semibold ring-1 text-gray-950 ring-gray-950/10 hover:ring-gray-950/20 dark:text-white dark:ring-white/10 dark:hover:ring-white/20 px-4 py-2'>Get in touch <svg fill="currentColor" aria-hidden="true" viewBox="0 0 10 10" className="-mr-0.5 w-2.5"><path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path></svg></a>
                            </div>

                            <ul className='mt-8 grid sm:grid-cols-3 gap-4 '>
                                <li>
                                    <div className='font-medium'>Location</div>
                                    <div className='mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400'>Sydney, Australia</div>
                                </li>
                                <li>
                                    <div className='font-medium'>Availability</div>
                                    <div className='mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400'>Freelance / Contract</div>
                                </li>
                                <li>
                                    <div className=' font-medium'>Experience</div>
                                    <div className='mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400'>Software & Data Engineering 5+ years</div>
                                </li>
                            </ul>
                            <ul className='mt-8'>
                                <div className='font-medium'>Key Skills</div>
                                <div className='mt-3 flex flex-wrap gap-2'>
                                {key_skills.map((s) => (
                                    <span key={s} className='gap-2 inline-flex justify-center rounded-full text-sm/6 font-semibold ring-1 text-gray-950 ring-gray-950/10 hover:ring-gray-950/20  px-4 py-2 mt-4 font-mono text-xs/6 tracking-wide text-gray-600 '>{s}</span>
                                ))}
                            </div>
                            </ul>
                        </div>   
                    </div>

                    <div className='grid grid-cols-1 grid-rows-[1fr_auto] bg-white ring ring-gray-950/5 '>
                        <div className='flex flex-col justify-evenly items-center px-4 py-2 max-lg:line-y max-lg:mt-6 sm:px-2'>
                            <div className='cursor-pointer max-w-2xl text-lg/7 font-medium text-pretty text-gray-600 dark:text-gray-400'>
                                 <div className="group relative">
                                    <img src="/arts/art-15.png" alt="Default" className="aspect-870/800 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                                    <img src="/arts/art-14.png" alt="Hover" className="aspect-870/800 absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='mt-20'>
                    <div className='line-y grid grid-cols-3 ' aria-orientation="horizontal">
                        <div className='group relative flex items-center justify-center  max-lg:flex-col  '>
                            <div className='absolute -inset-x-px inset-y-0 bg-indigo-500/5 dark:bg-indigo-500/5'>
                            </div>
                            <img src="/arts/art-13.png" className='ring ring-gray-950/5 '></img>
                        </div>
                        <div className='group relative flex items-center justify-center max-lg:flex-col '>
                            <div className='absolute -inset-x-px inset-y-0 bg-indigo-500/5  dark:bg-indigo-500/5'>
                            </div>
                            <img src="/arts/art-14.png" className='ring ring-gray-950/5 '></img>
                        </div>
                        <div className='group relative flex items-center justify-center  max-lg:flex-col '>
                            <div className='absolute -inset-x-px inset-y-0 bg-gradient-to-r from-blue-500/4 to-pink-500/4 dark:bg-indigo-500/5'>
                            </div>
                            <img src="/arts/art-15.png" className='ring ring-gray-950/5 '></img>
                        </div>
                    </div>
                </div>

        <div className='mt-20'>
            
            
            {/* Main content area: CV (left) +details (right) */}
             <div className=' mx-auto'>
                

                 {/* Right column: Blog + CV details + Projects + Expertise */}
                 <section className='space-y-8'>
                     
                     {/* Projects List*/}
                     <article id="projects" className=''>
                         <div className='flex items-center justify-between'>
                             <h2 className='max-w-3xl text-3xl font-medium tracking-tight text-pretty md:text-[2.5rem]/14'>Projects</h2>
                             {/* <a href="#" className='tetx-sm text-indigo-600'>See all projects</a> */}
                         </div>

                         <div className='mt-6 grid md:grid-cols-3 gap-6'>
                             {projects.map((p) => (
                                 <div key={p.id} className='rounded-md overflow-hidden border m-5 md:m-0'>
                                     <div className='md:flex flex-col p-6'>
                                         <img src={p.image} alt={p.title} className='h-40 w-full object-cover'></img>
                                         <div className='flex-1 mt-6'>
                                             <h2 className='text-[2.5rem]/none font-medium tracking-tight text-pretty hover:text-blue-700 '><a target="_blank" rel="noopener noreferrer" href={p.href}>{p.title}</a></h2>
                                             <p className='mt-2 mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400'>{p.short}</p>
                                             <p className='mt-3 mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400'>{p.description}</p>
                                             <p className='mt-4 flex flex-wrap gap-2'>
                                                 {p.tags?.map((t) => (
                                                     <span key={t} className='gap-2 inline-flex justify-center rounded-full text-sm/6 font-semibold ring-1 text-gray-950 ring-gray-950/10 hover:ring-gray-950/20 dark:text-white dark:ring-white/10 dark:hover:ring-white/20 px-4 py-2 mt-4 font-mono text-xs/6 tracking-wide text-gray-600 dark:text-gray-400'>{t}</span>
                                                 ))}
                                                 {p.href? 
                                                 <>
                                                    <div className='flex gap-4 px-4 py-2 whitespace-nowrap max-lg:line-t max-lg:mt-6 sm:px-2 '>
                                                        <a target="_blank" rel="noopener noreferrer" href={p.href} className="mt-5 gap-2 inline-flex justify-center rounded-full text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-950 text-white hover:bg-gray-800 focus-visible:outline-gray-950 px-4 py-2">See Product Page <svg fill="currentColor" aria-hidden="true" viewBox="0 0 10 10" className="-mr-0.5 w-2.5"><path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path></svg></a>
                                                    </div> 
                                                </>: <></>}
                                             </p>
                                         </div>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </article>

                     {/* Blog */}
                     <div id="blog" className="mt-20">
                         <div className="flex items-center justify-between ">
                             <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-pretty md:text-[2.5rem]/14">Blog</h2>
                         </div>

                         <div className="mt-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                             {posts.map((post) => (
                                 <Link
                                     to={`/blog/${post.id}`}
                                     key={post.id}
                                     className="m-5 md:m-0 p-4 border hover:shadow-sm bg-card rounded-xl overflow-hidden transition-all duration-200 flex flex-col hover:shadow-lg ">
                                     <div className="text-sm text-gray-500">{post.date}</div>
                                     <h2 className="mt-5 text-[2.5rem]/none font-medium tracking-tight text-pretty hover:text-blue-700 ">{post.title}</h2>
                                     <p className="mt-6 mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                                     <div className='flex gap-4 px-4 py-2 whitespace-nowrap max-lg:line-t max-lg:mt-6 sm:px-2 '>
                                        <a href="#" className="mt-5 gap-2 inline-flex justify-center rounded-full text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-950 text-white hover:bg-gray-800 focus-visible:outline-gray-950 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:hover:bg-gray-200 dark:focus-visible:outline-white dark:focus-visible:outline-white px-4 py-2">Read more <svg fill="currentColor" aria-hidden="true" viewBox="0 0 10 10" className="-mr-0.5 w-2.5"><path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path></svg></a>
                                     </div>
                                 </Link>
                             ))}
                         </div>
                     </div>

                      {/* Testimonials */}
                 <section id="testimonials" className="mt-20">
                     <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-pretty md:text-[2.5rem]/14">Client Testimonials</h2>
                     <div className="relative overflow-hidden">
                         <motion.div
                             key={index}
                             initial={{ x: 100, opacity: 0 }}
                             animate={{ x: 0, opacity: 1 }}
                             exit={{ x: -100, opacity: 0 }}
                             transition={{ duration: 0.8 }}
                             className='grid md:grid-cols-3 gap-6 mt-6' >

                             {groupedTestimonials[index].map((t, i) => (
                                 <figure key={i} className="ring ring-gray-950/5  group row-span-2 grid max-lg:mx-auto max-lg:max-w-3xl max-lg:gap-y-5 lg:grid-rows-subgrid  transition">
                                     <blockquote className='mx-auto flex items-center py-2 text-sm/7 tracking-tight max-lg:line-y lg:group-first:line-y px-8 text-xl/9 sm:px-16 sm:text-2xl/10'>
                                        <p className="relative before:pointer-events-none before:absolute before:top-4 before:-left-6 before:text-[6rem] before:text-gray-950/10 before:content-['“'] sm:before:-left-8 lg:before:text-[8rem] dark:before:text-white/10">
                                            {t.feedback}
                                        </p>
                                     </blockquote>
                                     <figcaption className="grid grid-rows-[max-content_1fr] gap-3 py-2 px-8 sm:px-16">
                                            <div className="mt-6 font-medium">{t.name}</div>
                                            <div className="text-gray-600 dark:text-gray-400">{t.title}</div>
                                     </figcaption>
                                    
                                     
                                 </figure>
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
                 </section>
             </div>
                </div>
            </div>
        </div>
              </main>

    )
}
            {/* Hero */}
            {/* <section className='banner bg-[url(/rudolph.jpeg)] bg-cover bg-center  relative w-full overflow-hidden bg-gradient-to-r from-white to-gray-50 py-12'> */}
                
                {/* <div className='bg-[url(/sketch.png)] bg-top-right inset-0 bg-cover bg-no-repeat h-full absolute '> */}
                 {/*  <img src="/sketch.png" alt="sketch"  className=' absolute  ' ></img> */}
                {/* </div> */}
                
                {/* <div className='hero-container relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-3 gap-8 items-center'>
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
                    </div> */}

                    {/* <div className='flex flex-col gap-4 md:items-end'>
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
                </div> */}
            {/* </section> */}

            {/* Main content area: CV (left) +details (right) */}
//             <div className='max-w-6xl mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-4 gap-8 py-12'>
//                 <aside className='md:col-span-1 lg:sticky top-24 self-start'>
//                     <div className='bg-white rounded-lg shadow-sm p-6'>
//                         {/* Circular profile image */}
//                         <div className="flex flex-col items-center justify-end">
//                             {/* <img src="/" alt="MN" className='w-32 h-32 rounded-full border-4 border-white mb-4 object-cover '></img> */}
//                             <h3 className='text-lg font-semibold'>Michelle Nguyen</h3>
//                             <p className='mt-2 text-sm text-gray-600 items-center'>IT Engineer</p>
//                         </div>


//                         <dl className='mt-4 text-sm text-gray-700 space-y-3'>
//                             <div>
//                                 <dt className='text-xs tetx-gray-500'>Current</dt>
//                                 <dd className='font-medium'>Engineer - Freelance</dd>
//                             </div>

//                             <div>
//                                 <dt className='text-xs tetx-gray-500'>Education</dt>
//                                 <dd className='font-medium'>Dip Cloud Architecture</dd>
//                             </div>
//                         </dl>

//                         <a href="#contact" className='mt-6 block text-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium'>Request CV (PDF)</a>
//                     </div>

//                     <div className='mt-6 bg-white rounded-lg shadow-sm p-6'>
//                         <h4 className='text-sm text-gray-500'>Professional highlights</h4>
//                         <ul className='mt-3 list-disc list-inside text-gray-600 space-y-2'>
//                             <li>Designed Cloud platform for event data ingestion, multi-microservices</li>
//                             <li>Built scheduled jobs and token-safe API integrations</li>
//                             <li>Data modelling with complex agrorithm.</li>
//                         </ul>
//                     </div>
//                 </aside>

//                 {/* Right column: Blog + CV details + Projects + Expertise */}
//                 <section className='md:col-span-3 space-y-8'>
//                     {/* Projects List*/}
//                     <article id="projects" className='bg-white rounded-lg shadow p-6'>
//                         <div className='flex items-center justify-between'>
//                             <h2 className='text-2xl font-semibold'>Projects</h2>
//                             <a href="#" className='tetx-sm text-indigo-600'>See all projects</a>
//                         </div>

//                         <div className='mt-6 grid md:grid-cols-2 gap-6'>
//                             {projects.map((p) => (
//                                 <div key={p.id} className='rounded-md overflow-hidden border border-gray-100'>
//                                     <div className='md:flex flex-col p-6'>
//                                         <img src={p.image} alt={p.title} className='h-40 w-full object-cover'></img>
//                                         <div className='flex-1 mt-6'>
//                                             <h3 className='font-semibold text-2xl' hover:text-blue-700 ><a target="_blank" rel="noopener noreferrer" href={p.href}>{p.title}</a></h3>
//                                             <p className='mt-2 text-m text-gray-600'>{p.short}</p>
//                                             <p className='mt-3 text-sm text-gray-700'>{p.description}</p>
//                                             <p className='mt-4 flex flex-wrap gap-2'>
//                                                 {p.tags?.map((t) => (
//                                                     <span key={t} className='text-xs px-2 py-1 rounded bg-gray-100 text-gray-700'>{t}</span>
//                                                 ))}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </article>

//                     {/* Blog */}
//                     <article id="blog" className="bg-white rounded-lg shadow p-6">
//                         <div className="flex items-center justify-between ">
//                             <h2 className="text-2xl font-semibold">From the Blog</h2>
//                             <a href="#" className="text-sm text-indigo-600">View all posts</a>
//                         </div>

//                         <div className="mt-6 grid md:grid-cols-2 gap-6">
//                             {posts.map((post) => (
//                                 <Link
//                                     to={`/blog/${post.id}`}
//                                     key={post.id}
//                                     className="p-4 border rounded-md hover:shadow-sm transition">
//                                     <div className="text-sm text-gray-500">{post.date}</div>
//                                     <h3 className="font-semibold mt-6 text-2xl">{post.title}</h3>
//                                     <p className="mt-6 text-m text-gray-600">{post.excerpt}</p>
//                                     <a href="#" className="mt-3 inline-block text-indigo-600 text-sm">Read →</a>
//                                 </Link>
//                             ))}
//                         </div>
//                     </article>

//                     {/* Expertise
//                     <article id="expertise" className="bg-white rounded-lg shadow p-6">
//                         <h2 className="tetx-2xl font-semibold">Expertise</h2>
//                         <div className="mt-4 grid md:grid-cols-2 gap-4">
//                             {expertise.map((e) => (
//                                 <div key={e.title} className="p-4 border rounded-md">
//                                     <h4 className="font-semibold">{e.title}</h4>
//                                     <p className="mt-2 text-sm text-gray-600">{e.description}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </article> */}


//                     {/* Contact CTA */}
//                     {/* <article id="contact" className="bg-indigo-600 text-white rounded-lg shadow p-6">
//                         <div className="md:flex md:items-center md:justify-between">
//                             <div>
//                                 <h3 className="text-xl font-semibold">Let's work together</h3>
//                                 <p className="mt-1 text-sm opacity-90">Available for freelance and contract work. Reach out to discuss your project.</p>
//                             </div>
//                             <div className="mt-4 md:mt-0">
//                                 <a href='mailto:michellehlcn.au@gmail.com' className="inline-block px-4 py-2 bg-white text-indigo-600 rounded-md font-medium">Email me</a>
//                             </div>
//                         </div>
//                     </article> */}

//                 </section>


//             </div>

//             <div className='relative overflow-hidden'>           
//                 <section className="video-bg z-0 w-auto min-w-full min-h-full max-w-none object-cover">
//                         <video loop autoPlay muted playsInline src="https://seo.nlx.org/pearson/img5/bg-wave.mp4"></video>
//                         <div className="vid-btn">
//                             <button id="pause">
//                                 <span aria-hidden="true">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
//                                         <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z">
//                                         </path>
//                                     </svg>
//                                 </span>
//                                 <span className="visuallyHidden">pause background video</span>
//                             </button>
//                             <button id="play">
//                                 <span aria-hidden="true">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
//                                         <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
//                                     </svg>
//                                 </span>
//                                 <span className="visuallyHidden">play background video</span>
//                             </button>
//                         </div>
//                 </section>
//                 <section className='relative  z-10 text-white p-12 md:p-24 text-center h-full '>
//                     <h1 className='text-5xl md:text-6xl font-bold leading-tight'>Michelle Nguyen</h1>
//                     <p className='mt-4 text-xl md:text-2xl'>IT Engineer creating data-driven tools, automation</p>
//                     <a href="#projects" className='mt-8 inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition'>View Projects</a>  
//                 </section>

//             </div>
            

//             <main className='max-w-6xl mx-auto p-6 md:p-12 grid gap-16'>


//                 {/* Expertise Section */}
//                 <section id="expertise" className='bg-white rounded-3xl p-8 shadow-lg'>
//                     <h2 className='text-4xl font-bold mb-8 text-center'>Expertise</h2>
//                     <div className='grid sm:grid-cols-2 gap-6'>
//                         {expertise.map((e) => (
//                             <div key={e.title} className='p-6 border  border-gray-200 rounded-xl hover:shadow-md transition-shadow'>
//                                 <h4 className='font-semibold text-xl mb-2'>{e.title}</h4>
//                                 <p className='text-gray-600. text-sm'>{e.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Testimonials */}
//                 <section id="testimonials" className="bg-white rounded-lg shadow p-6">
//                     <h2 className="text-2xl font-semibold">Client Testimonials</h2>
//                     <div className="relative overflow-hidden">
//                         <motion.div
//                             key={index}
//                             initial={{ x: 100, opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             exit={{ x: -100, opacity: 0 }}
//                             transition={{ duration: 0.8 }}
//                             className='grid md:grid-cols-3 gap-6 mt-6' >

//                             {groupedTestimonials[index].map((t, i) => (
//                                 <div key={i} className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
//                                     <p className="text-gray-700 italic">"{t.feedback}"</p>
//                                     <div className="mt-6 font-semibold text-indigo-600">{t.name}</div>
//                                     <div className="text-sm text-gray-500">{t.title}</div>
//                                 </div>
//                             ))}
//                         </motion.div>

//                         {/*  Arrows */}
//                         <button
//                             onClick={prev}
//                             className='absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-indigo-50'>
//                             <ChevronLeft className='w-5 h-5 text-indigo-600' />
//                         </button>
//                         <button
//                             onClick={next}
//                             className='absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-indigo-50'
//                         >
//                             <ChevronRight className='w-5 h-5 text-indigo-600' />
//                         </button>
//                     </div>

//                 </section>
   
//             </main>
//             {/* Contact Section */}
//             <section id="contact" className="bg-gradient-cta  text-white shadow p-6 text-center">
//                 <h3 className="text-xl font-semibold">Let's work together</h3>
//                 <p className="mt-2 text-sm opacity-90">Available for freelance and contract work. Reach out to discuss your project.</p>
//                 <a href='mailto:michellehlcn.au@gmail.com' className="inline-block mt-4 px-4 py-2 bg-white text-indigo-600 rounded-md font-medium">Email me</a>
//             </section>
//         </div>
//         </main>


