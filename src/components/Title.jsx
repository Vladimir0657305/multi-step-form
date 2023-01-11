import './Title.scss';

const sideSubtitles = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
const titles = ['Personal info', 'Select your plan']
const subtitles = ['Please provide your name, email address, and phone number.', 'You have the option of monthly or year billing.']

export default function Title() {

    return (
        <>
            <section>
                <div className="context">
                    <div className="context-title">
                        <h1>Personal info</h1>
                        <span>Please provide your name, email address, and phone number.</span>
                    </div>
                </div>
            </section>

        </>
    );
}