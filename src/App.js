import { Routes, Route } from 'react-router-dom';
import background from '../src/images/bg-sidebar-desktop.svg'
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';

const sideSubtitles = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
const titles = ['Personal info', 'Select your plan']
const subtitles = ['Please provide your name, email address, and phone number.', 'You have the option of monthly or year billing.']

function App() {
  return (
    <>
      <div className='container'>
        <div className="App">
          {/* <img src={background} alt="bg" /> */}
          <main className='main'>
            <Main />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
