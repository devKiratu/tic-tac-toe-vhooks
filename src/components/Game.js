import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

export default function Game() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	function handleClick(i) {
		console.log("I was clicked");
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = xIsNext ? "X" : "O";
		setBoard(boardCopy);
		setXisNext(!xIsNext);
	}

	function jumpTo() {
		//implement time travel here
	}

	function renderMoves() {
		return (
			<button onClick={() => setBoard(Array(9).fill(null))}>Start game</button>
		);
	}

	return (
		<>
			<p className="title">Tic-Tac-Toe </p>
			<Board squares={board} onClick={handleClick} />
			<div className="stats">
				<p>
					{winner
						? "Winner is " + winner
						: "Next player: " + (xIsNext ? "X" : "O")}
				</p>
				{renderMoves()}
			</div>
		</>
	);
}
