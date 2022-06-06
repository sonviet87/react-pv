import styled from "styled-components";

export const StyledQuestionItem = styled.div`
  padding:10px;
  -webkit-box-shadow: 0px 3px 26px -4px rgba(224,224,224,0.86); 
  box-shadow: 0px 3px 26px -4px rgba(224,224,224,0.86);
  margin:5px;
  width:100px;
  cursor: pointer;
  span {
    width: 18px;
    height: 18px;
    display: inline-block;
    line-height: 18px;
    text-align: center;
    color:${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 100%;
    font-size: 11px;
    font-weight:500;
  }
`

export const StyledQuestionWrap = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin:0 -5px;
`