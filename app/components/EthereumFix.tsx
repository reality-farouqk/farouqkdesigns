"use client"
import { useEffect } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const EthereumFix: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      Object.defineProperty(window, "ethereum", {
        configurable: false,
        writable: false,
        enumerable: true,
        value: window.ethereum,
      });
    }
  }, []);

  return null;
};

export default EthereumFix;