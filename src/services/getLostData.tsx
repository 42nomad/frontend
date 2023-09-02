import nomadAxios from "../utils/nomadAxios";

const getLostData = (pathId: string) => nomadAxios.get(`board/${pathId}`);

export default getLostData;