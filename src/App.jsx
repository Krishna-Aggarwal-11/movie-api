import {BrowserRouter , Route , Routes} from "react-router-dom"
import './App.css'
import Header from "./components/Header/Header"
import Home from "./pages/home/Home"
import MovieList from "./components/movieList/MovieList"
import MovieDetails from "./pages/movieDetails/MovieDetails"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="movie/:id" element={<MovieDetails/>} />
          <Route path="movies/:type" element={<MovieList/>} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App