"use client";

import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Welcome to My Tailwind Test Page</h1>
      <p>This is a simple Next.js + Tailwind CSS setup with TypeScript For Testing.</p>

      <div className="flex flex-col items-center gap-4">
        <p className="text-xl font-medium text-gray-700">
          You clicked <span className="text-blue-600">{count}</span> times
        </p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
    </main>
  );
}
