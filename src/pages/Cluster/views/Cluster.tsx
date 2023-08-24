import React from 'react';
import MapNav from '../../../components/MapNav/views/MapNav';
import SideBar from '../../../components/SideBar/views/SideBar';
import ClusterMap from './ClusterMap';
// import FloorMap from './FloorMap';

function Cluster() {
	return (
		<>
			<SideBar />
			<div className="bg-nomad-sand h-full flex flex-col justify-center items-center pt-5">
				<MapNav />
				{/* <FloorMap /> */}
				<ClusterMap />
			</div>
		</>
	);
}

export default Cluster;
