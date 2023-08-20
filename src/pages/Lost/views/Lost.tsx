import React from 'react';
import LostDoc from './LostDoc';

function Lost() {
	return (
        <div className='bg-nomad-sand min-h-full'>
            <div className='grid grid-cols-2 gap-7 p-10 box-border'>
                <LostDoc />
                <LostDoc />
                <LostDoc />
                <LostDoc />
                <LostDoc />
                <LostDoc />
            </div>
        </div>
    )
}

export default Lost;
