import { Link } from 'react-router-dom';
import classes from './Home.module.scss';
const Home=()=>{
    return(
        <div className={classes.page_wrapper}>
            <h1>Home</h1>
            <Link to="/path-finding-visualizer">Path Finding</Link>
            <Link to="/sorting-visualizer">Sorting Visualizer</Link>
            <Link to="/searching-visualizer">Searching Visualizer</Link>
        </div>
    )
}
export default Home;