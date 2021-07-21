import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import FilmList from './FilmList';



const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [filmListDefault, setFilmListDefault] = useState();
  const [filmList, setFilmList] = useState();

  const fetchData = async () => {
    return await fetch('https://swapi.dev/api/films/')
        .then(response => response.json())
        .then(data => {
         setFilmList(data.results) 
         setFilmListDefault(data.results)
       });}

  const updateInput = async (input) => {
     const filtered = filmListDefault.filter(film => {
      return film.title.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setFilmList(filtered);
  }
  

  useEffect( () => {fetchData()},[]);

  return (
    <>
      <div class="container">
        <div class="grid">
          <h1>Star Wars Films:</h1>
          <SearchBar 
            input={input} 
            onChange={updateInput}
          /> 
          <FilmList filmList={filmList}/> 
        </div>     
      </div>  
    </>
   );
}



export default SearchPage;