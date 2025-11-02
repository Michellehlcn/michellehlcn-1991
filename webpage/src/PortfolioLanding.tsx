import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const projects = [
    {
        id: 1,
        title: 'Payment gateway',
        image: 'https://images',
        short: 'Humm buy now pay later <> Webflow',
        description: 'Integration between non supportive native platform Webflow and Humm Payment',
        tags: ['Javascript', 'Java', 'GraphAPI']
    },
    {
        id: 2,
        title: 'Strava - Parkrun Activity Information',
        image: 'https://images',
        short: 'OAuth & automation for Strava activity posting via Parkrun weekly',
        description: 'Automates activity posting with AI descriptions',
        tags: ['API', 'OAuth', 'Automation']
    },
    {
        id: 3,
        title: 'Invoice reminder',
        image: '',
        short: 'Payment invoice reminder',
        description: 'The tool helps user to send reminders to clients to pay invoices before the due date',
        tags: ['Go , Smtp']
    },
     {
        id: 4,
        title: 'Pipedrive Connect',
        image: 'https://images',
        short: 'CRM pipedrive <> Opensolar',
        description: 'Pipelines between CRM pipedrive, Onedrive, Opensolar to create auto transactions, purchase, deals.',
        tags: ['Python', 'MongoDB', 'GraphAPI']
    },
]

const expertise = [
{ title: 'Cloud & Infrastructure', description: 'Scalable, resilient cloud infrastructure with automation.' },
{ title: 'APIs & Integration', description: 'OAuth flows, token management, and API orchestration.' },
{ title: 'Data & Automation', description: 'Data pipelines, scraping responsibly, and actionable insights.' },
{ title: 'Frontend & UX', description: 'Clean, responsive interfaces and user-centric design.' },
];


export default function PortfolioLanding() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='min-h-screen font-sans bg-gray-50 text-gray-800'>
            {/* Top navigation */}
            <header className='bg-white shadow-sm sticky top-0 z-40'>
                <div className='max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 rounded-md bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold'>MN</div>
                        <div>
                            <div className='text-lg font-semibold'>Michelle Nguyen</div>
                            <div className='text-sm text-gray-500'>Cloud Architect & Software Engineer</div>
                        </div>
                    </div>

                    <nav className='hidden md:flex gap-8 text-sm text-gray-700'>
                        <a href="#blog" className='hover:text-indigo-600'>Blog</a>
                        <a href="#projects" className='hover:text-indigo-600'>Projects</a>
                        <a href="expertise" className='hover:text-indigo-600'>Expertise</a>
                        <a href="#cv" className='hover:text-indigo-600'>CV</a>
                        <a href="#contact" className='hover:text-indigo-600'>Contact</a>
                    </nav>
                </div>
            </header>
            {/* Hero */}
            <section className='bg-gradient-to-r from-white to-gray-50 py-12'>
                <div className='max-w-6xl mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-3 gap-8 items-center'>
                    <div className='md:col-span-2'>
                        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>Building reliable data and automation platforms</h1>
                        <p className='mt-4 text-lg text-gray-600'>I design cloud-native systems, automate API workflows, and craft UX for data-heavy web apps. Current focus: observability, token-safe integrations and AI-assisted summaries.</p>
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
                                <div className='font-medium'>Cloud & Data Engineering - 5+ years</div>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4 md:items-end'>
                        <div className='w-full md:w-64 bg-white rounded-lg shadow-sm p-4'>
                            <div className='text-xs text-gray-500'>Key Skills</div>
                            <div className='mt-3 flex flex-wrap gap-2'>
                                {['Python', 'Java', 'Javascript', 'Typescript', 'Postgres', 'AWS', 'GCP', 'Terraform', 'Lambda'].map((s) => (
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
                <aside className='md:col-span-1 sticky top-24 self-start'>
                    <div className='bg-white rounded-lg shadow-sm p-6'>
                        <h3 className='text-lg font-semibold'>Curriculum Vitae</h3>
                        <p className='mt-2 text-sm text-gray-600'>Summary of roles, select achievements and contact details.</p>
                        <dl className='mt-4 text-sm text-gray-700 space-y-3'>
                            <div>
                                <dt className='text-xs tetx-gray-500'>Current</dt>
                                <dd className='font-medium'>Engineer - Freelance</dd>
                            </div>
                            <div>
                                <dt className='text-xs tetx-gray-500'>Previous</dt>
                                <dd className='font-medium'>Data Engineer - Resilience Building Council</dd>
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
                                    <div className='md:flex'>
                                        <img src={p.image} alt={p.title} className='h-40 w-full md:w-40 object-cover'></img>
                                        <div className='p-4 flex-1'>
                                            <h3 className='font-semibold text-lg'>{p.title}</h3>
                                            <p className='mt-2 text-sm text-gray-600'>{p.short}</p>
                                            <p className='mt-3 text-sm text-gray-700'>{p.description}</p>
                                            <p className='mt-4 flex flex-wrap gap-2'>
                                                {p.tags?.map((t)=> (
                                                    <span key={t} className='text-xs px-2 py-1 rounded bg-gray-100 text-gray-700'>{t}</span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>

                </section>


            </div>
            

            <header className='relative bg-indigo-800 text-white p-12 md:p-24 text-center'>
                <h1 className='text-5xl md:text-6xl font-bold leading-tight'>Michelle Nguyen</h1>
                <p className='mt-4 text-xl md:text-2xl'>Cloud Architect & Developer creating data-driven tools, automation</p>
                <a href="#projects" className='mt-8 inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition'>View Projects</a>
            </header>

            <main className='max-w-6xl mx-auto p-6 md:p-12 grid gap-16'>
          
                
                {/* Expertise Section */}
                <section id="expertise" className='bg-white rounded-3xl p-8 shadow-lg'>
                    <h2 className='text-4xl font-bold mb-8 text-center'>Expertise</h2>
                    <div className='grid sm:grid-cols-2 gap-6'>
                        {expertise.map((e) => (
                            <div key={e.title} className='p-6 border rounded-xl hover:shadow-md transition-shadow'>
                                <h4 className='font-semibold text-xl mb-2'>{e.title}</h4>
                                <p className='text-gray-600. text-sm'>{e.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* Contact Section */}
                <section id="contact" className='bg-white rounded-3xl p-8 shadow-lg'>
                        <h2 className='text-4xl font-bold mb-4 text-center'>Contact</h2>
                        <p className='text-gray-600 text-center mb-6'>Interested in collaborating? Reach out and I'll respond promptly.</p>
                        <form className='grid gap-4 md:grid-cols-2'>
                            <input className='p-3 border rounded-md' placeholder='Your Name'></input>
                            <input className='p-3 border rounded-md' placeholder='Your Email'></input>
                            <input className='p-3 border rounded-md md:col-span-2'></input>
                            <textarea className='p-3 border rounded-md md:col-span-2 h-32' placeholder='Message'></textarea>
                            <div className='md:col-span-2 flex items-center justify-between'>
                                <small className='text-gray-500'>Or email: michellehlcn.au@gmail.com</small>
                                <button type="submit" className='px-6 py-3 rounded bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition'>Send Message</button>
                            </div>
                        </form>
                </section>
            </main>

            <footer className='text-center text-sm text-gray-500 py-6'>
                @ {new Date().getFullYear()} Michelle Nguyen
            </footer>
        </div>
    )
}

