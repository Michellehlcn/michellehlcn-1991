export function _Header() {
    return (
        <header className='bg-white shadow-sm sticky top-0 z-40'>
                <div className='max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 rounded-md bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold'>MN</div>
                        <div>
                            <div className='text-lg font-semibold'>Michelle Nguyen</div>
                            <div className='text-sm text-gray-500'>Cloud Architect & Developer</div>
                        </div>
                    </div>

                    <nav className='hidden md:flex gap-8 text-sm text-gray-700'>
                        <a href="#blog" className='hover:text-indigo-600'>Blog</a>
                        <a href="#projects" className='hover:text-indigo-600'>Projects</a>
                        <a href="#expertise" className='hover:text-indigo-600'>Expertise</a>
                        <a href="#cv" className='hover:text-indigo-600'>CV</a>
                        <a href="#contact" className='hover:text-indigo-600'>Contact</a>
                    </nav>
                </div>
        </header>
    );
}