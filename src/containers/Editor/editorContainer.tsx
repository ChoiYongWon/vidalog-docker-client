import React, {ChangeEvent, useEffect, useState} from "react"
import Editor from "../../components/Editor";

type ImageFilesType = {
    key: string,
    value: typeof File
}

const EditorContainer = () => {
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [imageFiles, setImageFiles] = useState<ImageFilesType[]>([])
    const [checkedImage, setCheckedImage] = useState<string[]>([])

    useEffect(()=>{
        console.log("urls",checkedImage)
    }, [checkedImage])


    useEffect(()=>{
        setImageUrls(()=>{
            const arr : string[] = []
            for(let i in imageFiles){
                arr.push(URL.createObjectURL(imageFiles[i].value))
            }
            return arr
        })
        setCheckedImage([])
    }, [imageFiles])

    const onFileChange = (e:ChangeEvent<any>) => {
        setImageFiles((state)=>{
            const arr = []
            for(let i of e.target.files){
                arr.push({key: i.name, value: i})
            }
            return [...arr, ...state]
        })
    }

    const onDelete = (e:any) => {
        setImageFiles((state)=>{
            return state.filter((data, index)=>{
                console.log(checkedImage, data.key)
                return !checkedImage.includes(index+"")
            })
        })

    }

    const onImageCheck = (e:any) => {
        const checkedData = e.currentTarget.dataset.key
        console.log(checkedData)
        setCheckedImage((state)=>{
            return (state.includes(checkedData)) ? state.filter((data)=>data!==checkedData) : [...state, checkedData]
        })
    }

    return <Editor
        imageUrls={imageUrls}
        onFileChange={onFileChange}
        onImageCheck={onImageCheck}
        onDelete={onDelete}
        checkedImage={checkedImage}
    />
}

export default EditorContainer