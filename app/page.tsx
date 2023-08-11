"use client";

import { useState, ChangeEvent } from "react";
import CheckGuess from "@/components/CheckGuess";

export default function Home() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  console.log(randomNumber, "randomNumber");
  const [inputValue, setInputValue] = useState("");
  const [guessNumber, setGuessNumber] = useState("");
  const [attempts, setAttempts] = useState(0);

  const changeGuess = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const setValue = () => {
    if (inputValue) {
      setGuessNumber(inputValue);
      setAttempts((prev) => prev + 1);
    }
  };

  const reset = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts(0);
    setInputValue("");
    setGuessNumber("");
  };

  return (
    <div className="flex flex-col p-20 m-20 bg-black bg-opacity-70 items-center space-y-6">
      <h1 className="text-xl font-bold text-gray-200">Adivina el número</h1>
      <p className="text-gray-200">
        Estoy pensando en un número entre 1 y 100. ¡Adivina cuál es!
      </p>
      <input
        type="number"
        onChange={changeGuess}
        value={inputValue}
        placeholder="Ingresa tu número"
      />
      <button onClick={setValue} className="bg-green-300 rounded-2xl px-4 py-1">
        Adivinar
      </button>
      <button onClick={reset} className="bg-red-300 rounded-2xl px-4 py-1">
        Reiniciar
      </button>
      <CheckGuess
        randomNumber={randomNumber}
        guessValue={Number(guessNumber)}
      />
      <p className="text-gray-300">Intentos: {attempts} </p>
    </div>
  );
}
