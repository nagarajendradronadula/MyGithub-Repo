import { useState } from "react";
import { genTicket, sum } from "./helper"
import Ticket from "./Ticket";

export default function Lottery({n=3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br/>
            <button onClick={buyTicket}>Buy New Ticket</button>

            <h3>{isWinning && "Congratulations You Won the Lottery!"}</h3>
        </div>
    )
}