//Import React
import React from 'react'
//Import Product component
import Product from './Product'
//Import images
import dress1 from './images/dress1.jpg'
import dress2 from './images/dress2.jpg'
import dress4 from './images/dress4.jpg'

//Shop component acts as parent component for Product component
const Shop = () => (
    <div class="img-container">
        <h1>Products</h1>
        {/*Product component is used 3 times to show 3 products
           Product name and image source are passed to it using props
        */}
        <Product name="Formal Wear" image={dress1}/>
        <Product name="New Arrivals" image={dress2}/>
        <Product name="Casual Wear" image={dress4}/>
    </div>
)
//Export Shop component so it can be used by other components
export default Shop