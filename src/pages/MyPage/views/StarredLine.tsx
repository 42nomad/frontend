import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import MyPageStarredData from "../../../interfaces/MyPageStarredData";
import unstarredButtonClick from "../logics/unstarredButtonClick";

function StarredLine({id, location}: MyPageStarredData) {
    return (
        <div className='flex items-center justify-center' id={location}>
            <span className='mr-4'>{location}</span>
            <button type='button' aria-label='delete-button' onClick={() => unstarredButtonClick(id, location)}>
                <XCircleIcon className="w-6 h-6 fill-red-500/90 stroke-white" />
            </button>
        </div>
    )
}

export default StarredLine;