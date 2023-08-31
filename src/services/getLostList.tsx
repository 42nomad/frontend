import nomadAxios from "../utils/nomadAxios";

const getLostList = () => nomadAxios.get('board/list');

export default getLostList;