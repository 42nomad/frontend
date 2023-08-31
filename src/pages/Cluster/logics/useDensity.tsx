import { useEffect, useState } from "react";
import nomadAxios from "../../../utils/nomadAxios";
import ClusterDensity from "../../../interfaces/ClusterDensity";

function useDensity() {
    const [ density, setDensity ] = useState<ClusterDensity>({c1: 0, c2: 0, c3: 0, c4: 0, c5: 0, c6: 0, cx1: 0, cx2: 0});

    useEffect(() => {
        nomadAxios.get('cluster/density').then((res) => setDensity(res.data));
    }, []);

    return density;
}

export default useDensity;