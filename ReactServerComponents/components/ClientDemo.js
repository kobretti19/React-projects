"use client";

import { useState } from "react";

export default function ClientDemo({ children }) {
  // const [count, setCount] = useState(0); // Client state
  console.log("ClientDemo rendered");
  return (
    <div className="client-cmp">
      <h2>A React Client Component</h2>
      <p>
        Will be rendered on the client <strong>AND</strong> the server.
      </p>

      {children}
      {/* <RSCDemo /> */}
    </div>
  );
}
