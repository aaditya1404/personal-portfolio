import React from 'react'

const SmartPhoneFrame = ({ src, onClose }) => {

    return (
        <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'>
            <button
                className='absolute top-0  cursor-pointer right-4 text-white text-lg font-bold '
                onClick={onClose}
            >
                Back
            </button>
            <div className='relative bg-black rounded-4xl p-2 w-[320px] h-[690px] lg:w-[280px] lg:h-[600px] lg:mt-0 overflow-hidden border-2 border-gray-700 shadow-2xl '>
                <iframe src={src} className='w-full h-full rounded-3xl border-none' title='Project Demo'></iframe>
            </div>
        </div>
    )
}

export default SmartPhoneFrame
