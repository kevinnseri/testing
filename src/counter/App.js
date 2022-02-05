import React, { Fragment, useState, useEffect, useRef } from 'react'
import './App.scss';


function App() {

  let [counter, setCounter] = useState(0);
  let [clockOn, setClockOn] = useState(false);

  let interval = useRef();

  useEffect(() => {

    if (clockOn) {
      // setCounter(counter++)
      interval.current = setInterval(function inter() { setCounter(counter++); return inter; }(), 1000) // interval.current = setInterval(() => setCounter(counter++), 1000)
    } else {
      setCounter(0)
      clearInterval(interval.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clockOn])


  return (
    <Fragment>

      <div className='navBar'>
        <span className='title'>TESTING</span>
      </div>

      <div style={{ position: 'absolute', margin: '0', padding: '0' }}>
        <button
          className='counterButton'
          onClick={() => setClockOn(!clockOn)}
        >
          <span style={{ fontSize: '50px' }}>{clockOn ? counter : 'Start'}</span>
        </button>

      </div>

    </Fragment>
  );
}

export default App;



// const showText = async () => {
  //   while (true) {
  //     console.log(String(new Date().getSeconds()).padStart(2, '0'))
  //     await delay(2000);
  //     console.log(String(new Date().getSeconds()).padStart(2, '0'))
  //     await delay(2000);
  //   }
  // }

  // const showCounter = async () => {
  //   while (true) {
  //     setCounter(counter++);
  //     await delay(2000);
  //     setCounter(counter++);
  //     await delay(2000);
  //   }
  // }


  // let [text, setText] = useState('')
  // let [counter, setCounter] = useState(0)

  // const delay = (ms) => {
  //   return new Promise(resolve => setTimeout(resolve, ms))
  // }

  // const showCounter = () => {
  //   return setInterval(() => {
  //     console.log(String(new Date().getSeconds()).padStart(2, '0'))
  //     setCounter(counter++);
  //   }, 1000)
  // }

  // useEffect(() => {
    // showText();
    // const interval = showCounter();

    //  return ;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
