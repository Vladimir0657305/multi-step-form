import './Sidebar.scss';

export default function Sidebar() {

    return (
        <>
            <div className="sidebar">

                {/* --- Item 1 --- */}
                <div className="sidebar-items">
                    <div className="sidebar-items__number">
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
                    <div className="sidebar-items__number">
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
                    <div className="sidebar-items__number">
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
                    <div className="sidebar-items__number">
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
            </div>
        </>
    );
}