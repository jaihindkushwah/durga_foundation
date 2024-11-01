import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface IEmployeeCardProps {
  id: string;
  name: string;
  role: string;
  email: string;
  imgUrl: string;
}

function EmployeeCard({ id, name, role, email, imgUrl }: IEmployeeCardProps) {
  return (
    <Card key={id + "card"} className="w-80 bg-slate-200/70 ">
      <div className="w-80 flex flex-row ">
        <Avatar className="w-16 h-16 ml-3 mt-5">
          <AvatarImage src={imgUrl} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 text-sm">
            <p className="text-slate-600 ">Email</p>
            <p className="font-medium ">{email}</p>
          </CardContent>
          <CardFooter className="flex gap-2 text-sm font-normal">
            <button className=" px-5 py-1 rounded-md border hover:bg-slate-100 border-black">
              Block
            </button>
            <button className="text-white  hover:bg-black/80 bg-black px-5 py-1 rounded-md">
              Details
            </button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

export default EmployeeCard;
