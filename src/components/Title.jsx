import './Title.scss';

const sideSubtitles = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
const titles = ['Personal info', 'Select your plan', 'Pick add-ons', 'Finishing Up', '' ]
const subtitles = ['Please provide your name, email address, and phone number.', 'You have the option of monthly or yearly billing.', 'Add-ons help enhance your gaming experience', 'Double-check everything looks OK before confirming', '']

export default function Title(stepCount) {

    return (
        <>
            <section>
                <div className="titleContext">
                    <div className="titleContext-block">
                        <h1>{titles[stepCount.stepCount]}</h1>
                        <span>{subtitles[stepCount.stepCount]}</span>
                    </div>
                </div>
            </section>

        </>
    );
}