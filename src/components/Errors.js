import React from 'react';
import { StyledErrors } from './styles/Errors.styled';

const Errors = () => {
    return (
        <StyledErrors>
            <img src="./images/error.png" alt='' /> Wrong seed phrases. Please try again!
        </StyledErrors>
    );
};

export default Errors;