import React, {ChangeEvent, useCallback, useEffect, useState} from "react"
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
        return ()=>{
            //unmount 될때 메모리 누수 방지
            imageUrls.forEach((url)=> URL.revokeObjectURL(url))
        }
        // eslint-disable-next-line
    }, [imageUrls])

    useEffect(()=>{
        setImageUrls((state)=>{

            const arr : string[] = []
            for(let i in imageFiles){
                arr.push(URL.createObjectURL(imageFiles[i].value))
            }
            return arr
        })
        setCheckedImage([])
    }, [imageFiles])

    const onFileChange = useCallback((e:ChangeEvent<any>) => {
        setImageFiles((state)=>{
            let arr = []
            // let stagedImg = state.map(data=>data.key)
            for(let i of e.target.files){
                arr.push({key: i.name, value: i})
                //중복이미지 제거 --> 아이폰은 안됨
                // if(!stagedImg.includes(i.name))
                //     arr.push({key: i.name, value: i})
            }

            return [...state, ...arr]
        })
    },[])

    const onDelete = useCallback((e:any) => {
        setImageFiles((state)=>{
            return state.filter((data, index)=>!checkedImage.includes(index+""))
        })
    }, [checkedImage])

    const onImageCheck = useCallback((e:any) => {
        const checkedData = e.currentTarget.dataset.key
        setCheckedImage((state)=>{
            return (state.includes(checkedData)) ? state.filter((data)=>data!==checkedData) : [...state, checkedData]
        })
    }, [])

    return <Editor
        imageUrls={imageUrls}
        onFileChange={onFileChange}
        onImageCheck={onImageCheck}
        onDelete={onDelete}
        checkedImage={checkedImage}
    />
}

export default EditorContainer