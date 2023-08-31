interface MapNavProps {
    mapName: string,
    idx: number,
    setState: React.Dispatch<React.SetStateAction<number>>,
    leftButtonClick: (idx: number, setState: React.Dispatch<React.SetStateAction<number>>) => void,
    rightButtonClick: (idx: number, setState: React.Dispatch<React.SetStateAction<number>>) => void
}

export default MapNavProps;