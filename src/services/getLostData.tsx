import nomadAxios from "../utils/nomadAxios";

const getLostData = (pathId: string) => nomadAxios.get('board', {params: {postId: pathId}});

export default getLostData;