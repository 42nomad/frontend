import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setHome } from "../../../store/homeReducer";
import { RootState } from "../../../store/store";
import getHome from "../../../services/getHome";
import switchHome from "./switchHome";

function SetToken() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const url = new URLSearchParams(window.location.search);
    const accessToken = url.get('token') || '';
    localStorage.setItem('token', accessToken);

    useEffect(() => {
        getHome().then((res) => {
            dispatch(setHome(res.data));
            switchHome(res.data, nav);
        });
    }, [accessToken, nav, dispatch]);

    return (
        <div>로딩중</div>
    )
}

export default SetToken;
