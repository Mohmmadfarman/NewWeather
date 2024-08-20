import './App.css';
import React, { useEffect, useState } from 'react';
import Main from './Main';
import Last from './Last';

function App() {
  const [data, setData] = useState(null);
  const [oldin, newin] = useState('');

  async function weather(first) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=a27eb3d983db44b4b1073659241908&q=${first}&days=4&aqi=no&alerts=no`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
        
      }
      const finalData = await response.json();
      setData(finalData);
    } catch (error) {
      
      console.error('Error fetching data:', error);
      alert("please enter valid location ")
      setData(null); // Optionally, set data to null or some error state
    }
  }

  function btn() {
    console.log(oldin);
    weather(oldin); // Fetch weather data when search button is clicked
    newin('')
  }

  function input(e) {
    let word = e.target.value;
    newin(word);
   
  }

  useEffect(() => {
    // weather(''); // Optionally load default location data on initial render
  }, []);

  return (
    <div className="App">
      <div className='bg-slate-500 w-full h-20 flex justify-center items-center'>
        <h1 className='sm:text-2xl font-bold md:text-3xl'>Weather App</h1>
      </div>
      <div className='flex w-full h-full bg-cyan-800  '>
        {/* First Section */}
        <div className='w-96 max-h-min bg-blue-500'>
          <input onChange={input} className='text-black mt-10 p-2 mb-10 pl-8 pr-2 rounded text-xl placeholder:text-black' type="text" value={oldin} placeholder='Enter locations here..' />
          <br />
          <button onClick={btn} className='p-3 pl-12 pr-12 bg-slate-600 mb-14 rounded font-bold text-white'>Search</button>
          <br />
          <hr />
          <button className='p-3 pl-12 pr-12 bg-slate-600 mb-14 rounded mt-9 text-white font-bold'>Use Current Location</button>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>

        {/* Second Section */}
        <div className='w-full h-full'>
          {data ? <Main main={data} /> : <Last />}
        </div>
      </div>
    </div>
  );
}

export default App;