import styled from "styled-components";
import { Link } from 'react-router-dom';
export const StyledButton = styled.button`
  width:100%;
  background: ${({ theme }) => theme.colors.primary};
  color:#fff;
  padding: 20px 0;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  font-weight:700;
  margin-bottom:40px;
  cursor: pointer;
  transition:all 0.5s;
  :hover{
    background:${({ theme }) => theme.colors.third};;
  }
  
}
`
export const StyledLink = styled(Link)`
  width:100%;
  background: ${({ theme }) => theme.colors.primary};
  color:#fff;
  padding: 20px 0;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  font-weight:700;
  margin-bottom:40px;
  cursor: pointer;
  transition:all 0.5s;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  :hover{
    background:${({ theme }) => theme.colors.third};;
  }
`
export const StyledButtonRadio = styled.label`
    margin: 13px 3px;
    position: relative;
    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        :checked ~ .checkmark:after {
            display: block;
        }
        :checked ~ .checkmark {
            background-color: ${({ theme }) => theme.colors.fourth};
            color: ${({ theme }) => theme.colors.primary};
        }
    }
    div{
        padding: 10px;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.third};
        border-radius: 10px;
        width:80px;
        text-align: center;
        font-weight: 400;
        font-size: 15px;
       
        :after {
            content: "";
            position: absolute;
            display: none;
        }
    }
`
export const StyledButtonCheckBox = styled.label`
    margin: 1px 0px;
    position: relative;
    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        :checked ~ .checkmark:after {
            display: block;
        }
        :checked ~ .checkmark {
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.third};
        }
    }
    span{
      position: absolute;
      top: 1px;
      right: -20px;
      height: 10px;
      width: 15px;
      border: 1px solid #BBCFFB;
      border-radius: 0;
      padding: 11px;
      background-color: transparent;
      border-radius: 100%;
       
        :after {
          content: "";
          position: absolute;
          display: none;
          left: 7px;
          top: 3px;
          width: 5px;
          height: 10px;
          border: solid ${({ theme }) => theme.colors.third};
          border-width: 0 2px 2px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
    }
`