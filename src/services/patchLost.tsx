import nomadAxios from "../utils/nomadAxios";

const patchLost = (postId: number, title: string, descript: string, imgKey: string) => 
    nomadAxios.patch(`board/${postId}`, {
        'location': title,
        'contents': descript,
        'imgKey': imgKey
    });

export default patchLost;