import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LostFormData from "../../../interfaces/LostFormData";
import makeNewDocData from "./makeNewDocData";
import getMember from "../../../services/getMember";
import getLostData from "../../../services/getLostData";

function useLostData() {
    const nav = useNavigate();
    const pathId = window.location.pathname.replace('/lost/', '');
    const [info, setInfo] = useState<LostFormData>(makeNewDocData());
    
    useEffect(() => {
        if (pathId === 'new' && info.writer === '')
            getMember().then((res) => setInfo({...info, writer: res.data}));
        else if (pathId !== 'new' && info.postId === 0) {
            getLostData(pathId)
            .then((res) => setInfo(res.data))
            .catch((err) => {
                if (err.response.status === 404)
                    nav('/notFound');
            });
        }
    }, [pathId, info, nav]);

    return (info);
}

export default useLostData;