import React from "react";

interface DisplayScreenProps {
  value: string;
}

const DisplayScreen: React.FC<DisplayScreenProps> = ({ value }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-4 text-right">
      <div className="text-3xl font-mono text-white font-semibold min-h-[40px] flex items-center justify-end">
        {value}
      </div>
    </div>
  );
};

export default DisplayScreen;
