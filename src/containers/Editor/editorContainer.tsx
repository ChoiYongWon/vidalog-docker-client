import React, {ChangeEvent, useEffect, useState} from "react"
import Editor from "../../components/Editor";

type ImageFilesType = {
    key: string, //파일명
    value: typeof File
}

const EditorContainer = () => {
    //blob URL을 담고있음
    const [imageUrls, setImageUrls] = useState<string[]>([])
    //File 객체를 담고있음
    const [imageFiles, setImageFiles] = useState<ImageFilesType[]>([])
    const [checkedImage, setCheckedImage] = useState<string[]>([])


    useEffect(()=>{
        setImageUrls((state)=>{
            //메모리 누수 방지
            state.forEach((url)=>URL.revokeObjectURL(url))

            const arr : string[] = []
            for(let i in imageFiles){
                arr.push(URL.createObjectURL(imageFiles[i].value))
            }
            return arr
        })
        setCheckedImage([])
        for(let i in imageFiles){
            console.log(imageFiles[i].key)
        }
    }, [imageFiles])

    const onFileChange = (e:ChangeEvent<any>) => {
        setImageFiles((state)=>{
            let arr = []
            let stagedImg = state.map(data=>data.key)
            for(let i of e.target.files){
                //중복이미지 제거
                if(!stagedImg.includes(i.name))
                    arr.push({key: i.name, value: i})
            }

            return [...state, ...arr]
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