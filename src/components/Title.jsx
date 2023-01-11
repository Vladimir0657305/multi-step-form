import './Title.scss';

const sideSubtitles = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
const titles = ['Personal info', 'Select your plan', 'Pick add-ons' ]
const subtitles = ['Please provide your name, email address, and phone number.', 'You have the option of monthly or yearly billing.', 'Add-ons help enhance your gaming experience']

export default function Title() {

    return (
        <>
            <section>
                <div className="titleContext">
                    <div className="titleContext-block">
                        <h1>{titles[2]}</h1>
                        <span>{subtitles[2]}</span>
                    </div>
                </div>
            </section>

        </>
    );
}