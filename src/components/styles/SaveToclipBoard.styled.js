import styled from "styled-components";

export const StyledWrapClipBoard = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  background: #fff;
  left: 0;
  right: 0;
  z-index:1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  p{
    color:${({ theme }) => theme.colors.third};
    font-weight: 700;
    font-size: 22px;
  }
`
export const StyledIconCloseClipBoard = styled.img`
  cursor: pointer;
`
export const StyledIconClipBoard = styled.div`
  background: #04B800;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:100%;
  height:71px;
  width:71px;
  margin-top:20px;
`
export const StyledCircleClipBoard = styled.div`
  border:1px solid #FF0366;
  border-radius:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF0366;
  width: 22px;
  line-height: 10px;
  height: 22px;
`

export const StyledWrapperFadeClipBoard = styled.div`
  width:100%;
  height:100%;
  opacity:0.8;
  background:#000;
  top:0;
  left:0;
  position: absolute;
`