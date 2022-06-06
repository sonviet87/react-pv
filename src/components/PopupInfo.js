import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonSubmit } from './Button';
import PopupInfoItem from './PopupInfoItem';
import { StyledGap } from './styles/PopupInfo';
import { StyledIconCloseClipBoard, StyledWrapClipBoard, StyledWrapperFadeClipBoard } from './styles/SaveToclipBoard.styled';
import { toggleConfirmBoard } from '../redux/actions/confirm';
const PopupInfo = () => {
    const dispath = useDispatch();
    const [agree, setAgree] = useState(true);

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    useEffect(() => {
        if (checked1 && checked2 && checked3) {
            setAgree(false)
        } else {
            setAgree(true)
        }

    }, [checked1, checked2, checked3])
    const handleOnChange = (e) => {

        if (e.target.name === "ck1" && e.target.checked) {
            setChecked1(true);
        }
        if (e.target.name === "ck1" && !e.target.checked) {
            setChecked1(false);
        }

        if (e.target.name === "ck2" && e.target.checked) {
            setChecked2(true);
        }
        if (e.target.name === "ck2" && !e.target.checked) {
            setChecked2(false);
        }

        if (e.target.name === "ck3" && e.target.checked) {
            setChecked3(true);
        }
        if (e.target.name === "ck3" && !e.target.checked) {
            setChecked3(false);
        }


    }
    return (
        <>{console.log("ck1", checked1)}
            <StyledWrapClipBoard>

                <StyledIconCloseClipBoard src="./images/down.png" alt="" onClick={() => {
                    dispath(toggleConfirmBoard());
                }} />
                <StyledGap />
                <img src="./images/checked.png" alt="" />
                <p>Your wallet has been created!</p>
                <div>
                    <PopupInfoItem text="Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it’s your responsibility." name="ck1" onChange={handleOnChange} />
                    <PopupInfoItem text="Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword." name="ck2" onChange={handleOnChange} />
                    <PopupInfoItem text="To keep your backup file safe, you should also keep secret your back up location and secure it." name="ck3" onChange={handleOnChange} />
                </div>
                <ButtonSubmit text="i understand" disabled={agree} />
            </StyledWrapClipBoard>
            <StyledWrapperFadeClipBoard></StyledWrapperFadeClipBoard>
        </>
    );
};

export default PopupInfo;