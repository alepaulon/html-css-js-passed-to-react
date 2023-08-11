import { FC } from "react";

type CheckGuessProps = {
  randomNumber: number;
  guessValue: number;
};

const CheckGuess: FC<CheckGuessProps> = ({ randomNumber, guessValue }) => {
  if (guessValue === randomNumber) {
    return (
      <p className="text-lg font-semibold text-yellow-400">
        ¡Felicitaciones! ¡Adivinaste el número!
      </p>
    );
  } else if (guessValue > 100 || guessValue <= -1) {
    return (
      <p className="text-lg font-semibold text-red-500">
        Valor ingresado incorrecto, debería estar entre 0 y 100
      </p>
    );
  } else if (guessValue < randomNumber) {
    return (
      <p className="text-lg font-semibold text-gray-200">
        Intenta con un número más alto.
      </p>
    );
  } else {
    return (
      <p className="text-lg font-semibold text-gray-200">
        Intenta con un número más bajo.
      </p>
    );
  }
};

export default CheckGuess;
