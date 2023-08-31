const makeNewDocData = () => {
    const date = new Date();
    const data = {
        postId: 0,
        writer: '',
        location: '',
        contents: '',
        imgKey: 'AddLostDoc.svg',
        date: date.toISOString().substring(0, 10),
        mine: false
    };
    return (data);
}

export default makeNewDocData;