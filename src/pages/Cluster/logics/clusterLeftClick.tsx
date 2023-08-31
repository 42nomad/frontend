const clusterLeftClick = (cluster: number, setCluster: React.Dispatch<React.SetStateAction<number>>) => {
	if (cluster === 0)
		setCluster(8);
	else
		setCluster(cluster - 1);
}

export default clusterLeftClick;