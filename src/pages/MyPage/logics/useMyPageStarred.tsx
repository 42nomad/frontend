import { useEffect, useState } from "react";
import StarredData from "../../../interfaces/StarredData";
import MyPageStarredData from "../../../interfaces/MyPageStarredData";
import getStarred from "../../../services/getStarred";

function useMyPageStarred() {
    const [data, setData] = useState<Array<MyPageStarredData>>([]);

    useEffect(() => {
        getStarred()
        .then((res) => {
            const newData: Array<MyPageStarredData> = [];
            res.data.forEach((seat: StarredData) => {
                newData.push({id: seat.starredId, location: seat.location});
            });
            setData(newData);
        });
    }, []);

    return data;
}

export default useMyPageStarred;