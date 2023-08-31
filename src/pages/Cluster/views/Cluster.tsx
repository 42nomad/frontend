import React, { useState } from 'react';
import MapNav from '../../../components/MapNav/MapNav';
import SideBar from '../../../components/SideBar/views/SideBar';
import ClusterMap from './ClusterMap';
import FloorMap from './FloorMap';

const clusterLeftClick = (cluster: number, setCluster: React.Dispatch<React.SetStateAction<number>>) => {
	if (cluster === 0)
		setCluster(8);
	else
		setCluster(cluster - 1);
}

const clusterRightClick = (cluster: number, setCluster: React.Dispatch<React.SetStateAction<number>>) => {
	if (cluster === 8)
		setCluster(0);
	else
		setCluster(cluster + 1);
}

function Cluster() {
	const [ cluster, setCluster ] = useState(0);
	const clusterNames = ['클러스터 활성도', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'cx1', 'cx2'];

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
				{cluster ? <ClusterMap mapName={clusterNames[cluster]}/> : <FloorMap />}
			</div>
		</>
	);
}

export default Cluster;
