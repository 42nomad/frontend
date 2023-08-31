import nomadAxios from "../utils/nomadAxios";

const postLost = (title: string, descript: string, newKey: string) => 
    nomadAxios.post('board', {
        'location': title,
        'contents': descript,
        'imgKey': newKey
    });

export default postLost;