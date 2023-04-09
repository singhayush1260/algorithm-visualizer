import  './Node.css';

const Node=({id,data,animate,value})=>{
    //console.log(Object.values(data)[0])
    return(
        <div id={`node-${id}`} className={`node ${animate?animate:""}`}>
               
        </div>
    )
}
export default Node;