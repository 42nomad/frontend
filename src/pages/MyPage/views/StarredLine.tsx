import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import MyPageStarredData from "../../../interfaces/MyPageStarredData";
import nomadAxios from "../../../utils/nomadAxios";

const unstarredButtonClick = (id: number, location: string) => {
    Swal.fire({
        title: '<p id="swalConfirmTitle">즐겨찾기에서 삭제하시겠습니까?</p>',
        html: '<p id="swalConfirmText">알림 설정한 자리 삭제 시 알림도 함께 취소됩니다.<p>',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소',
        confirmButtonColor: '#B90E0A',
        cancelButtonColor: '#20633F',
        heightAuto: false
    }).then((res) => {
        if (res.isConfirmed) {
            nomadAxios.delete(`member/favorite/${id}`)
            .then(() => {
                const line = document.getElementById(`${location}`) as HTMLDivElement;
                if (line)
                    line.style.display = 'none';
            })
        }
    });
} 

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