import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Movie from './components/Movie';
import Footer from './components/Footer';

const discoverMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=570729437e10f817c77144ead71689b5&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1';

const searchMovies = 'https://api.themoviedb.org/3/search/movie?api_key=570729437e10f817c77144ead71689b5&language=en-US&page=1&include_adult=false&query=';

function App() {
  const [movies, setMovies] = useState([]); //se utiliza movie como constante principal y setMouvie como la constante useState, la cual se setea con un array porque lo que va a recibir es un array tipo json.

  useEffect(() => {
    getMovies(discoverMovies)    
  }, [])

  let searchInput = '';

  const getMovies = (link) => {
    fetch(link)
          .then(response => response.json())
          .then(data=> {            
            setMovies(data.results);
          });
  }

  const handleChange = (e) => {
    searchInput = e.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput) {
      getMovies(searchMovies + searchInput);      
    } else{
      getMovies(discoverMovies);
    }
  }


  return (
    <>
      <header>
        <div className='container' >
          <form onSubmit={handleSubmit} className='row search '>
            <h3 className ='col-md-8 col-sm-12 text-white' >Doglez Search Movies</h3>
            <input className='col-md-4 col-sm-12 search_input' placeholder='Find your movie' type='search' onChange={handleChange}/>
          </form> 
        </div>       
      </header> 
      <div className="App container">           
        <div className='row' >
          {movies.map(movie =>  
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <Movie key={movie.id} data= {movie} />  
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;