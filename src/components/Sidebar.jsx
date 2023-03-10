import bg_image from '../images/bg-sidebar-desktop.svg';
import './Sidebar.scss';

export default function Sidebar(stepCount) {

    return (
        <>
            <div className="sidebar">
                {/* <img src={bg_image} alt="background-image" /> */}

                <div className="sidebar-block">

                

                {/* --- Item 1 --- */}
                <div className="sidebar-items">
                    <div className={stepCount.stepCount == 0 ? "sidebar-items__number number-active" : "sidebar-items__number"}  >
                        <span>1</span>
                    </div>
                    <div className="sidebar-items__text">
                        <div className="items-title">
                            <span>STEP 1</span>
                        </div>
                        <div className="items-subtitle">
                            <span>YOUR INFO</span>
                        </div>
                    </div>
                </div>

                {/* --- Item 2 --- */}
                <div className="sidebar-items">
                    <div className={stepCount.stepCount == 1 ? "sidebar-items__number number-active" : "sidebar-items__number"}>
                        <span>2</span>
                    </div>
                    <div className="sidebar-items__text">
                        <div className="items-title">
                            <span>STEP 2</span>
                        </div>
                        <div className="items-subtitle">
                            <span>SELECT PLAN</span>
                        </div>
                    </div>
                </div>

                {/* --- Item 3 --- */}
                <div className="sidebar-items">
                    <div className={stepCount.stepCount == 2 ? "sidebar-items__number number-active" : "sidebar-items__number"}>
                        <span>3</span>
                    </div>
                    <div className="sidebar-items__text">
                        <div className="items-title">
                            <span>STEP 3</span>
                        </div>
                        <div className="items-subtitle">
                            <span>ADD-ONS</span>
                        </div>
                    </div>
                </div>

                {/* --- Item 4 --- */}
                <div className="sidebar-items">
                    <div className={stepCount.stepCount == 3 ? "sidebar-items__number number-active" : "sidebar-items__number"}>
                        <span>4</span>
                    </div>
                    <div className="sidebar-items__text">
                        <div className="items-title">
                            <span>STEP 4</span>
                        </div>
                        <div className="items-subtitle">
                            <span>SUMMARY</span>
                        </div>
                    </div>
                </div>
                    {/* <img src={bg_image} alt="background-image" /> */}
                </div>
            </div>
        </>
    );
}