import styled from "styled-components";
import {useState, useEffect, useRef} from "react";

type WrapperProps = {
    width : string
}

const Wrapper = styled.div`
  width : ${(props: WrapperProps) => props.width+";"};
  display : flex;
  height : 3.2rem;
  position : relative;
  
`

type LabelProps = {
    typing : boolean
}

const Label = styled.span`
  position : absolute;
  user-select: none;
  top : ${(props: LabelProps) => props.typing ? "0;" : "0.625rem;"};
  left : ${(props: LabelProps) => props.typing ? "0.25rem;" : "0.6rem;"};
  font-size : 0.75rem;
  color : rgb(142,142,142);
  transition : all ease .15s;
  transform: ${(props: LabelProps) => props.typing ? "scale(0.75, 0.75);" : "scale(1, 1);"};
  
`

type ComponentProps = {
    typing : boolean
}

const Component = styled.input`
  width : 100%;
  height : 2.2rem;
  background: transparent;
  border : 0;
  border-bottom : 2px solid #AEDFE1;
  margin-bottom: 1rem;
  padding : ${(props: ComponentProps) => props.typing ? "1rem 0 0.125rem 0.5rem;" : "0.5rem;"};
  box-sizing: border-box;
  outline: none;
  font-size : 0.75rem;
  position : absolute;
  
  &:focus{
    border-bottom : 2px solid #63C2C6;
  }
`



export type Props = {
    width : string
    label : string
    type : string
    value : string
    autoFocus? : boolean
    error? : boolean
    errorMsg? : string
    onChange? : (e:React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = (props : Props) => {

    const [isTyping, setIsTyping] = useState(false)
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>

    useEffect(()=>{
        if(props.autoFocus){
            inputRef.current?.focus();
        }
    },[props.autoFocus])

    useEffect(()=>{
        if(props.value.length > 0) setIsTyping(true)
        else setIsTyping(false)
    }, [props.value, setIsTyping])


    return <Wrapper width={props.width}>
        <Label typing={isTyping}>{props.label}</Label>
        <Component ref={inputRef} typing={isTyping} onChange={props.onChange} value={props.value} type={props.type}/>
    </Wrapper>
}

export default InputText

