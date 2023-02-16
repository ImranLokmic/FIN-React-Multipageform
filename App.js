import React, { useState } from "react";
import "./app.css";
import { Form, Sidebar } from "./containers/index";

function App() {
  const [active, setActive] = useState(1);

  const whoActive = (isActive) => {
    setActive(isActive);
  };

  return (
    <div className="main">
      <div className="main-form">
        <Form whoActive={whoActive} />
      </div>
      <div className="main-sidebar">
        <Sidebar active={active} />
      </div>
    </div>
  );
}

export default App;
