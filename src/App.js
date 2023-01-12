import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <div className='container'>
        <div className="App">
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
