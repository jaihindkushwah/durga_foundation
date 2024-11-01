"use client";
import EmployeeProvider from "@/context/EmployeeProvider";
import React from "react";

interface Props {
  children: React.ReactNode;
}
function App({ children }: Props) {
  return <EmployeeProvider>{children}</EmployeeProvider>;
}

export default App;
