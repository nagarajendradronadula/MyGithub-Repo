import './App.css'
import Lottery from "./Lottery.jsx"
// import TicketNum from "./TicketNum.jsx"
// import Ticket from "./Ticket.jsx"
import { sum } from "./helper"

function App() {

  let winCondition = (ticket) => {
    // return sum(ticket) === 15;
    return ticket.every((num) => num ===ticket[0]);
  }

  return (
      <div>
        <Lottery n={3} winCondition={winCondition} />
      </div>
  )
}

export default App
