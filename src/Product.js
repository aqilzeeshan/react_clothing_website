import React from 'react'

/**
 * 
 * @param {image,name} props - it takes image source and product name as props 
 * @returns - displays product
 */
const Product = props => (  
  <div>
    <img src={props.image} alt=""/>
    <h3>{props.name}</h3>
  </div>
)

export default Product