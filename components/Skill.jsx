import Image from 'next/image'
import React from 'react'

const Skill = () => {

  const languages = [
    {
      src: "/icons/javascript.png",
      name: "Javascript"
    },
    {
      src: "/icons/typescript.png",
      name: "Typescript"
    },
    {
      src: "/icons/python.png",
      name: "Python"
    },
    {
      src: "/icons/cpp.png",
      name: "C++"
    }
  ];

  const frameworks = [
    {
      src: "/icons/nextjs.png",
      name: "Next.js"
    },
    {
      src: "/icons/reactjs.png",
      name: "React.js"
    },
    {
      src: "/icons/express.png",
      name: "Express"
    },
    {
      src: "/icons/nodejs.png",
      name: "Node.js"
    },
    {
      src: "/icons/nextauth.png",
      name: "NextAuth"
    },
    {
      src: "/icons/socketio.png",
      name: "Socket.io"
    }
  ];

  const database = [
    {
      src: "/icons/mongodb.png",
      name: "MongoDB"
    },
    {
      src: "/icons/mysql.png",
      name: "MySQL"
    },
    {
      src: "/icons/postgress.png",
      name: "PostgreSQL"
    }
  ];

  const cloud = [
    {
      src: "/icons/aws.png",
      name: "AWS"
    },
    {
      src: "/icons/github.png",
      name: "Github"
    },
  ];

  return (
    <div id='skill' className='w-full min-h-screen flex items-center justify-center flex-col'>
      <p className='w-sm lg:w-5xl border-b border-black/10 text-black/70 text-3xl mb-8 mt-14 lg:mt-8'>Skill</p>

      {/* Programming Languages */}
      <div className='w-sm lg:w-5xl mb-4'>
        <p className='inline-block border-b border-black/10 pb-1 mb-2'>Programming Languages</p>
        <div className='grid grid-cols-2 lg:grid-cols-4'>
          {languages?.map((langIcon, index) => (
            (
              <div key={index} className='w-full rounded-md px-2 py-2 flex items-center gap-4 hover:bg-[#fff7ca] duration-500'>
                <Image src={langIcon.src} width={50} height={50} alt='icon' />
                <p className='font-bold tex-sm lg:text-2xl'>{langIcon.name}</p>
              </div>
            )
          ))}
        </div>
      </div>


      {/* Programming Languages */}
      <div className='w-sm lg:w-5xl mb-4'>
        <p className='inline-block border-b border-black/10 pb-1 mb-2'>Frameworks & Libraries</p>
        <div className='grid grid-cols-2 lg:grid-cols-4'>
          {frameworks?.map((icon, index) => (
            (
              <div key={index} className=' w-full rounded-md px-2 py-2 flex items-center gap-4 hover:bg-[#fff7ca] duration-500'>
                <Image src={icon.src} width={50} height={50} alt='icon' />
                <p className='font-bold text-sm lg:text-2xl'>{icon.name}</p>
              </div>
            )
          ))}
        </div>
      </div>


      {/* Database */}
      <div className='w-sm lg:w-5xl mb-4'>
        <p className='inline-block border-b border-black/10 pb-1 mb-2'>Databases</p>
        <div className='grid grid-cols-2 lg:grid-cols-4'>
          {database?.map((icon, index) => (
            (
              <div key={index} className=' w-full rounded-md px-2 py-2 flex items-center gap-4 hover:bg-[#fff7ca] duration-500'>
                <Image src={icon.src} width={50} height={50} alt='icon' />
                <p className='font-bold text-sm lg:text-2xl'>{icon.name}</p>
              </div>
            )
          ))}
        </div>
      </div>


      {/* Cloud & devOps */}
      <div className='w-sm lg:w-5xl mb-4'>
        <p className='inline-block border-b border-black/10 pb-1 mb-2'>Databases</p>
        <div className='grid grid-cols-2 lg:grid-cols-4'>
          {cloud?.map((icon, index) => (
            (
              <div key={index} className=' w-full rounded-md px-2 py-2 flex items-center gap-4 hover:bg-[#fff7ca] duration-500'>
                <Image src={icon.src} width={50} height={50} alt='icon' />
                <p className='font-bold text-sm lg:text-2xl'>{icon.name}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill
