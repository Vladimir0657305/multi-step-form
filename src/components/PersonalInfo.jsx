import './PersonalInfo.scss';
import Sidebar from './Sidebar';


export default function PersonalInfo() {

    return (
        <>
            <section>
                <div className='personalInfo-block'> 
                    <div className='personalInfo-side'>
                        <Sidebar />
                    </div>
                    

                    <div className="context">
                        <div className="context-title">
                            <h1>Personal info</h1>
                            <span>Please provide your name, email address, and phone number.</span>
                        </div>
                        <div className="context-main">
                            <span>Name</span>
                            {/* <input ref={refInputName} type="text" aria-label="Input name" placeholder='e.g. Stephen King' /> */}
                            <input type="text" aria-label="Input name" placeholder='e.g. Stephen King' />
                            <span>Email Address</span>
                            {/* <input ref={refInputEmail} type="text" aria-label="Input Email" placeholder='e.g. stephenking@lorem.com' /> */}
                            <input type="text" aria-label="Input Email" placeholder='e.g. stephenking@lorem.com' />
                            <span>Phone Number</span>
                            {/* <input ref={refInputPhone} type="text" aria-label="Input Phone" placeholder='e.g. +1 234 567 890' /> */}
                            <input type="text" aria-label="Input Phone" placeholder='e.g. +1 234 567 890' />

                        </div>
                        <div className="context-buttons">
                            <button>Next Step</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}