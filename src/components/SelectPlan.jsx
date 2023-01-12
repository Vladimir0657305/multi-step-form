import React, { useContext, useEffect, useState } from 'react';
import './SelectPlan.scss';
import Switch from "react-switch";
import { FormInputData } from './Main';

import { priceArrMonthly } from './config';
import { priceArrYearly } from './config';

export default function SelectPlan() {
    const { checkedPlan, setCheckedPlan } = useContext(FormInputData);
    const { plan, setPlan } = useContext(FormInputData);
    const { period, setPeriod } = useContext(FormInputData);

    const handleChange = (props) => {
        setCheckedPlan(props);
    }

    const onClickCard = (props) => {
        
        setPlan(props);
    }

    useEffect(() => { 
        setPeriod(checkedPlan ? 'Yearly' : 'Monthly');
    }, [checkedPlan])

    return (
        <>
            <section>
                <main className='selectPlan-main'>
                    <div className="context">

                        <div className="context-main">
                            <div className='context-main__cards'>
                                <div className='context-card' onClick={() => onClickCard('Arcade')} >
                                    <img src='../images/icon-arcade.svg' alt='context-card-image' />
                                    <h4>Arcade</h4>
                                    {
                                        checkedPlan ? <><span >${priceArrYearly[0]}/yr </span> <br /> <span className='lastSpan' >2 months free</span></>
                                            :
                                            <span>${priceArrMonthly[0]}/mo</span>
                                    }
                                </div>
                                <div className='context-card' onClick={() => onClickCard('Advanced')} >
                                    <img src='../images/icon-advanced.svg' alt='context-card-image' />
                                    <h4>Advanced</h4>
                                    {
                                        checkedPlan ? <><span>${priceArrYearly[1]}/yr    </span> <br />  <span className='lastSpan'>2 months free</span></>
                                            :
                                            <span>${priceArrMonthly[1]}/mo</span>
                                    }
                                </div>
                                <div className='context-card' onClick={() => onClickCard('Pro')}>
                                    <img src='../images/icon-pro.svg' alt='context-card-image' />
                                    <h4>Pro</h4>
                                    {
                                        checkedPlan ? <><span>${priceArrYearly[2]}/yr    </span> <br />  <span className='lastSpan'>2 months free</span></>
                                            :
                                            <span>${priceArrMonthly[2]}/mo</span>
                                    }
                                </div>
                            </div>
                            <div className='context-main__switch'>
                                <p className={checkedPlan ? '' : 'switchActive'} >Monthly</p>

                                <label htmlFor="context-switch">
                                    <Switch
                                        id='context-switch'
                                        onChange={handleChange}
                                        checked={checkedPlan}
                                        className="context-switch"
                                        onColor="#000"
                                        offColor="#000"
                                        onHandleColor="#fff"
                                        height={30}
                                        width={80}
                                        handleDiameter={22}
                                        uncheckedIcon={true}
                                        checkedIcon={true}
                                        activeBoxShadow="0px 0px 0px 0px #ccc"
                                    />
                                </label>
                                <p className={checkedPlan ? 'switchActive' : ''} > Yearly</p>
                            </div>

                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}