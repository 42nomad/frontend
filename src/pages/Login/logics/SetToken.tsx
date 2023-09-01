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
    const home = useSelector((state: RootState) => state.home.home)
    const url = new URLSearchParams(window.location.search);
    const accessToken = url.get('token') || '';
    localStorage.setItem('token', accessToken);

    useEffect(() => {
        if (accessToken && accessToken !== '') {
            getHome().then((res) => {
                dispatch(setHome(home));
                switchHome(res.data, nav);
            });
        } else
            switchHome(home, nav);
    }, [accessToken, home, nav, dispatch]);

    return (
        <div>로딩중</div>
    )
}

export default SetToken;
