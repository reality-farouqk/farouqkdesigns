'use client'
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface CaseStudiesLayoutProps {
  children: React.ReactNode;
}

const CaseStudiesLayout: React.FC<CaseStudiesLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default CaseStudiesLayout;