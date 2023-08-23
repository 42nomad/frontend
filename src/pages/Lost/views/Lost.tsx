import React from 'react';
import LostDoc from './LostDoc';
import SideBar from '../../../components/SideBar/SideBar';

function Lost() {
	return (
        <>
        <SideBar />
        <div className='bg-nomad-sand min-h-full pt-12'>
            <div className='grid grid-cols-2 gap-5 p-8 box-border'>
                <LostDoc isMyPage={false}/>
                <LostDoc isMyPage={false}/>
                <LostDoc isMyPage={false}/>
                <LostDoc isMyPage={false}/>
                <LostDoc isMyPage={false}/>
                <LostDoc isMyPage={false}/>
            </div>
        </div>
        </>
    )
}

export default Lost;
