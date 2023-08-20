import React from 'react';
// import AddLostDoc from '../../../assets/images/AddLostDoc.svg';

function LostDoc() {
	return (
        <div className='text-center cursor-pointer'>
            <div className='relative pb-[100%] mb-2'>
                <img src='https://webstatic.hoyoverse.com/upload/op-public/2023/05/19/df38144b11242c8787e51090e988c410_5760544583082283946.jpg'
                    className='absolute object-cover h-full' alt='lost-img'/>
            </div>
            <p className='font-nexonBold text-lg'>C5R6S8</p>
            <p className='text-xs'>2023-08-20</p>
        </div>
    )
}

export default LostDoc;
