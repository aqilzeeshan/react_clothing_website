//Import React hooks
import React, { useEffect, useState } from 'react'
/* Calculator functional component calculates and displays the total amount to be paid
by the customer based on shopping total and the number of months
customer wants to spread the cost. Adding 20% interest rate (non-compound)

This component was perviously a class based component 
so it has been converted into a function based component using React Hooks
*/
const Calculator = ()=>{

    //Shopping total and months are kept in state.
    //Initially state is initailised to empty string
    const [shoppingTotal,setShoppingTotal] = useState('')
    const [months,setMonths] = useState('')

  //This function calculates and returns the total amound to be paid by the customer
  //It uses the values stored in state variables shoppingTotal and months
  //Formula: total amount to be paid = shoppingTotal X 1+(months+20/100)
  const getTotal = ()=>{
    //If state variables contain values then perform calculation
    if(shoppingTotal && months){
        //type cast string values to number before performing calculation
        return (Number(shoppingTotal) * 1+(0.2*Number(months)))
    }
  }

  return (
      <main>
          <label>
              {/*Input field for user to enter shopping total - event handler is attached to onChange event*/}
              Shopping Total:<input type="text" onChange={(e)=>setShoppingTotal(e.target.value)}/>
          </label>
          <label>
              {/*Input field for user to enter months - event handler is attached to onChange event*/}
              Months:<input type="text" onChange={(e)=>setMonths(e.target.value)}/>
          </label>
          <div>
            {/*Call getTotal() on each render to dipslay updated amount*/}
            <p>Amount to be Paid:{getTotal()}</p>
          </div>
      </main>
  )
}

//Export it so this component can be used by other components
export default Calculator