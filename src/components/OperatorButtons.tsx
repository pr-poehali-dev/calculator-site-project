import React from "react";
import { Button } from "@/components/ui/button";

interface OperatorButtonsProps {
  onOperation: (operation: string) => void;
  currentOperation: string | null;
}

const OperatorButtons: React.FC<OperatorButtonsProps> = ({
  onOperation,
  currentOperation,
}) => {
  const operators = [
    { symbol: "÷", operation: "÷" },
    { symbol: "×", operation: "×" },
    { symbol: "-", operation: "-" },
    { symbol: "+", operation: "+" },
  ];

  return (
    <>
      {operators.map(({ symbol, operation }) => (
        <Button
          key={symbol}
          onClick={() => onOperation(operation)}
          className={`h-14 text-xl font-medium border-0 ${
            currentOperation === operation
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-purple-500 hover:bg-purple-600"
          } text-white`}
        >
          {symbol}
        </Button>
      ))}
    </>
  );
};

export default OperatorButtons;
