interface FloorMapBoxProps {
    cluster: {name: string, idx: number},
    density: number,
    setCluster: React.Dispatch<React.SetStateAction<number>>
}

export default FloorMapBoxProps;