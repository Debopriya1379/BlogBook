import {Box} from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import AddNewBlog from './Pages/AddNewBlog';
import SearchResults from './Pages/SearchResults';

function App() {
  return (
    <Box>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/new' element={ <AddNewBlog/> } />
          <Route path='/search' element={ <SearchResults/> } />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
