 export function _Footer() {
    return (
        <footer className='text-center text-sm text-gray-500  mt-20'>
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
                <section className='relative  z-10 text-white p-5 md:p-5 text-center h-full custom-text-shadow' >
                    <h1 className='mt-2 text-6xl tracking-tighter sm:text-8xl text-pretty' >Michelle Nguyen</h1>
                    {/* <p className='mt-4 text-2xl tracking-tighter sm:text-2xl text-pretty'>IT Engineer creating data-driven tools, automation.</p> */}
                    <p className='mt-4 text-xl tracking-tighter sm:text-xl text-pretty'>Open to contracts & collaborations. Email me: michellehlcn.au@gmail.com</p>
                    <a href="#projects" className='bg-white mt-8 gap-2 inline-flex justify-center rounded-full text-sm/6 font-semibold ring-1 text-gray-950 ring-gray-950/10 hover:ring-gray-950/20 dark:text-white dark:ring-white/10 dark:hover:ring-white/20 px-4 py-2'>View Projects <svg fill="currentColor" aria-hidden="true" viewBox="0 0 10 10" className="-mr-0.5 w-2.5"><path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path></svg></a>
                </section>
                
            </div>
            <section className=" sm:col-span-full  @container grid w-full ">
                    <span className="mt-4 mb-4 text-xl tracking-tighter sm:text-xl text-pretty"> @ {new Date().getFullYear()} Michelle Nguyen. All rights reserved.</span>
            </section>
        </footer>
    )
}