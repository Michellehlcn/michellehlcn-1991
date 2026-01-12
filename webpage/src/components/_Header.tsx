export function _Header() {
    return (
        <header className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm ring ring-gray-950/5 supports-[backdrop-filter]:bg-background/60
        mr-[calc(100%-100vw)] flex h-14 items-center justify-between px-4  after:-bottom-px sm:px-6 '>
                <div>
                    <a className="shrink-0 mt-2 text-3xl tracking-tighter sm:text-3xl text-pretty" aria-label="Home" href="/">MICHELLE NGUYEN</a> 
                </div>
                <div className="@container flex flex-1 justify-start pl-8"></div>
                <div>
                    <nav className='flex items-center gap-5 max-md:hidden lg:gap-6'>
                        <a href="#aboutme" className='hover:text-indigo-600 text-s/6 text-gray-950 dark:text-white'>About</a>
                        <a href="#blog" className='hover:text-indigo-600 text-s/6 text-gray-950 dark:text-white'>Blog</a>
                        <a href="#projects" className='hover:text-indigo-600 text-s/6 text-gray-950 dark:text-white'>Projects</a>
                          
                        {/* <a href="#expertise" className='hover:text-indigo-600 text-s/6 text-gray-950 dark:text-white'>Expertise</a>
                        <a href="#cv" className='hover:text-indigo-600 text-s/6 text-gray-950 dark:text-white'>CV</a> */}
                        <a href="#contact" className='text-s/6 text-gray-950 dark:text-white rounded-full bg-gray-950 px-2.5 py-0.5 text-sm/6 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 dark:bg-gray-700 dark:text-white dark:focus-visible:outline-white'>Contact</a>
                        {/* <a href="/artwork" className='hover:text-indigo-600'>Artwork</a> */}
                    </nav>
                </div>
        </header>
    );
}