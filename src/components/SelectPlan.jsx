import React, { useContext, useState } from 'react';
import './SelectPlan.scss';
import Switch from "react-switch";
import { FormInputData } from './Main';

const priceArr = [9, 12, 15];

export default function SelectPlan() {
    const [checkedPlan, setCheckedPlan] = useState(false);
    const { plan, setPlan } = useContext(FormInputData);
    const { period, setPeriod } = useContext(FormInputData);

    const handleChange = (checkedPlan) => {
        setCheckedPlan(checkedPlan);
    }



    const onClickCard = (props) => {
        setPeriod(checkedPlan ? 'Yearly' : 'Monthly')
        setPlan(props);
    }

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
                                    <span>${priceArr[0]}/mo</span>
                                </div>
                                <div className='context-card' onClick={() => onClickCard('Advanced')} >
                                    <img src='../images/icon-advanced.svg' alt='context-card-image' />
                                    <h4>Advanced</h4>
                                    <span>${priceArr[1]}/mo</span>
                                </div>
                                <div className='context-card' onClick={() => onClickCard('Pro')}>
                                    <img src='../images/icon-pro.svg' alt='context-card-image' />

                                    <h4>Pro</h4>
                                    <span>${priceArr[2]}/mo</span>
                                </div>
                            </div>
                            <div className='context-main__switch'>
                                <p className={checkedPlan ? '' : 'switchActive'} >Monthly</p>
                                {/* <label>
                                    <span>Switch with default style</span>
                                    <Switch onChange={this.handleChange} checked={this.state.checked} />
                                </label> */}
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