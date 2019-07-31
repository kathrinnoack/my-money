import React from "react";
import Header from "../components/Header";

function LandingPage() {
  return (
    <>
      <Header title="My Money" />
      <div>
        <button>Add expense</button>
        <button>Add income</button>
      </div>
    </>
  );
}

export default LandingPage;
