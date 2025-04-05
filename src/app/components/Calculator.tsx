"use client";
import { useState } from "react";
import { useAddContext } from "../../../context/AddContext";
import { useSubtractContext } from "../../../context/SubtractContext";
import { useMultiplyContext } from "../../../context/MultiplyContext";
import { useDivideContext } from "../../../context/DivideContext";

export default function Calculator() {
  const [input, setInput] = useState("");
  const { add, sum } = useAddContext();
  const { subtract, result } = useSubtractContext();
  const { multiply, product } = useMultiplyContext();
  const { divide, quotient } = useDivideContext();

  const handleClick = (value: string) => {
    if (value == "=") {
      const match = input.match(/(\d+)([+\-x/])(\d+)/);
      if (!match) {
        setInput("Error");
        return;
      }

      const [, num1, operator, num2] = match;
      const a = Number(num1);
      const b = Number(num2);

      switch (operator) {
        case "+":
          add(a, b);
          setInput(sum.toString());
          break;
        case "-":
          subtract(a, b);
          setInput(result.toString());
          break;
        case "x":
          multiply(a, b);
          setInput(product.toString());
          break;
        case "/":
          divide(a, b);
          setInput(quotient.toString());
          break;
        default:
          setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-500">
      <div className="bg-gray-300 p-4 rounded-2xl shadow-xl hover:shadow-2xl w-80">
        <div className="mb-6 p-4 bg-white text-right text-2xl rounded-md h-14 flex items-center justify-end">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "x", "C", "0", "=", "/"].map(
            (btn) => (
              <button
                key={btn}
                onClick={() => handleClick(btn)}
                className={`p-4 hover:bg-amber-400 hover:text-emerald-500 text-blue-700 transform transition-all hover:text-xl text-lg font-bold hover:font-extrabold rounded-2xl ${btn === "C"
                    ? "bg-red-500 hover:bg-cyan-600 text-white"
                    : btn === "="
                      ? "bg-black  hover:bg-indigo-600 text-white"
                      : btn === "+" || btn === "-" || btn === "x" || btn === "/"
                        ? "bg-gray-700  hover:bg-fuchsia-700 text-white"
                        : "bg-gray-200 text-black"
                  } shadow-md active:scale-95`}
              >
                {btn}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
