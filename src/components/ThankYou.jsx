import { useMemo, useContext } from 'react';
import { FormInputData } from './Main';
import './ThankYou.scss';

export default function ThankYou() {
    const { stepCount, setStepCount } = useContext(FormInputData);

    const displayThankYou = useMemo(
        () => (
            
            <section>
                <main className='thankYou-main'>
                    <div className="context-thankYou__main">
                        <img src='../images/icon-thank-you.svg' alt='ThankYou' />
                        <h1>Thank You!</h1>
                        <span>
                            Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                        </span>
                    </div>

                </main>
            </section>
        ),
        []
    )

    return(
        <>
            {
                stepCount === 4 &&  displayThankYou 
            }
        </>
    );
}