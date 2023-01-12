import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormInputData } from './Main';
import './FinishingUp.scss';
import { priceArrMonthly } from './config';
import { priceArrYearly } from './config';
import  {priceAddOnsMonthly} from './config';
import {priceAddOnsYearly} from './config';


export default function FinishingUp() {
    const { onlineServ, setOnlineServ } = useContext(FormInputData);
    const { largerStorage, setLargerStorage } = useContext(FormInputData);
    const { customProfile, setCustomProfile } = useContext(FormInputData);
    const { checkedPlan, setCheckedPlan } = useContext(FormInputData);
    const {plan, setPlan} = useContext(FormInputData);
    const {period, setPeriod} = useContext(FormInputData);
    const {stepCount, setStepCount} = useContext(FormInputData);
    let navigate = useNavigate();
    let planOutTarif = 0;

    switch (plan) {
        case ('Arcade') : {
            planOutTarif = period == 'Monthly' ? `${priceArrMonthly[0]}/mo` : `${priceArrYearly[0]}/yr`;
            break;
        }
        case ('Advanced') : {
            planOutTarif = period == 'Monthly' ? `${priceArrMonthly[1]}/mo` : `${priceArrYearly[1]}/yr`;
            break;
        }
        case ('Pro') : {
            planOutTarif = period == 'Monthly' ? `${priceArrMonthly[2]}/mo` : `${priceArrYearly[2]}/yr`;
            break;
        }
    }

    const onChangeFinishingUpPlan = () => {
        setPlan('Arcade');
        setPeriod('Monthly');
        setOnlineServ(false);
        setLargerStorage(false);
        setCustomProfile(false);
        setStepCount(1);
        setCheckedPlan(false);
        navigate('/selectplan');
    }
    
    return(
        <>
            <section>
                <main className='finishingUp-main'>
                    <div className="context">
                        <div className="context-main">
                            <div className='context-main__finishingUp'>

                                {/* === Plan ==== */}
                                {/* <div className='context-finishingUpPlan'  > */}
                                <div className={
                                    onlineServ || largerStorage || customProfile ? 'context-finishingUpPlan bordBotNone' : 'context-finishingUpPlan'
                                }  >
                                    <div className='finishingUpPlan'>
                                        <span>{plan} ({period})</span>
                                        <a onClick={onChangeFinishingUpPlan} >Change</a>
                                    </div>
                                    <div className='finishingUpPlanSum'>
                                        <span>+${planOutTarif} </span>
                                    </div>
                                </div>

                                {/* === Line ==== */}
                                <div className={
                                    onlineServ || largerStorage || customProfile ? 'finishingUpPlanLine' : ''
                                }></div>

                                {/* === Online Serice ==== */}
                                <div className={
                                    onlineServ ? 'finishingUpAddOns' : 'hidden'
                                }>
                                    <span>Online service</span> <span>{onlineServ ? `+$${priceAddOnsMonthly[0]}/mo` : `+$${priceAddOnsYearly[0]}/yr` }</span>
                                </div>

                                {/* === Larger Storage ==== */}
                                <div className={
                                    largerStorage ? 'finishingUpAddOns' : 'hidden'
                                }>
                                    <span>Larger Storage</span> <span>{largerStorage ? `+$${priceAddOnsMonthly[1]}/mo` : `+$${priceAddOnsYearly[1]}/yr` }</span>
                                </div>
                                
                                {/* === Customizable Profile ==== */}
                                <div className={
                                    largerStorage ? 'finishingUpAddOns' : 'hidden'
                                }>
                                    <span>Larger Storage</span> <span>{largerStorage ? `+$${priceAddOnsMonthly[1]}/mo` : `+$${priceAddOnsYearly[1]}/yr` }</span>
                                </div>

                                
                                
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}