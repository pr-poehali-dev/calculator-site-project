import React from "react";
import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  onClear?: () => void;
  onEquals?: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onClear, onEquals }) => {
  if (onClear) {
    return (
      <Button
        onClick={onClear}
        className="h-14 text-xl font-medium bg-red-500 hover:bg-red-600 text-white border-0 col-span-3"
      >
        C
      </Button>
    );
  }

  if (onEquals) {
    return (
      <Button
        onClick={onEquals}
        className="h-14 text-xl font-medium bg-green-500 hover:bg-green-600 text-white border-0"
      >
        =
      </Button>
    );
  }

  return null;
};

export default ActionButtons;
