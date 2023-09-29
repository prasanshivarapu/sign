import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Signup from './components/file1';
import Sign from './components/file2';
import Welcome from './components/file3';

const App = ()=>{
   return(
      <>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Signup/>}/>
         <Route path="/signin" element={<Sign />}></Route>
         <Route path='/welcome' element={<Welcome/>} ></Route>
      </Routes>
      </BrowserRouter>
      </>
   )
}

export default App;
