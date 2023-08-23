import React from 'react';
// import AddLostDoc from '../../../assets/images/AddLostDoc.svg';

interface LostDocProps {
    isMyPage: boolean
}

function LostDoc({isMyPage}: LostDocProps) {
	return (
        <div className={`text-center cursor-pointer bg-white rounded-xl p-3 ${isMyPage ? 'pb-0' : ''} shadow-full`}>
            <div className='relative pb-[100%] mb-2'>
                <img src='https://webstatic.hoyoverse.com/upload/op-public/2023/05/19/df38144b11242c8787e51090e988c410_5760544583082283946.jpg'
                    className='absolute object-cover h-full rounded-lg' alt='lost-img'/>
            </div>
            <p className='font-nexonBold text-lg'>C5R6S8</p>
            <p className='text-xs'>2023-08-20</p>
            <button type='button' aria-label='delete-button' className={`${isMyPage ? '' : 'hidden'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 fill-red-500/90 stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
    )
}

export default LostDoc;
