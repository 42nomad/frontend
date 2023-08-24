import React from "react";

function StarredLine() {
    return (
        <div className='flex items-center justify-center'>
            <span className='mr-4'>cx3r5s10</span>
            <button type='button' aria-label='delete-button'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-red-500/90 stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
    )
}

export default StarredLine;