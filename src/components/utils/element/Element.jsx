// array elements
import classes from './Element.module.scss';
const Element=({value})=>{
    return(
        <div  id="array-element" className={classes.element}>{value}</div>
    )
}
export default Element;