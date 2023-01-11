import { useState, createRef, useEffect, useContext } from 'react';
import ContextButton from './ContextButton';
import './PersonalInfo.scss';
import Sidebar from './Sidebar';
import { FormInputData } from './Main';
import Title from './Title';


export default function PersonalInfo() {
    const refInputName = createRef();
    const {user, setUser} = useContext(FormInputData);
    const {inputEmail, setInputEmail} = useContext(FormInputData);
    const {inputPhone, setInputPhone} = useContext(FormInputData);
    const {errMsg, setErrMsg} = useContext(FormInputData);
    const {success, setSuccess} = useContext(FormInputData);

    useEffect(() => {
        refInputName.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [errMsg])

    return (
        <>
            <section>
                <main className='personalInfo-main'>
                    <div className="context-main">
                        {/* <form onSubmit={handleSubmit}> */}
                        <form >
                            <label htmlFor='userName'>Name</label>
                            <br />
                            <input
                                id='userName'
                                ref={refInputName}
                                type="text"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                aria-label="Input name"
                                placeholder='e.g. Stephen King'
                                autoComplete='on'
                                required
                            />
                            <br />
                            <label htmlFor='inputEmail'>Email Address</label>
                            <br />
                            <input
                                id='inputEmail'
                                // ref={refInputEmail} 
                                type="text"
                                value={inputEmail}
                                onChange={(e) => setInputEmail(e.target.value)}
                                aria-label="Input Email"
                                placeholder='e.g. stephenking@lorem.com'
                                autoComplete='on'
                                required
                            />
                            <br />
                            <label htmlFor='inputPhone'>Phone Number</label>
                            <br />
                            <input
                                id='inputPhone'
                                // ref={refInputPhone} 
                                type="text"
                                value={inputPhone}
                                onChange={(e) => setInputPhone(e.target.value)}
                                aria-label="Input Phone"
                                placeholder='e.g. +1 234 567 890'
                                autoComplete='on'
                                required
                            />
                            {/* <button className="context-buttons" >Next Step</button> */}
                        </form>

                    </div>


                </main>

            </section>
        </>
    );
}