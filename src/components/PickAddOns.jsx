import React, { useContext, useEffect, useState } from 'react';
import { FormInputData } from './Main';
import 'react-input-checkbox/lib/react-input-checkbox.min.css';
import { Checkbox } from 'react-input-checkbox';
import './PickAddOns.scss';


export default function PickAddOns() {
    const {onlineServ, setOnlineServ} = useContext(FormInputData);
    const {largerStorage, setLargerStorage} = useContext(FormInputData);
    const {customProfile, setCustomProfile} = useContext(FormInputData);

    useEffect(() => {
        console.log(onlineServ, largerStorage, customProfile)
    }, [onlineServ, largerStorage, customProfile])
    
    
    return (
        <>
            <section>
                <main className='pickAddOns-main'>
                    <div className="context">

                        <div className="context-main">
                            <div className='context-main__addons'>
                                <div className='context-addons'  >
                                    <Checkbox theme="material-checkbox" value={onlineServ} onChange={() => setOnlineServ(!onlineServ)}></Checkbox>
                                </div>
                                <div className='context-addons'  >
                                    <Checkbox theme="material-checkbox" value={largerStorage} onChange={() => setLargerStorage(!largerStorage)}></Checkbox>
                                </div>
                                <div className='context-addons'  >
                                    <Checkbox theme="material-checkbox" value={customProfile} onChange={() => setCustomProfile(!customProfile)}></Checkbox>
                                </div>
                                
                            </div>
                            

                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}