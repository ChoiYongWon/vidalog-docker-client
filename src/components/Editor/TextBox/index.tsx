import React, {ChangeEvent, memo} from "react"
import styled from "styled-components"
import { MdAdd } from "react-icons/md"



const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
  display : flex;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow : rgb(0 0 0 / 15%) 0px 0px 10px;
  box-sizing: border-box;
  pointer-events: visible;
`
const ImageSelector = styled.input`
  width: 6rem;
  height: 6rem;
  background: #ebedf0;
  padding: 0;
  margin: 0;
  display: none;
`

const ImageSelectorLabel = styled.label`
  width: 6rem;
  height: 6rem;
  min-width: 5rem;
  min-height: 5rem;
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
  height: 6rem;
  padding: 0;
  margin: 0;
  outline : 0;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: auto;
  resize: none;
  color : rgb(52,58,64);
  padding: 0.2rem;
  border: none;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  line-height:1.5;
  letter-spacing: normal;
  word-spacing: normal;
  pointer-events: visible;
  
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

type Props = {
    onFileChange: (e:ChangeEvent<any>)=>void
} & typeof defaultProps

const defaultProps = {
    onFileChange: (e:ChangeEvent<any>)=>{console.log(e.target.files)},
}

const TextBox = (props: Props) => {


    return (

            <ContentWrapper>
                <ImageSelector id={"editor-image-selector"} type={"file"} accept={".gif, .jpg, .png"} onChange={props.onFileChange} multiple={true}/>
                <ImageSelectorLabel htmlFor={"editor-image-selector"}>
                    <MdAdd size={30} color={"#a9a9a9"}/>
                </ImageSelectorLabel>
                <TextEditor spellCheck={false} placeholder={"일기를 작성해주세요"}></TextEditor>
            </ContentWrapper>


    )
}

TextBox.defaultProps = defaultProps

export default memo(TextBox)
