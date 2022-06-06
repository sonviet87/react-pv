import React from 'react';
import { useDispatch } from 'react-redux';
import { StyledButtonRadio } from '../../components/styles/Button.styled';
import { updateSelected, UPDATE_SELECTED_CONFIRM } from '../../redux/actions/confirm';

const ItemConfirm = ({ lable, name, value, checked }) => {
    const dispath = useDispatch();
    const handleChange = () => {
        dispath(updateSelected(lable));
    }
    return (

        <>
            <StyledButtonRadio >
                <input type="radio" name={name} value={value} checked={checked} onChange={handleChange} />
                <div className="checkmark ">{lable}</div>
            </StyledButtonRadio>
        </>

    );
};

export default ItemConfirm;