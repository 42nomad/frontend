import React from "react";
import { useNavigate } from "react-router-dom";
import getHome from "../../../services/getHome";

function SetToken() {
    const nav = useNavigate();
    const url = new URLSearchParams(window.location.search);
    const accessToken = url.get('token') || '';
    localStorage.setItem('token', accessToken);

    getHome().then((res) => {
        if (res.data === 1)
            nav('/cluster');
        else if (res.data === 2)
            nav('/meeting');
        else if (res.data === 3)
            nav('/lost');
        else
            nav('/seat');
    });

    return (
        <div>로딩중</div>
    )
}

export default SetToken;
