import { useState, createContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContextButton from './ContextButton';
import Sidebar from './Sidebar';
import Title from './Title';
import './Main.scss';
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import PickAddOns from './PickAddOns';

export const FormInputData = createContext('');


export default function Main() {

    const [user, setUser] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');
    const [plan, setPlan] = useState('');
    const [period, setPeriod] = useState('Monthly');
    const [onlineServ, setOnlineServ] = useState(false);
    const [largerStorage, setLargerStorage] = useState(false);
    const [customProfile, setCustomProfile] = useState(false);

    let stepCount = 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, inputEmail, inputPhone);
        setUser('');
        setInputEmail('');
        setInputPhone('');
        setSuccess(true);
    }

    useEffect(() => {
        console.log(plan, period);
    }, [plan, period])

    return (
        <>
            <section>
                <div className='main-block'>
                    <FormInputData.Provider value={{
                        user, setUser,
                        inputEmail, setInputEmail,
                        inputPhone, setInputPhone,
                        errMsg, setErrMsg,
                        success, setSuccess,
                        plan, setPlan,
                        period, setPeriod,
                        onlineServ, setOnlineServ,
                        largerStorage, setLargerStorage,
                        customProfile, setCustomProfile
                    }}>
                        <div className='side'>
                            <Sidebar stepCount={stepCount} />
                        </div>
                        <main className='main-context'>
                            {/* <div className="context"> */}
                            <Title />
                            {/* </div> */}
                            <Routes>
                                <Route path='/' element={<PersonalInfo />} />
                                <Route path='/selectplan' element={<SelectPlan />} />
                                <Route path='/pickaddons' element={<PickAddOns />} />
                                {/* <Route path='*' element={<NotFound />} />  */}
                            </Routes>


                            <ContextButton />
                            {/* <div className="context-buttons">
                            <button >Next Step</button>
                        </div> */}

                        </main>
                    </FormInputData.Provider>
                </div>
            </section>

        </>
    );
}