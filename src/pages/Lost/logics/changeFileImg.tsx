const changeFileImg = (e:React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const img = target.previousSibling as HTMLImageElement;
    const file = target.files && target.files[0];

    if (file)
        img.src = URL.createObjectURL(file);
}

export default changeFileImg;