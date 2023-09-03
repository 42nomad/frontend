import { useEffect, useState } from "react";
import LostDocData from "../../../interfaces/LostDocData";
import getMyDocs from "../../../services/getMyDocs";

function useMyPageDocs() {
    const [data, setData] = useState<Array<LostDocData> | null>(null);

    useEffect(() => {
        getMyDocs()
        .then((res) => {
            setData(res.data);
        });
    }, []);

    return data;
}

export default useMyPageDocs;