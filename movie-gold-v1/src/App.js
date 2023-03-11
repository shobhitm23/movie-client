import './App.css';
import {useState, useEffect} from 'react';
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";


function App() {
  
  const [movies, setMovies] = useState();

  const getMovies = async () =>{

    try{
      const response = await fetch('/api/v1/movies', {
        headers: {
          "Content-type": "application/json",
        },
        method: "get"
      });
    
    const data = await response.json();
    setMovies(data);
    console.log(data);

    } catch(err) {
      console.log(err);
    }

  } 

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout/> } >
          <Route path="/" element={ <Home/> } >
          
          </Route>
        </Route>
      </Routes> 

    </div>
  );
}

export default App;
