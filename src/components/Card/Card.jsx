function Card(props) {
  // console.log(props)
  const item = props.item

  console.log(item)

  return (
    <>
      <div className="card">
        <h2>{item.name}</h2>
        
        <div className="tags">
          <div className="tag">Status: {item.status}</div>
          <div className="tag">Specie: {item.species}</div>
          <div className="tag">Origin: {item["origin"].name}</div>
        </div>

        <img src={item.image}/>
      </div>
    </>
  )
}

export default Card