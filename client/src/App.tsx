import { useState } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex justify-center">
        <Button className="mx-3 my-3" variant="outline">Button1</Button>
        <Button className="mx-3 my-3" variant="outline">Button2</Button>
        <Button className="mx-3 my-3" variant="outline">Button3</Button>
      </div>
    </div>
  );
}

export default App;
