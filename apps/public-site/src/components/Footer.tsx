import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} DebtFreePlanner. All rights reserved.
      </div>
    </footer>
  );
}
