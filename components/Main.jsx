import Image from 'next/image'
import React from 'react'

const Main = () => {

  const about = "I'm a full-stack developer who loves creating projects that have a positive impact on people's lives. I enjoy exploring new tools, solving real-world problems, and continuously improving my development skills.  I also enjoy contributing to open-source projects. Outside of development, I'm deeply interested in competitive coding and solving algorithm challenges."

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col'>
      {/* Photo */}
      <div className='mb-4'>
        <Image src={"/image/profile-pic.png"} height={"150"} width={"150"} alt='Home image' />
      </div>
      <div className='mb-6'>
        <p className='text-3xl lg:max-w-3xl text-[#312B22] lg:text-6xl font-extrabold tracking-tighter text-center'>Software Developer<spam className="animate-pulse z-0">_</spam></p>
      </div>
      <div >
        <p className='text-[#312B22] max-w-xs lg:max-w-3xl text-center lg:text-xl tracking-tighter'>{about}</p>
      </div>
    </div>
  )
}

export default Main
