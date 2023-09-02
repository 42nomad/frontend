import React from "react";
import { MapIcon } from "@heroicons/react/24/outline";
import FixedButtonProps from "../../../interfaces/FixedButtonProps";

function FixedButton({setCluster}: FixedButtonProps) {
    return (
        <button type="button" 
            className="w-12 h-12 rounded-full bg-nomad-green shadow-full flex justify-center items-center absolute bottom-7 right-7"
            onClick={()=>setCluster(0)}    
        >
            <MapIcon className="w-8 h-8 stroke-nomad-sand"/>
        </button>
    )
}

export default FixedButton;