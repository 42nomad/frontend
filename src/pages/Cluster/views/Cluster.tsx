import React, { useState } from 'react';
import MapNav from '../../../components/MapNav/MapNav';
import SideBar from '../../../components/SideBar/views/SideBar';
import ClusterMap from './ClusterMap';
import FloorMap from './FloorMap';
import useDensity from '../logics/useDensity';
import clusterLeftClick from '../logics/clusterLeftClick';
import clusterRightClick from '../logics/clusterRightClick';

function Cluster() {
	const [ cluster, setCluster ] = useState(0);
	const clusterNames = ['클러스터 활성도', 'c1', 'c2', 'cx1', 'cx2', 'c3', 'c4', 'c5', 'c6'];
    const density = useDensity();

	return (
		<>
			<SideBar />
			<div className="bg-nomad-sand h-full flex flex-col justify-center items-center pt-5">
				<MapNav 
					mapName={clusterNames[cluster]}
					idx={cluster}
					setState={setCluster}
					leftButtonClick={clusterLeftClick}
					rightButtonClick={clusterRightClick}
				/>
				{cluster ? <ClusterMap cluster={cluster} mapName={clusterNames[cluster]} /> 
					: <FloorMap setCluster={setCluster} density={density} />}
			</div>
		</>
	);
}

export default Cluster;
