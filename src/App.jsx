import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [bgColor, setBgColor] = useState("black");

  const colors = ["Red", "Orange", "Blue", "Violet", "Green"];

  return (
    <div
      className="h-screen w-full border-8 border-red-500"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center justify-around text-white absolute bottom-10 left-[8rem] h-[4rem] bg-white rounded-3xl w-4/5">
        {colors.map((el) => (
          <Button label={el} key={el} onClick={setBgColor} />
        ))}
      </div>
    </div>
  );
}

export default App;
