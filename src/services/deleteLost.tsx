import nomadAxios from "../utils/nomadAxios";

const deleteLost = (postId: number) => nomadAxios.delete(`board/${postId}`);

export default deleteLost;