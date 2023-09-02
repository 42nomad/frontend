import React from "react";

function Loading() {
    return (
        <div className="flex bg-nomad-sand h-full justify-center items-center">
                <div className="w-20 h-20 rounded-full absolute border-[12px] border-solid border-gray-200"/>
                <div className="w-20 h-20 rounded-full animate-spin absolute border-[12px] border-solid border-nomad-green border-t-transparent"/>
        </div>
    )
}

export default Loading;