import {  Routes, Route } from 'react-router-dom';
import background from '../src/images/bg-sidebar-desktop.svg'
import './App.css';
import Footer from './components/Footer';
import PersonalInfo from './components/PersonalInfo';

const subtitles = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];

function App() {
  return (
    <>
      <div className='container'>
        <div className="App">
          {/* <img src={background} alt="bg" /> */}
          <main className='main'>
            <Routes>
              <Route path='/' element={<PersonalInfo  />} />
              {/* <Route path='/country/:name' element={<Details />} />
              <Route path='*' element={<NotFound />} />  */}
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
