import React from 'react'

function Product({Product}) {
  return (
    
<div style={{height:'400px',width:'300px', background:'white', border:'2px solid #ddd',backgroundColor: "#fff",borderRadius:'12px',padding:'16px',boxShadow:'0 4px 12px rgba(0,0,0,0.08);}'}}>
    <img src={Product.image} style={{width:'300px',height:'200px',objectFit:'cover'}}></img>
    <div>
        <h2 style={{  fontSize: "24px",
    fontWeight: "600",
    margin: "5px 0",
    color: "#222",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"}}>{Product.title}</h2>
    <div style={{position:'relative',left:'0px',top:'20px',display:'flex',gap:'10px'}}><p style={{color:'red',fontSize:'25px',fontWeight:'500'}}>₹{Product.price}</p><p style={{ textDecoration: "line-through", color: "#999" ,fontWeight:'600',fontSize:'16px'}}>
  ₹{Product.pric}
</p><p style={{
    backgroundColor: "yellow",
    color: "black",
    fontWeight: "bold",
    display: "inline-block",
    padding: "4px 25px",
    borderRadius: "4px",
    fontSize: "12px"
  }}>
    {Product.offer}
  </p></div>
    
    </div>
    <button style={{
  width: "100%",
  padding: "10px",
  backgroundColor: "black",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "14px",
  position:'relative',
  top:'70px'
}}>
  Add to Cart
</button>
</div>
    
     
    
  )
}

export default Product
