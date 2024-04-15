import {useState, useEffect} from 'react';
import iconDice from './assets/icon-dice.svg';
import './App.css';

function App() {
  const [advice, setAdvice] = useState({id: '', text: ''})
  const fetchAdvice = async () => {
    await fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((response) => {setAdvice({id: response.slip.id, text: response.slip.advice})})
  }
  useEffect(() => {
    fetchAdvice();
  }, [])
  return (
    <div className="App">
      <p className='advice-id'>Advice #{advice.id}</p>
      <p className='advice-text'>❝{advice.text}❞</p>
      <div className='pattern-divider' />
      <div className='image-container' onClick={fetchAdvice}>
        <img alt='icon-dice' src={iconDice} />
      </div>
    </div>
  );
}

export default App;
