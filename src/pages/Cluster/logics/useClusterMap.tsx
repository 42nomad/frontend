import { useEffect } from "react";
import ClusterMapData from "../../../interfaces/ClusterMapData";
import colorSeat from "./colorSeat";
import getCluster from "../../../services/getCluster";

function useClusterMap(mapName: string) {
    useEffect(() => {
        getCluster(mapName)
        .then((res) => {
            const { data } = res;
            data.forEach((seat: ClusterMapData) => {
                if (seat.isAvailable === false)
                    colorSeat(seat.location, 1, seat.cadet);
                else if (seat.elapsedTime !== -1)
                    colorSeat(seat.location, 2, seat.elapsedTime.toString());
            });
        });
    }, [mapName]);
}

export default useClusterMap;