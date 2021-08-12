import React, {ChangeEvent} from "react"
import styled from "styled-components"
import { MdAdd } from "react-icons/md"
import {AiOutlineDelete} from "react-icons/ai"
import Button from "../Button";

const Wrapper = styled.form`
  width: 100%;
  height : auto;
  max-width: 400px;
  display : flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

type IconWrapperType = {
    isImageEmpty : boolean
}

const IconWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  opacity: ${(props:IconWrapperType)=>props.isImageEmpty ? 0 : 1};
  visibility: ${(props:IconWrapperType)=>props.isImageEmpty ? "hidden" : "visible"};
  gap: 1rem;
  justify-content: flex-end;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 5.5rem;
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  box-sizing: border-box;
  
  padding: 0;
  
  &::-webkit-scrollbar {
    height: 0.3rem;
  }

  &::-webkit-scrollbar-button{
    background: transparent;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &::-webkit-scrollbar-track-piece {
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 8px;
  }
  
`

type ImageBlockProps = {
    isChecked : boolean
}

const ImageBlock = styled.div`
  width: auto;
  height: auto;
  scroll-snap-align: end;
  box-sizing: border-box;
  opacity: ${(props:ImageBlockProps)=>props.isChecked ? "0.2":"1" };
`

const PreviewImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 0.2rem;
  object-fit: cover;

`



const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
  display : flex;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow : rgb(0 0 0 / 15%) 0px 0px 10px;
  box-sizing: border-box;
`
const ImageSelector = styled.input`
  width: 5rem;
  height: 5rem;
  background: #ebedf0;
  padding: 0;
  margin: 0;
  display: none;
`

const ImageSelectorLabel = styled.label`
  width: 5rem;
  height: 5rem;
  background: #ebedf0;
  padding: 0;
  margin: 0;
  display : flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
`

const TextEditor = styled.textarea`
  flex-grow: 1;
  height: 5rem;
  padding: 0;
  margin: 0;
  outline : 0;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: auto;
  resize: none;
  padding: 0.2rem;
  border: none;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  line-height:1.5;
  letter-spacing: normal;
  word-spacing: normal;
  
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  
  &::-webkit-scrollbar-button{
    background: transparent;
  }

  &::-webkit-scrollbar-corner{
    background: transparent;
  }

  &::-webkit-scrollbar-track-piece{
    background: transparent;
  }
  
  &::-webkit-scrollbar-track{
    border-radius: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb{
    background-color: rgba(0,0,0,0.5);
    border-radius: 8px;
  }
`



const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

type Props = {
    imageUrls: string[]
    onFileChange: (e:ChangeEvent<any>)=>void
    onImageCheck: (e:any)=>void
    onDelete: (e:any)=>void
    checkedImage: string[]
} & typeof defaultProps

const defaultProps = {
    imageUrls: [] as string[],
    onFileChange: (e:ChangeEvent<any>)=>{console.log(e.target.files)},
    onImageCheck: (e:any)=>{},
    onDelete: (e:any)=>{},
    checkedImage: [] as string[]

}

const Editor = (props: Props) => {


    return (
        <Wrapper >
            <IconWrapper isImageEmpty={props.imageUrls.length===0}>
                <AiOutlineDelete onClick={props.onDelete} size={30} color={(props.checkedImage.length>0 ? "#f05650" : "#a9a9a9")}/>
            </IconWrapper>
            <ImageWrapper>
                {
                    props.imageUrls.map((i,index)=>{
                        console.log("다시그림")
                        console.log(props.checkedImage.includes(index+""))
                        return <ImageBlock isChecked={props.checkedImage.includes(index+"")} key={index} onClick={props.onImageCheck} data-key={index}><PreviewImage src={i}/></ImageBlock>
                    })
                }

            </ImageWrapper>
            <ContentWrapper>
                <ImageSelector id={"editor-image-selector"} type={"file"} accept={".gif, .jpg, .png"} onChange={props.onFileChange} multiple={true}/>
                <ImageSelectorLabel htmlFor={"editor-image-selector"}>
                    <MdAdd size={30} color={"#a9a9a9"}/>
                </ImageSelectorLabel>
                <TextEditor spellCheck={false} placeholder={"일기를 작성해주세요"}></TextEditor>
            </ContentWrapper>
            <ButtonWrapper>
                <Button type={"button"} types={"prev"} value={"취소"}></Button>
                <Button type={"submit"} types={"next"} value={"완료"}></Button>
            </ButtonWrapper>
        </Wrapper>

    )
}

Editor.defaultProps = defaultProps

export default Editor
