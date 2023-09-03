import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHome } from "../../../store/homeReducer";
import getHome from "../../../services/getHome";
import switchHome from "../../../utils/switchHome";
import Loading from "../../../components/Loading/Loading";

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
        <Loading />
    )
}

export default SetToken;
