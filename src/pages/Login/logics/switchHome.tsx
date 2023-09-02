import { NavigateFunction } from "react-router-dom";

const switchHome = (home: number, nav: NavigateFunction) => {
    switch(home) {
        case 0:
            return nav('/seat');
        case 1:
            return nav('/cluster');
        case 2:
            return nav('/meeting');
        case 3:
            return nav('/lost');
        default:
            return nav('/seat');
    }
}

export default switchHome;