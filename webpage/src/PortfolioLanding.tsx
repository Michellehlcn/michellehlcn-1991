import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const projects = [
    {
        id: 1,
        title: 'Parkrun Results Dashboard',
        image: 'https://images',
        short: 'Interactive dashboard for weekly',
        description: 'Responsible data scraping',
        tags: ['Python', 'React', 'Data']
    },
    {
        id: 2,
        title: 'Strava Activity Information',
        image: 'https://images',
        short: 'OAuth & automation for Strava activity posting',
        description: 'Automates activity posting with AI descriptions',
        tags: ['API', 'OAuth', 'Automation']
    },
    {
        id: 3,
        title: 'Invoice reminder',
        image: ''
    }
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
        <div className=' font-(family-name:--GT-America) bg-gray-50 text-gray-800'>
            <nav className={`fixed top-0 w-full z-50 transition-colors ${scrolled? 'bg-white shadow-md' : 'bg-transparent'} `}>
                <div className='max-w-6xl mx-auto flex justify-between items-center p-4 md:p-6'>
                    <span className={`font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>Michelle Nguyen</span>
                    <div className='space-x-6'>
                        <a href='#projects' className={`hover:underline ${scrolled ? 'text-gray-800' : 'text-white'}`}>Projects</a>
                        <a href='#expertise' className={`hover:underline ${scrolled ? 'text-gray-800' : 'text-white'}`}>Expertise</a>
                        <a href='#contact' className={`hover:underline ${scrolled ? 'text-gray-800' : 'text-white'}`}>Contact</a>
                    </div>
                </div>
            </nav>

            <header className='relative bg-indigo-800 text-white p-12 md:p-24 text-center'>
                <h1 className='text-5xl md:text-6xl font-bold leading-tight'>Michelle Nguyen</h1>
                <p className='mt-4 text-xl md:text-2xl'>Cloud Architect & Developer creating data-driven tools, automation</p>
                <a href="#projects" className='mt-8 inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition'>View Projects</a>
            </header>

            <main className='max-w-6xl mx-auto p-6 md:p-12 grid gap-16'>
                {/* Projects Section */}
                <section id="projects">
                    <h2 className='text-4xl font-bold mb-8 text-center'>Projects</h2>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {projects.map((p) => (
                            <motion.div key={p.id} 
                                        initial={{ opacity:0, y:10}}
                                        animate={{ opacity:1, y:0}}
                                        transition={{ delay: p.id * 0.1}}
                                        className='bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow'>
                                <div className='h-52 overflow-hidden'>
                                    <img src={p.image} alt={p.title} className='w-full h-full object-cover'></img>
                                </div>

                                <div className='p-6'>
                                    <h3 className='font-semibold text-2xl mb-2'>{p.title}</h3>
                                    <p className='text-gray-600 text-sm mb-3'>{p.short}</p>
                                    <p className='text-gray-700 text-sm mb-3'>{p.description}</p>
                                    <div className='flex flex-wrap gap-2'>
                                        {p.tags?.map((t) => (
                                            <span key={t} className='text-xs px-2 py-1 rounded bg-gray-100 text-gray-700'>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
                
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

