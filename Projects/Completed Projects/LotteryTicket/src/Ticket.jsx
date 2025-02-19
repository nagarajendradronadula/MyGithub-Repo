import TicketNum from "./TicketNum.jsx"
import "./Lottery.css"

export default function Ticket({ticket}) {
    return (
        <div className="ticket">
            <p><b><i><u>Lottery Ticket Number</u></i></b></p>
            {/* <TicketNum num={ticket[0]} /> */}
            {ticket.map((num, idx) => (
                <TicketNum num = {num} key={idx} />
            ))}
        </div>
    )
}