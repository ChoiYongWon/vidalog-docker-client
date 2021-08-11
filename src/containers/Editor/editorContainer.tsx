import React, {ChangeEvent, useState} from "react"
import Editor from "../../components/Editor";

const EditorContainer = () => {

    const [imageUrls, setImageUrls] = useState([])

    const onFileChange = (e:ChangeEvent<any>) => {
        const imageFormData = new FormData()
        const img = e.target.files[0]
        // imageFormData.append("img", img)
        console.log(imageFormData, imageFormData.has("img"))
    }

    return <Editor
        imageUrls={imageUrls}
        onFileChange={onFileChange}
    />
}

export default EditorContainer