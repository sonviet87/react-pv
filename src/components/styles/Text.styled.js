import styled from "styled-components";

export const StyledTextHeader = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 17px;
  font-weight:500;
  margin-bottom:16px;
`


export const StyledTextFooter = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  img {
    transform: rotate(178deg);
    width:6px;
    cursor: pointer;
  }
  p{
    color: ${({ theme }) => theme.colors.third};
    font-size:18px;
    font-weight: 500;
  }
`