import { SearchIcon } from "lucide-react";
import ProfileIcon from "./ProfileIcon";
import { useEmployee } from "@/context/EmployeeProvider";

const Header = () => {
  const { handleSearch } = useEmployee();

  return (
    <header className="flex justify-between px-5 items-center pr-10">
      <span className="flex items-center gap-2 h-8 ml-5  border p-1 rounded-md border-slate-500">
        <SearchIcon size={20} className="text-slate-600" />
        <input
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          className="w-40 border-none bg-inherit outline-none text-base   text-slate-600"
          placeholder="Search"
        />
      </span>
      <ProfileIcon />
    </header>
  );
};
export default Header;
