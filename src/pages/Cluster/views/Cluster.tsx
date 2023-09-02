import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import MapNav from '../../../components/MapNav/MapNav';
import ClusterMap from './ClusterMap';
import FloorMap from './FloorMap';
import useDensity from '../logics/useDensity';
import clusterLeftClick from '../logics/clusterLeftClick';
import clusterRightClick from '../logics/clusterRightClick';

function Cluster() {
	const [ cluster, setCluster ] = useState(0);
	const clusterNames = ['클러스터 활성도', 'C1', 'C2', 'CX1', 'CX2', 'C3', 'C4', 'C5', 'C6'];
    const density = useDensity();

	return (
		<>
			<Header />
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
