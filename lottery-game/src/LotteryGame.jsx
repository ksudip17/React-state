import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import "./LotteryGame.css";

export default function LotteryGame({ n, winningSum }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let [attempts, setAttempts] = useState(0);

  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genTicket(n));
    setAttempts(attempts + 1);
  };

  return (
    <div className="lotteryGameUi">
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy Ticket</button>
      <h2 className="congrats">{isWinning && `Congratulations, you won in ${attempts + 1} attempts!`}</h2>
      {!isWinning && <p>Attempts: {attempts}</p>}
    </div>
  );
}
