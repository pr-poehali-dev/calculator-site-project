import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import DisplayScreen from "@/components/DisplayScreen";
import NumberPad from "@/components/NumberPad";
import OperatorButtons from "@/components/OperatorButtons";
import ActionButtons from "@/components/ActionButtons";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (
    firstValue: number,
    secondValue: number,
    operation: string,
  ) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  return (
    <Card className="w-80 mx-auto bg-slate-900 border-slate-700 shadow-2xl">
      <div className="p-6 space-y-4">
        <DisplayScreen value={display} />

        <div className="grid grid-cols-4 gap-3">
          <ActionButtons onClear={clear} />
          <OperatorButtons
            onOperation={inputOperation}
            currentOperation={operation}
          />
          <NumberPad onNumber={inputNumber} />
          <ActionButtons onEquals={performCalculation} />
        </div>
      </div>
    </Card>
  );
};

export default Calculator;
