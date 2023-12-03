// import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './navbar/Navbar';
import StepOne from './page-one/StepOne'
import StepTwo from './page-two/StepTwo'
import StepThree from './page-three/StepThree'
import StepFour from './page-four/StepFour'
import StepFive from './page-five/StepFive';
// import billTime from './page-two/StepTwo'

function App() {
  const [plan, setPlan] = useState("arcade")
  const [billTime, setBillTime] = useState("monthly")
  const [price, setPrice] = useState(0)
  
  return (
    <div className="wrapper">
      <div className='body'>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route exact path='/stepone' 
              element={<StepOne/>}
              
            />
            <Route 
              exact path='/steptwo' 
              element={<StepTwo billTime={billTime} setBillTime={setBillTime} setPlan={setPlan} plan={plan} setPrice={setPrice} price={price}/>}
            />
            <Route exact path='/stepthree' element={<StepThree/>}/>
            <Route exact path='/stepfour' element={<StepFour billTime={billTime} plan={plan} price={price}/>}/>
            <Route exact path='/stepfive' element={<StepFive/>}/>

          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
