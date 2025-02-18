"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const ClientRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  return <>{children}</>;
};

export default ClientRouter;