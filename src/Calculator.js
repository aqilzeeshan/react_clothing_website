import React, { useEffect, useState } from 'react'
/* Calculator component calculates the total amount to be paid
by the customer based on shopping total and the number of months
customer wants to spread the cost. Adding 20% interest rate (non-compound)
Shopping total and number of months are passed to it as props.
*/
function Calculator(props) {

    let total = 0
    //Shopping total and months are kept in state.
    //Initially state does not contain any value
    const [shoppingTotal,setShoppingTotal] = useState('')
    const [months,setMonths] = useState('')

  //This method calculates and returns the total amound to be paid by the customer
  //It uses the values stored in state variables shoppingTotal and months
  //Formula: total amount to be paid = shoppingTotal X 1+(months+20/100)
  const getTotal = ()=>{
    console.log(shoppingTotal)
    console.log(months)
    
    if(shoppingTotal && months){
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
          {/*Functional stateless component to show total amount to be paid */}
          <div>
            <p>Amount to be Paid:{total=getTotal()}</p>
          </div>
      </main>
  )
}

//Export it so this component can be used by other components
export default Calculator