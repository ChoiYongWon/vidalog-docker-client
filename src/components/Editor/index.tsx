import React, {useEffect, useRef, useState} from "react"
import styled from "styled-components"
import { MdAddCircleOutline } from "react-icons/md"

const Wrapper = styled.form`
  width: 100%;
  height : auto;
  max-width: 800px;
  display : flex;
  flex-direction: column;
  gap: 1rem;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 1rem;
  overflow: auto;
`

const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
`
const ImageSelector = styled.input`
  width: 5rem;
  height: 5rem;
  background: #ebedf0;
`

const TextEditor = styled.textarea`
  flex-grow: 1;
  height: 100%;
`

const ButtonWrapper = styled.div`

`


const Editor = () => {


    return (
        <Wrapper>
            <ImageWrapper></ImageWrapper>
            <ContentWrapper>
                <ImageSelector>
                    <MdAddCircleOutline size={30}/>
                </ImageSelector>
                <TextEditor></TextEditor>
            </ContentWrapper>
        </Wrapper>

    )
}

export default Editor
