import classes from './Bar.module.scss';
const Bar=({idx,value,height,translateX})=>{
    return(
        <div id={idx} className={classes.bar} style={{height:`${height}px`,transform:`translateX(${translateX}px)`}}>
          {value}
        </div>
    )
}
export default Bar;