import {Box} from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import ParticularBlog from './Pages/ParticularBlog';
import AddNewBlog from './Pages/AddNewBlog';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Box>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/blog/:blogId' element={ <ParticularBlog/> } />
          <Route path='/new' element={ <AddNewBlog/> } />
          <Route path='/search/:searchText' element={ <SearchResults/> } />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
