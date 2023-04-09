
import './App.css'
import Home from './pages/home/Home';
import PathFindingVisualizer from './components/visualizers/PathFindingVisualizer';
import SortingVisualizer from './components/visualizers/SortingVisualizer';
import SearchingVisualizer from './components/visualizers/searching-visualizer/SearchingVisualizer';
import { Route, Routes } from 'react-router-dom';
const App=()=>{
return(
  <>
  <div className='container'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/path-finding-visualizer' element={<PathFindingVisualizer/>}/>
      <Route path='/sorting-visualizer' element={<SortingVisualizer/>}/>
      <Route path='/searching-visualizer' element={<SearchingVisualizer/>}/>
   </Routes>
  </div>
  </>
)
}

export default App

