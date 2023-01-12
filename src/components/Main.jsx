import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ContextButton from './ContextButton';
import Sidebar from './Sidebar';
import Title from './Title';
import './Main.scss';
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import PickAddOns from './PickAddOns';
import FinishingUp from './FinishingUp';
import ThankYou from './ThankYou';

export const FormInputData = createContext('');


export default function Main() {

    const [user, setUser] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');
    const [checkedPlan, setCheckedPlan] = useState(false);
    const [plan, setPlan] = useState('Arcade');
    const [period, setPeriod] = useState('Monthly');
    const [onlineServ, setOnlineServ] = useState(false);
    const [largerStorage, setLargerStorage] = useState(false);
    const [customProfile, setCustomProfile] = useState(false);
    const [stepCount, setStepCount] = useState(0);
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, inputEmail, inputPhone);
        setUser('');
        setInputEmail('');
        setInputPhone('');
        setSuccess(true);
    }

    useEffect(() => {
    }, [plan, period])

    useEffect(() => {
        switch (stepCount) {
            case 0:
                navigate('/')
                break;
            case 1:
                navigate('/selectplan')
                break;
            case 2:
                navigate('/pickaddons')
                break;
            case 3:
                navigate('/finishingup')
                break;
            case 4:
                navigate('/thankyou')
                break;

        }
    }, [stepCount])

    useEffect(() => {
        stepCount === 0 && setCheckedPlan(false)
        // stepCount === 0 ? setCheckedPlan(false) : stepCount
    }, [stepCount])

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
                        checkedPlan, setCheckedPlan,
                        plan, setPlan,
                        period, setPeriod,
                        onlineServ, setOnlineServ,
                        largerStorage, setLargerStorage,
                        customProfile, setCustomProfile,
                        stepCount, setStepCount
                    }}>
                        <div className='side'>
                            <Sidebar stepCount={stepCount} />
                        </div>
                        <main className='main-context'>
                            <Title stepCount={stepCount} />
                            <Routes>
                                <Route path='/' element={<PersonalInfo />} />
                                <Route path='/selectplan' element={<SelectPlan />} />
                                <Route path='/pickaddons' element={<PickAddOns />} />
                                <Route path='/finishingup' element={<FinishingUp />} />
                                <Route path='/thankyou' element={<ThankYou />} />
                                {/* <Route path='*' element={<NotFound />} />  */}
                            </Routes>
                            <ContextButton />
                        </main>
                    </FormInputData.Provider>
                </div>
            </section>

        </>
    );
}