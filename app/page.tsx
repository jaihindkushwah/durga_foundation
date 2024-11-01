"use client";
import Header from "@/components/Header";
import EmployeeCard from "@/components/ui/EmployeeCard";
import { useEmployee } from "@/context/EmployeeProvider";

export default function Home() {
  const { employees, status, handleStatusChange } = useEmployee();
  const handleFilter = (value: string) => {
    handleStatusChange(value);
  };
  return (
    <div className="min-h-screen font-sans pt-5 w-screen bg-gradient-to-br from-[#f3d6fc] via-slate-100 to-white">
      <Header />
      <main className="p-5 px-10 flex flex-col gap-6">
        <div className="flex justify-between flex-wrap">
          <p className="text-xl font-semibold">Employees</p>
          <span className="flex gap-2 mt-1 sm:mt-0">
            <button
              onClick={() => handleFilter("all")}
              className={`px-8 py-1 rounded-full font-medium  ${
                status === "all" ? "bg-[#b202ed] text-white" : "text-black"
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleFilter("active")}
              className={`px-8 py-1 rounded-full font-medium ${
                status === "active" ? "bg-[#b202ed] text-white" : "text-black"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => handleFilter("inactive")}
              className={`px-8 py-1 rounded-full font-medium ${
                status === "inactive" ? "bg-[#b202ed] text-white" : "text-black"
              }`}
            >
              Inactive
            </button>
          </span>
        </div>
        <div className="flex  items-center gap-5 flex-wrap ">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} {...employee} />
          ))}
        </div>
      </main>
    </div>
  );
}
