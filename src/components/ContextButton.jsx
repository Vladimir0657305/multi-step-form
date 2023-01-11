import './ContextButton.scss';
import { FormInputData } from './Main';
import { useContext } from 'react';;




export default function ContextButton() {
    const {stepCount, setStepCount} = useContext(FormInputData);
    
    const onPressNextButton = () => {
        let temp = stepCount;
        temp++;
        setStepCount(temp);
    }
    const onPressPrevButton = () => {
        let temp = stepCount;
        temp--;
        // temp={temp  && 0  };
        if(temp < 0) temp=0
        setStepCount(temp);
    }
    return(
        <>
        <section className="context-buttons" >
                <span className={stepCount === 0 ? 'prevButton invisib' : 'prevButton '}              onClick={() => onPressPrevButton()}>Go Back</span> 
                <span className='nextButton' onClick={() => onPressNextButton()}>Next Step</span> 
        </section>
            
        </>
    );
}