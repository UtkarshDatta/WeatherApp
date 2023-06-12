import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
const apkiKey = "7615e28db9ac3f1486984e9e68c0f670";
const[data,setData] = useState({});

const getdetails = (cityName)=> {
  if(!cityName) return
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName+ "&appid="+ apkiKey;
  axios.get(apiURL).then((res)=> 
  {console.log("response",res.data)
  setData(res.data)})


  .catch((err)=> {
    console.log("err",err)
  })
}

useEffect(()=>{
  getdetails("Udaipur")

},[])


  return(
    <div className='col-md-12'>
      <div className='weatherBg'>
        <h1 className='heading'>Weather App</h1>
        
        <div className='d-grid gap-3 col-4 mt-4'>
        <input type='text' className='form-control'/>
        <button className='btn btn-primary' type='button'>Search</button>
        </div>
        </div>

        <div className='col-md-12 text-center mt-4'>
          <div className='shadow rounded weatherResultBox'>

            <img className='weathericon'
             src='https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png'/>
             <h5 className='weatherCity'>{data?.name}</h5>
             <h6 className='weatherTemp'>{((data?.main?.temp)-273.15).toFixed(1)}°C</h6>

          </div>
        </div>

    </div>
    
  );
  
}

export default App;
