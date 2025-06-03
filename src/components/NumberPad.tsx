import React from "react";
import { Button } from "@/components/ui/button";

interface NumberPadProps {
  onNumber: (num: string) => void;
}

const NumberPad: React.FC<NumberPadProps> = ({ onNumber }) => {
  const numbers = [["7", "8", "9"], ["4", "5", "6"], ["1", "2", "3"], ["0"]];

  return (
    <>
      {numbers.map((row, rowIndex) =>
        row.map((num) => (
          <Button
            key={num}
            onClick={() => onNumber(num)}
            className={`h-14 text-xl font-medium bg-slate-700 hover:bg-slate-600 text-white border-0 ${
              num === "0" ? "col-span-2" : ""
            }`}
            variant="secondary"
          >
            {num}
          </Button>
        )),
      )}
    </>
  );
};

export default NumberPad;
