import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
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
             <h5 className='weatherCity'>Udaipur</h5>
             <h6 className='weatherTemp'>37 °C</h6>

          </div>
        </div>

    </div>
    
  );
  
}

export default App;
