// import { motion } from "framer-motion";
"use client"

import type { NextPage } from 'next'

interface ImagesProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}


const Gallery: NextPage = () => {
  const _images: ImagesProps[] = [
    {
      id: "art-1.jpg",
      title: "Morning Glow",
      description: "Soft pastel sunrise over quiet hills.",
      image: "/arts/art-1.jpg",
      category: "Landscape",
    },
    {
      id: "art-2.jpg",
      title: "Urban Contrast",
      description: "Abstract reflection of city lights after rain.",
      image: "/arts/art-2.jpg",
      category: "Abstract",
    },
    {
      id: "art-3.jpg",
      title: "Still Life – Harmony",
      description: "A study in balance and color warmth.",
      image: "/arts/art-3.jpg",
      category: "Still Life",
    },
    {
      id: "art-4.jpg",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-4.jpg",
      category: "Photography",
    },
    {
      id: "art-13.png",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-13.png",
      category: "Photography",
    },
     {
      id: "art-14.png",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-14.png",
      category: "Photography",
    },
     {
      id: "art-15.png",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-15.png",
      category: "Photography",
    },
     {
      id: "art-16.png",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-16.png",
      category: "Photography",
    },
     {
      id: "art-5.jpg",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-5.jpg",
      category: "Photography",
    },
    
     {
      id: "art-6.jpg",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-6.jpg",
      category: "Photography",
    },
     {
      id: "art-7.jpg",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-7.jpg",
      category: "Photography",
    },
     {
      id: "art-8.jpg",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-8.jpg",
      category: "Photography",
    },
     {
      id: "art-9.jpg",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-9.jpg",
      category: "Photography",
    },
     {
      id: "art-10.jpg",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-10.jpg",
      category: "Photography",
    },
     {
      id: "art-11.jpg",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-11.jpg",
      category: "Photography",
    },
     {
      id: "art-12.jpg",
      title: "Waves in Motion",
      description: "Dynamic ocean energy captured in motion blur.",
      image: "/arts/art-12.jpg",
      category: "Photography",
    },
     

  ];
  return (
    <main className="mx-auto max-w-[1960px] p-4 ">
      
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 ">
        <div style={{ backgroundColor: "#fffbed" }} className=" after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0 ">
          <div className="absolute inset-0 flex items-center justify-center">
            <span></span>
            <span></span>
          </div>
          <h1 className="mt-8 mb-4 text-black text-base font-bold uppercase tracking-widest">Sketch, Hand Drawings, Digital Arts</h1>
          <h1 className="mt-8 mb-4 text-black text-base font-bold uppercase tracking-widest">by Michelle Nguyen</h1>

          <p className="text-gray-600 text-pretty max-w-[40ch] text-black sm:max-w-[32ch]">Explore the diverse range of Michelle's drawings, from dynamic portraits, still lifes, to intricate life studies. Each piece showcases a unique blend of ambient mode and artistic flair, capturing the essence of form and perspective, where every object tells a story of its own.</p>
        </div>

        {_images.map(({ id }) => (
          <div key={id}>
            <img
              alt="artwork photo"
              className="line-y line-x  w-full object-cover"
              style={{ transform: 'translate3d(0,0,0)', transition: 'transform .4s' }}
              src={`/arts/${id}`}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
                (max-width:1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
            ></img>
          </div>
        ))}

      </div>
    </main>
  )
}
export default Gallery