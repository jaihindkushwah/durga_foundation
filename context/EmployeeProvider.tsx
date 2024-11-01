import { createContext, useContext, useState } from "react";
import { EmployeeData } from "@/lib/data";

const EmployeeContext = createContext<{
  employees: typeof EmployeeData;
  handleSearch: (value: string) => void;
  status: string;
  handleStatusChange: (value: string) => void;
}>({
  employees: EmployeeData,
  handleSearch: () => {},
  status: "all",
  handleStatusChange: () => {},
});

interface IEmployeeContext {
  children: React.ReactNode;
}

export const useEmployee = () => useContext(EmployeeContext);

function EmployeeProvider({ children }: IEmployeeContext) {
  const [employees, setEmployees] = useState(EmployeeData);

  const [status, setStatus] = useState("all");
  const handleSearch = (value: string) => {
    const newData = EmployeeData.filter(
      (employee) =>
        employee.name.toLowerCase().includes(value.toLowerCase()) ||
        employee.role.toLowerCase().includes(value.toLowerCase()) ||
        employee.email.toLowerCase().includes(value.toLowerCase())
    );
    setEmployees(newData);
  };
  const handleStatusChange = (value: string) => {
    setStatus(value);

    if (value === "all") {
      setEmployees(EmployeeData);
    } else {
      const newData = EmployeeData.filter(
        (employee) => employee.status === value
      );
      setEmployees(newData);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, handleSearch, status, handleStatusChange }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;
