import Image from 'next/image'
import React from 'react'

const Main = () => {

  const name = "I'm Aaditya"
  // const about = "I'm a full-stack developer who loves creating projects that have a positive impact on people's lives. I enjoy exploring new tools, solving real-world problems, and continuously improving my development skills.  I also enjoy contributing to open-source projects. Outside of development, I'm deeply interested in competitive coding and solving algorithm challenges."
  const about = "Enjoys exploring new tools and solving real-world problems."

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col' id='main'>
      {/* Photo */}
      <div className='mb-4'>
        <Image src={"/image/profile-pic.png"} height={"150"} width={"150"} alt='Home image' />
      </div>
      <div className='mb-6'>
        <p className='text-3xl lg:max-w-3xl text-[#312B22] lg:text-6xl font-extrabold tracking-tighter text-center'>{name}<br />Software Developer <span className="animate-pulse z-0">_</span></p>
      </div>
      <div >
        <p className='text-[#312B22] max-w-xs lg:max-w-3xl text-center lg:text-xl tracking-tighter'>
          Full-stack developer passionate about creating impactful projects.<br />
          Enjoys exploring new tools and solving real-world problems.<br />
          Contributes to open-source projects.<br />
          Interested in competitive coding and algorithm challenges.
        </p>
      </div>
    </div>
  )
}

export default Main
