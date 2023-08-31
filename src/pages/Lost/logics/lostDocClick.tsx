import { NavigateFunction } from "react-router-dom";

const lostDocClick = (nav: NavigateFunction, postId: number) => {
    if (postId === 0)
        nav('/lost/new');
    else
        nav(`/lost/${postId}`);
}

export default lostDocClick;