import ClusterDensity from "./ClusterDensity"

interface FloorMapProps {
    setCluster: React.Dispatch<React.SetStateAction<number>>,
    density: ClusterDensity
}

export default FloorMapProps