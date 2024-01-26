"use client"
import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/innvision/30min" />
    </div>
  );
};

export default App;
