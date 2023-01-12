import React, { useContext, useEffect, useState } from 'react';
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
    console.log(priceArrMonthly, priceArrYearly, plan, period);
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
    return(
        <>
            <section>
                <main className='finishingUp-main'>
                    <div className="context">
                        <div className="context-main">
                            <div className='context-main__finishingUp'>
                                <div className='context-finishingUp'  >
                                    <span>{plan} ({period})</span>
                                    <span>Change</span><span>+${planOutTarif} </span>
                                    {/* <span>Online service</span> <span>+${onlineServ ? priceAddOnsYearly[0] : priceAddOnsMonthly[0] } </span> */}
                                    <span>Online service</span> <span>{onlineServ ? `+$${priceAddOnsMonthly[0]}/mo` : `+$${priceAddOnsYearly[0]}/yr` }</span>
                                </div>
                                <div className=''  >
                                    {/* <Checkbox theme="material-checkbox" value={largerStorage} onChange={() => setLargerStorage(!largerStorage)}></Checkbox>
                                    <span className='context-addons__title'>Larger storage</span>
                                    <p>Extra 1TB of cloud save</p>
                                    <span className='context-addons__text'>+${checkedPlan ? priceAddOnsYearly[1] : priceAddOnsMonthly[1]}/mo</span> */}
                                </div>
                                <div className='context-finishingUp'  >
                                    {/* <Checkbox theme="material-checkbox" value={customProfile} onChange={() => setCustomProfile(!customProfile)}></Checkbox>
                                    <span className='context-addons__title'>Customizable Profile</span>
                                    <p>Custom theme on your profile</p>
                                    <span className='context-addons__text'>+${checkedPlan ? priceAddOnsYearly[2] : priceAddOnsMonthly[2]}/mo</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}