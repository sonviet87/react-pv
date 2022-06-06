import styled from "styled-components";

export const StyledNumberCircle = styled.span`
    width: 21px;
    height: 21px;
    display: inline-block;
    line-height: 21px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 100%;
    font-size: 15px;
    font-weight: 500;
`
export const StyledWrapperConfirm = styled.div`
    display:flex;
    justify-content: space-around;
    flex-wrap:wrap;
    
`


export const StyledWrapperConfirmItem = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #D3D7DB;
    width: 100%;
    margin-bottom: 16px;
    border-radius: 6px;
    height: 57px;
    padding: 0px 10px
`
