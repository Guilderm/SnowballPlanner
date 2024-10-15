import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-2xl font-bold text-gray-900">DebtFreePlanner</div>
        <div>{/* Add navigation links here if needed */}</div>
      </nav>
    </header>
  );
}
