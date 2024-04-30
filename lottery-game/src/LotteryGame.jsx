import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import "./LotteryGame.css";

export default function LotteryGame( {n,winningSum} ) {
    let [ticket, setTicket] = useState( genTicket(n));

    let isWinning = sum(ticket) == winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <div className="lotteryGameUi">
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy Ticket</button>
            <h2 className="congrats">{isWinning && "Congratulations, you won"}</h2>
        </div>
    );
}
