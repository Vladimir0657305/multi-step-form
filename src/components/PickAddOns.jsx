import React, { useContext } from 'react';
import { FormInputData } from './Main';
import 'react-input-checkbox/lib/react-input-checkbox.min.css';
import { Checkbox } from 'react-input-checkbox';
import './PickAddOns.scss';

import { priceAddOnsMonthly } from './config';
import { priceAddOnsYearly } from './config';


export default function PickAddOns() {
    const { onlineServ, setOnlineServ } = useContext(FormInputData);
    const { largerStorage, setLargerStorage } = useContext(FormInputData);
    const { customProfile, setCustomProfile } = useContext(FormInputData);
    const { checkedPlan, setCheckedPlan } = useContext(FormInputData);

    return (
        <>
            <section>
                <main className='pickAddOns-main'>
                    <div className="context">
                        <div className="context-main">
                            <div className='context-main__addons'>
                                <div className='context-addons'  >
                                    <Checkbox theme="material-checkbox" value={onlineServ} onChange={() => setOnlineServ(!onlineServ)} className='check'></Checkbox>
                                    <span className='context-addons__title'>Online service</span>
                                    <p>Access to multiplayer games</p>
                                    <span className='context-addons__text'>+${checkedPlan ? priceAddOnsYearly[0] : priceAddOnsMonthly[0]}/mo</span>
                                </div>
                                <div className='context-addons'  >
                                    <Checkbox theme="material-checkbox" value={largerStorage} onChange={() => setLargerStorage(!largerStorage)}></Checkbox>
                                    <span className='context-addons__title'>Larger storage</span>
                                    <p>Extra 1TB of cloud save</p>
                                    <span className='context-addons__text'>+${checkedPlan ? priceAddOnsYearly[1] : priceAddOnsMonthly[1]}/mo</span>
                                </div>
                                <div className='context-addons'  >
                                    <Checkbox theme="material-checkbox" value={customProfile} onChange={() => setCustomProfile(!customProfile)}></Checkbox>
                                    <span className='context-addons__title'>Customizable Profile</span>
                                    <p>Custom theme on your profile</p>
                                    <span className='context-addons__text'>+${checkedPlan ? priceAddOnsYearly[2] : priceAddOnsMonthly[2]}/mo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}