import React, { useState } from 'react';
import MapNav from '../../../components/MapNav/views/MapNav';
import ClusterMap from './ClusterMap';
import FloorMap from './FloorMap';
import useDensity from '../logics/useDensity';
import FixedButton from './FixedButton';
import Loading from '../../../components/Loading/Loading';

function Cluster() {
	const [cluster, setCluster] = useState(0);
	const clusterNames = ['클러스터 활성도', 'C1', 'C2', 'CX1', 'CX2', 'C3', 'C4', 'C5', 'C6'];
	const density = useDensity();

	return (
		<>
			{density.c1 === -1 && <Loading />}
			{density.c1 !== -1 && (
				<div className="bg-nomad-sand h-full flex flex-col justify-center items-center pt-5 relative">
					<MapNav mapName={clusterNames[cluster]} idx={cluster} setIdx={setCluster} maxIdx={8} />
					{cluster ? (
						<>
							<ClusterMap cluster={cluster} mapName={clusterNames[cluster]} />
							<FixedButton setCluster={setCluster} />
						</>
					) : (
						<FloorMap setCluster={setCluster} density={density} />
					)}
				</div>
			)}
		</>
	)
}

export default Cluster;
