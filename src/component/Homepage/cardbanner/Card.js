import"./Card.css"
const Card=(props)=>{
    return(
        <div>
        <div className="card  border-success mb-3" >
  <div className="card-header bg-transparent px-5  "><img src={props.image} alt="none" /></div>
  <div className="card-body px-5 text-success">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.para}</p>
  </div>
  <div className="card-footer px-5 bg-transparent">Learn More {'->'} </div>
 </div>
        </div>
    )
}
export default Card