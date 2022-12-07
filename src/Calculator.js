import React from 'react'
/* Calculator component calculates the total amount to be paid
by the customer based on shopping total and the number of months
customer wants to spread the cost. Adding 20% interest rate (non-compound)
Shopping total and number of months are passed to it as props.
*/
class Calculator extends React.Component {

  constructor(props){
    super(props);

    //Shopping total and months are kept in state.
    //Initially state does not contain any value
    this.state = {
        shoppingTotal:'',
        months:''
    }

    //As per https://reactjs.org/docs/handling-events.html no need to use the following if you are using 'public class fields' syntax to handle events
    //this.handleShoppingTotalChange = this.handleShoppingTotalChange.bind(this);
    //this.handleMonthsChange = this.handleMonthsChange.bind(this);
  }

  //This is event handler for any changes in the text input for shopping total
  // This syntax ensures `this` is bound within handleShoppingTotalChange
  handleShoppingTotalChange = (event) =>{
    this.setState({
        shoppingTotal: event.target.value
    })
  }

  //This is event handler for any changes in the text input for number of months
  handleMonthsChange = (event) =>{
    this.setState({
        months: event.target.value
    })
  }

  //This method calculates and returns the total amound to be paid by the customer
  //It uses the values stored in state variables shoppingTotal and months
  //Formula: total amount to be paid = shoppingTotal X 1+(months+20/100)
  getTotal(){
    console.log(this.state.shoppingTotal)
    console.log(this.state.months)
    if(this.state.shoppingTotal && this.state.months){
        const shoppingTotal = Number(this.state.shoppingTotal);
        const months = Number(this.state.months);
        return (shoppingTotal * 1+(0.2*months))
    }
  }

  render() {
    //total amount to be paid is caluclated on each render
    //so user can see the result as they type-in shopping total 
    //and number of months
    let total = this.getTotal()

    return (
        <main>
            <form>
                <label>
                    {/*Input field for user to enter shopping total - event handler is attached to onChange event*/}
                    Shopping Total:<input type="text" onChange={this.handleShoppingTotalChange}/>
                </label>
                <label>
                    {/*Input field for user to enter months - event handler is attached to onChange event*/}
                    Months:<input type="text" onChange={this.handleMonthsChange}/>
                </label>
            </form>
            {/*Functional stateless component to show total amount to be paid */}
            <ShowTotal total={total}/>
        </main>
    );
  }
}

//ShowTotal stateless component takes total amount to be paid as
//input in a prop and show it to the user
const ShowTotal = (props) => (
    <div>
        <p>Amount to be Paid:{props.total}</p>
    </div>
)
//Export it so this component can be used by other components
export default Calculator