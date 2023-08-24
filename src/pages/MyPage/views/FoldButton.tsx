import React from "react";

interface FoldButtonProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function FoldButton({open, setOpen}: FoldButtonProps) {
    return (
        <button type='button' className='w-full text-center' onClick={()=>{setOpen(!open)}}>
            <div>
                <span className='mr-2'>{open ? '닫기' : '열기'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M4.5 15.75l7.5-7.5 7.5 7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"} />
                </svg>
            </div>
        </button>
    )
}

export default FoldButton;