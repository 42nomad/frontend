import React from 'react';
import CX2Seoul from '../../../assets/images/maps/cx2_seoul';
import C1Seoul from '../../../assets/images/maps/c1_seoul';
import C2Seoul from '../../../assets/images/maps/c2_seoul';
import CX1Seoul from '../../../assets/images/maps/cx1_seoul';
import C3Seoul from '../../../assets/images/maps/c3_seoul';
import C4Seoul from '../../../assets/images/maps/c4_seoul';
import C5Seoul from '../../../assets/images/maps/c5_seoul';
import C6Seoul from '../../../assets/images/maps/c6_seoul';
import ClusterMapProps from '../../../interfaces/ClusterMapProps';
import useClusterMap from '../logics/useClusterMap';
import NotFound from '../../../components/NotFound/NotFound';

function ClusterMap({cluster, mapName}: ClusterMapProps) {
    useClusterMap(mapName);
    switch(cluster) {
        case 1:
            return (<C1Seoul />)
        case 2:
            return (<C2Seoul />)
        case 3:
            return (<CX1Seoul />)
        case 4:
            return (<CX2Seoul />)
        case 5:
            return (<C3Seoul />)
        case 6:
            return (<C4Seoul />)
        case 7:
            return (<C5Seoul />)
        case 8:
            return (<C6Seoul />)
        default:
            return (<NotFound />)
    }
}

export default ClusterMap;
