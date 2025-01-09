import { useState } from 'react'

import './App.css'


function App() {
  const [counter, setCounter] = useState(0);
  const [showAlert, setShowAlert] = useState(false); // State to control the alert visibility
  const [alertMessage, setAlertMessage] = useState('');

  
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setAlertMessage('Number cannot increase more than "twenty".');
      setShowAlert(true); // Show the alert
    }
  };

 
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setAlertMessage('Number cannot decrease less than "zero".');
      setShowAlert(true); 
    }
  };

  // Close the alert
  const closeAlert = () => {
    setShowAlert(false); // Hide the alert
  };

  return (
    <div>
      <div className="main-container p-[3rem] border-[#00ffffc5] border-[3px] bg-zinc-900 min-h-fit max-w-fit m-auto rounded-[25px]  md:mt-[10rem] mt-[15rem]">
        <h1 className='text-[3rem] text-[#00ffffc5] font-[italic] font-semibold'>Counter App</h1>
        <p className='mb-[1rem] text-[4.5rem] font-bold'>{counter}</p>
        <button onClick={addValue} className='bg-zinc-700  hover:text-white rounded-[50%] text-[5rem] font-bold text-[#00ffffc5] m-[7px] w-[7.5rem] text-center border-[2.5px] border-[#00ffffc5] min-h-fit'>+</button>
        <button onClick={removeValue} className='bg-zinc-700 hover:text-white rounded-[50%] text-[5rem] font-bold text-[#00ffffc5] m-[7px] w-[7.5rem] text-center border-[2.5px] border-[#00ffffc5] min-h-fit '>-</button>
      </div>

      {/* Custom Alert */}
      {showAlert && (
        <div className="custom-alert-overlay">
          <div className="custom-alert" >
            <p>{alertMessage}</p>
            <button onClick={closeAlert} className="close-alert-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;