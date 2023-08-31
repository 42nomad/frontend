import nomadAxios from "../utils/nomadAxios";

const getCluster = (mapName: string) => nomadAxios.get('cluster', {params: {cluster: mapName}})

export default getCluster;