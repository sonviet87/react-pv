import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from "react-router-dom";
import Header from '../../components/Header';
import PopupInfo from '../../components/PopupInfo';
import SaveToClipBoard from '../../components/SaveToClipBoard';
import { StyledContainer, StyledWrapper } from '../../components/styles/Container.styled';


function HomeTempate(props) {
    const openClipBoard = useSelector(state => state.reducerQuestion.openClipBoard);
    const isSubmitting = useSelector(state => state.reducerConfirm.isSubmitting);
    let { Component, ...restParams } = props;
    return <Route {...restParams} render={(propsRoute) => {
        return (
            <StyledWrapper>
                <StyledContainer>
                    <Header />
                    <Component {...propsRoute} />

                </StyledContainer>
                {openClipBoard ? <SaveToClipBoard /> : ''}
                {isSubmitting ? <PopupInfo /> : ''}
            </StyledWrapper >
        )

    }} />
}
export default HomeTempate;