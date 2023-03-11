import './App.css';
import {useState, useEffect} from 'react';
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";


function App() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   fetch('http://localhost:8080/api/v1/movies', {
        headers: {
          "content": "application/json",
          redirection: "allow",
        }
      })
      .then((response) => response.json())
      .then((data) => {
        const arr = Array.from(data.entries())
        setMovies(arr);
        console.log(arr);
        
        console.log(arr[0][1]["poster"]);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout/> } >
          <Route path="/" element={ <Home movies= {movies}/> } >
          
          </Route>
        </Route>
      </Routes> 

    </div>
  );
}

export default App;
