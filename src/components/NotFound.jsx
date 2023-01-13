import { useContext, useCallback, useEffect, useState } from 'react';
import { FormInputData } from './Main';
import { useNavigate } from 'react-router-dom';
import './NotFound.scss';

export default function NotFound() {
    const { stepCount, setStepCount } = useContext(FormInputData);
    const { onlineServ, setOnlineServ } = useContext(FormInputData);
    const { largerStorage, setLargerStorage } = useContext(FormInputData);
    const { customProfile, setCustomProfile } = useContext(FormInputData);
    const { checkedPlan, setCheckedPlan } = useContext(FormInputData);
    const { plan, setPlan } = useContext(FormInputData);
    const { period, setPeriod } = useContext(FormInputData);
    let navigate = useNavigate();

    const onClickNotFoundButton = () => {
        setPlan('Arcade');
        setPeriod('Monthly');
        setOnlineServ(false);
        setLargerStorage(false);
        setCustomProfile(false);
        setStepCount(0);
        setCheckedPlan(false);
        navigate('/');
    }
    return (
        <>
            <main class='container'>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>4</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <span class='particle'>0</span>
                <article class='content'>
                    <p>Damnit stranger,</p>
                    <p>You got lost in the <strong>404</strong> galaxy.</p>
                    <p>
                        <button onClick={() => onClickNotFoundButton()}>Go back to earth.</button>
                    </p>
                </article>
            </main>
        </>
    );
}