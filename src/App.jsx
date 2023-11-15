import MoviesProject from "./Project 2/Moviesproject";
import Practice from "./Project 2/Practice";
import Unsplash from "./Project 2/Unsplash";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesProject />} />
          <Route path="/" element={<Unsplash />} />
          <Route path="/" element={<Practice />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
