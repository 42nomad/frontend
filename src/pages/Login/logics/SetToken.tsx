import React from "react";
import { useNavigate } from "react-router-dom";
import getHome from "../../../services/getHome";

function SetToken() {
    const nav = useNavigate();
    const url = new URLSearchParams(window.location.search);
    const accessToken = url.get('token') || '';
    localStorage.setItem('token', accessToken);

    getHome().then((res) => {
        // path명 바꾸기
        if (res.data === 1)
            nav('/cluster');
        else if (res.data === 2)
            nav('/meetingRoom');
        else if (res.data === 3)
            nav('/lost');
        else
            nav('/checkSeat');
    });

    return (
        <div>로딩중</div>
    )
}

export default SetToken;