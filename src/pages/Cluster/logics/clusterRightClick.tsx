const clusterRightClick = (cluster: number, setCluster: React.Dispatch<React.SetStateAction<number>>) => {
	if (cluster === 8)
		setCluster(0);
	else
		setCluster(cluster + 1);
}

export default clusterRightClick;