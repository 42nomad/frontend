import { useEffect, useState } from "react";
import LostDocData from "../../../interfaces/LostDocData";
import getLostList from "../../../services/getLostList";

function useLostList() {
    const [docList, setDocList] = useState<LostDocData[]>([]);

    useEffect(() => {
        getLostList().then((res) => {
            setDocList(res.data);
        });
    }, []);

    return docList;
}

export default useLostList;