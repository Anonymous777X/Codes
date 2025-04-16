import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Datacard.jsx'

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchdata = async () => {
          try {
              const response = await axios.get('http://localhost:3000/api/latest-launch/');
              console.log(response.data);
              setData(response.data);
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };

      fetchdata();
  }, []); 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <Card data={data} />
    </>
  )
}

export default App
