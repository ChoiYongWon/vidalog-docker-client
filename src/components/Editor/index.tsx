import React, {useEffect, useRef, useState} from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';

const EditorComponent = styled.div`
  width: auto;
  min-width: 200px;
  height: auto;
  outline: none;
  display : flex;
  flex-direction: column;
`

type blockJson = {
    id: string,
    type: string,
    props: {} | null,
    text: string
}

const Editor = () => {

    const [htmlJson, setHtmlJson] = useState<blockJson[]>([
        {id: uuidv4(), type:"p", props:null, text:"", }
    ])
    const [focusBlock, setFocusBlock] = useState<string>("")
    const editorRef :any = useRef<any>()

    useEffect(()=>{
        console.log("focus")
        const element = getNodeById(focusBlock)
        element.node?.firstChild?.focus()

        
    }, [focusBlock])

    useEffect(()=>{
        console.log("htmlJson", htmlJson)
    }, [htmlJson])

    const getNodeById = (id: string) => {
        const length = htmlJson.length
        for(let i=0;i<length;i++){
            if(htmlJson[i].id === id){
                return {
                    index: i,
                    node : editorRef.current.children[i]
                }
            }
        }
        return {
            index : 0,
            node : editorRef.current.children[0]
        }
    }


    const onInput = (e:any) => {
        const id = e.currentTarget.dataset.id
        const text = e.target.innerHTML

        console.log("입력함",text, e.isComposing)

        setHtmlJson((state)=>{
            let tmp = [...state]
            tmp = tmp.map((i)=>{
                if(i.id == id) return { ...i, text: text }
                return i
            })

            return tmp
        })
    }

    const onKeyDown = (e:any) => {
        console.log("KeyCode",e.keyCode, "Selector", window.getSelection())
        if(e.keyCode === 13 && e.shiftKey === false){
            e.preventDefault()

            const id = e.currentTarget.dataset.id
            console.log("엔터누름-----------------------------------")
            createNewBlock(id)

        }
        else if(e.keyCode === 8 && e.target.innerText=="" && editorRef.current.children.length > 1){
            e.preventDefault()
            const id = e.currentTarget.dataset.id
            deleteBlock(id)
        }
        else return

    }

    const createNewBlock = (referenceId: string) => {
        const uuid = uuidv4()
        const newBlock = {
            id: uuid,
            type:"p",
            props:null,
            text:""}
        setHtmlJson((state)=>{
            const array = [...state]
            const { index } = getNodeById(referenceId)
            console.log("새블록 생성", index)
            array.splice(index+1, 0, newBlock)
            return array
        })
        setFocusBlock(uuid)
    }

    const deleteBlock = (referenceId: string) => {

        const { index } = getNodeById(referenceId)
        setFocusBlock(editorRef.current.children[index-1].dataset.id)
        const selection = window.getSelection()
        editorRef.current.children[index-1].firstChild.selectionStart = 10

        setHtmlJson((state)=>{
            const array = [...state]
            console.log("블록 삭제")
            array.splice(index, 1)
            return array
        })

    }

    const convertJsonToHtml = () =>{
        console.log("convertJsonToHtml 호출")
        return htmlJson.map((node, index)=>{
            return (<div key={index} data-id={node.id} onKeyDown={onKeyDown} onBlur={onInput} >
                {
                    React.createElement(node.type, {
                        ...node.props,
                        key: index,
                        contentEditable: "true",
                        suppressContentEditableWarning: "true",
                        style: {
                            outline: "none"
                        },
                        onFocus: (e:any)=>e.target.innerText = e.target.innerText,
                        dangerouslySetInnerHTML: {
                            __html: node.text
                        }
                    })
                }
                </div>
            )
        })
    }

    return (
    <EditorComponent ref={editorRef}  >
        {
            convertJsonToHtml()
        }
    </EditorComponent>
    )
    }

export default Editor
