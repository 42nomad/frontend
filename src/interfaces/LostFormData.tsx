import React from "react"

interface LostFormData {
    postId: number,
    writer: string,
    location: string,
    contents: string,
    imgKey: string,
    date: string,
    mine: boolean
}

export default LostFormData;