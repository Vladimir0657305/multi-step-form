import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormInputData } from './Main';
import './FinishingUp.scss';
import { priceArrMonthly } from './config';
import { priceArrYearly } from './config';
import { priceAddOnsMonthly } from './config';
import { priceAddOnsYearly } from './config';


export default function FinishingUp() {
    const { onlineServ, setOnlineServ } = useContext(FormInputData);
    const { largerStorage, setLargerStorage } = useContext(FormInputData);
    const { customProfile, setCustomProfile } = useContext(FormInputData);
    const { checkedPlan, setCheckedPlan } = useContext(FormInputData);
    const { plan, setPlan } = useContext(FormInputData);
    const { period, setPeriod } = useContext(FormInputData);
    const { stepCount, setStepCount } = useContext(FormInputData);
    let navigate = useNavigate();
    let planOutTarif = 0;
    let planOutTarifToTotal = 0;
    let onlineServToTotal = 0;
    let largerStorageToTotal = 0;
    let customProfileToTotal = 0;
    let total = '';

    switch (plan) {
        case ('Arcade'): {
            planOutTarif = period == 'Monthly' ? `${priceArrMonthly[0]}/mo` : `${priceArrYearly[0]}/yr`;
            break;
        }
        case ('Advanced'): {
            planOutTarif = period == 'Monthly' ? `${priceArrMonthly[1]}/mo` : `${priceArrYearly[1]}/yr`;
            break;
        }
        case ('Pro'): {
            planOutTarif = period == 'Monthly' ? `${priceArrMonthly[2]}/mo` : `${priceArrYearly[2]}/yr`;
            break;
        }
    }

    switch (plan) {
        case ('Arcade'): {
            planOutTarifToTotal = period == 'Monthly' ? priceArrMonthly[0] : priceArrYearly[0];
            break;
        }
        case ('Advanced'): {
            planOutTarifToTotal = period == 'Monthly' ? priceArrMonthly[1] : priceArrYearly[1];
            break;
        }
        case ('Pro'): {
            planOutTarifToTotal = period == 'Monthly' ? priceArrMonthly[2] : priceArrYearly[2];
            break;
        }
    }

    if (onlineServ) {
        if (checkedPlan) {
            onlineServToTotal = priceAddOnsYearly[0];
        }
        else {
            onlineServToTotal = priceAddOnsMonthly[0];
        }
    }

    if (largerStorage) {
        if (checkedPlan) {
            largerStorageToTotal = priceAddOnsYearly[1];
        }
        else {
            largerStorageToTotal = priceAddOnsMonthly[1];
        }
    }

    if (customProfile) {
        if (checkedPlan) {
            customProfileToTotal = priceAddOnsYearly[2];
        }
        else {
            customProfileToTotal = priceAddOnsMonthly[2];
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

    total = planOutTarifToTotal + onlineServToTotal + largerStorageToTotal + customProfileToTotal;

    return (
        <>
            <section>
                <main className='finishingUp-main'>
                    <div className="finishingUp-context">
                        <div className="context-main">
                            <div className='context-main__finishingUp'>

                                {/* === Plan ==== */}
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
                                {
                                    onlineServ && <div className={
                                        customProfile || largerStorage ? 'finishingUpAddOns bordBotNone' : 'finishingUpAddOns'
                                    }>
                                        <span>Online service</span> <span>{checkedPlan ? `+$${priceAddOnsYearly[0]}/yr` : `+$${priceAddOnsMonthly[0]}/mo`}</span>
                                    </div>
                                }

                                {/* === Larger Storage ==== */}
                                {
                                    largerStorage && <div className={
                                        customProfile ? 'finishingUpAddOns bordBotNone' : 'finishingUpAddOns '
                                    }>
                                        <span>Larger Storage</span> <span>{checkedPlan ? `+$${priceAddOnsYearly[1]}/yr` : `+$${priceAddOnsMonthly[1]}/mo`}</span>
                                    </div>
                                }

                                {/* === Customizable Profile ==== */}
                                <div className={
                                    customProfile ? 'finishingUpAddOns' : 'hidden'
                                }>
                                    <span>Customizable Profile</span> <span>{checkedPlan ? `+$${priceAddOnsYearly[2]}/yr` : `+$${priceAddOnsMonthly[2]}/mo`}</span>
                                </div>

                                {/* === Total ==== */}
                                <div className='finishingUpAddOnsTotal'>
                                    <span>Total ({checkedPlan ? 'per year' : 'per month'})</span> <span>{checkedPlan ? `$${total}/yr` : `+$${total}/mo`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}