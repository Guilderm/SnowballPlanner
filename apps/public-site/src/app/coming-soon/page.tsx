import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ComingSoon from "../../components/ComingSoon";

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ComingSoon />
      <Footer />
    </div>
  );
}
