import { useEffect, useState } from "react";
import nomadAxios from "../../../utils/nomadAxios";
import ClusterDensity from "../../../interfaces/ClusterDensity";

function useDensity() {
    const [ density, setDensity ] = useState<ClusterDensity>({c1: -1, c2: -1, c3: -1, c4: -1, c5: -1, c6: -1, cx1: -1, cx2: -1});

    useEffect(() => {
        nomadAxios.get('cluster/density').then((res) => setDensity(res.data));
    }, []);

    return density;
}

export default useDensity;