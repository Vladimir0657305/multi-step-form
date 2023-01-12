import { useMemo, useContext, useCallback, useEffect, useState } from 'react';
import { FormInputData } from './Main';
import { useNavigate } from 'react-router-dom';
import './ThankYou.scss';

export default function ThankYou() {
    const { stepCount, setStepCount } = useContext(FormInputData);
    const { onlineServ, setOnlineServ } = useContext(FormInputData);
    const { largerStorage, setLargerStorage } = useContext(FormInputData);
    const { customProfile, setCustomProfile } = useContext(FormInputData);
    const { checkedPlan, setCheckedPlan } = useContext(FormInputData);
    const { plan, setPlan } = useContext(FormInputData);
    const { period, setPeriod } = useContext(FormInputData);
    const [show, setShow] = useState(true);
    let navigate = useNavigate();



    useEffect(() => {
        const interval = setInterval(() => {
            setShow(false);
            setPlan('Arcade');
            setPeriod('Monthly');
            setOnlineServ(false);
            setLargerStorage(false);
            setCustomProfile(false);
            setStepCount(0);
            setCheckedPlan(false);
            navigate('/');
        }, 2000);
        return () => clearInterval(interval);
    }, [stepCount === 4]);


    const displayThankYou = useCallback(

        <section>
            <main className='thankYou-main'>
                <div className="context-thankYou__main">
                    <img src='../images/icon-thank-you.svg' alt='ThankYou' />
                    <h1>Thank You!</h1>
                    <span>
                        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                    </span>
                </div>
            </main>
        </section>

    )

    return (
        <>
            {
                show && displayThankYou
            }

        </>
    );
}