import React from 'react';
import { StyledButtonCheckBox } from './styles/Button.styled';
import { StyledItemPopUp } from './styles/PopupInfo';

const PopupInfoItem = (props) => {
    const handleOnChange = (e) => {
        props.onChange(e);
    }
    return (
        <StyledItemPopUp>
            <StyledButtonCheckBox>
                <input type="checkbox" name={props.name} onChange={handleOnChange} />
                <span className="checkmark"></span>
            </StyledButtonCheckBox>
            <p>{props.text}</p>
        </StyledItemPopUp>
    );
};

export default PopupInfoItem;