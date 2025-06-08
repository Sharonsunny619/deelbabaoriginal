"use client";
import React, { useState } from "react";
import Deelbaba from "../header/images/deelbaba";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SettingImage from "./images/4761c87a65c4dd0955a87c7118053672632e14b1.png";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function WorkersRegistration() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="flex items-center cursor-pointer p-4"
        onClick={() => router.push("/home")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Deelbaba
          colorA={isHovered ? "#A6E8A4" : "#689567"}
          colorB={isHovered ? "#689567" : "#A6E8A4"}
        />
      </div>
      <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="mt-8 bg-[#FCFAF5] flex flex-col w-full max-w-7xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-left">Workers Registration</h2>
          <div className="flex flex-col lg:flex-row w-full shadow-md rounded-3xl overflow-hidden">
            <div className="lg:w-1/2 bg-[#689567] text-white p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center relative">
              <div
                className="absolute top-4 left-4 sm:top-6 sm:left-6 cursor-pointer"
                onClick={() => router.push("/home")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              ></div>
              <Image
                src={SettingImage}
                alt="Worker Illustration"
                width={300}
                height={380}
                className="mb-6 w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px]"
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl italic text-[#97FE94] font-semibold text-center leading-tight">
                {Array.from("Here You Start").map((char, i) => (
                  <span
                    key={i}
                    className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
                  >
                    {char}
                  </span>
                ))}
                <br />
                <p className="-mt-2 sm:-mt-3">
                  {Array.from("Your Work").map((char, i) => (
                    <span
                      key={i}
                      className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
                    >
                      {char}
                    </span>
                  ))}
                </p>
              </h2>
            </div>
            <div className="lg:w-1/2 bg-white p-6 sm:p-8 lg:p-10">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <Label className="mb-2">First Name</Label>
                  <Input placeholder="First Name" className="bg-[#EBF5EC] cursor-pointer w-full" />
                </div>
                <div className="col-span-1">
                  <Label className="mb-2">Last Name</Label>
                  <Input placeholder="Last Name" className="bg-[#EBF5EC] cursor-pointer w-full" />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <Label className="mb-2">Job Category</Label>
                  <Select>
                    <SelectTrigger className="bg-[#EBF5EC] cursor-pointer w-full">
                      <SelectValue placeholder="Select Job Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumber">Plumber</SelectItem>
                      <SelectItem value="electrician">Electrician</SelectItem>
                      <SelectItem value="nurse">Nurse</SelectItem>
                      <SelectItem value="doctor">Doctor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <Label className="mb-2">Email</Label>
                  <Input
                    placeholder="Email Id"
                    className="bg-[#EBF5EC] cursor-pointer w-full"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <Label className="mb-2">Contact Number</Label>
                  <Input
                    type="number"
                    placeholder="Contact Number"
                    className="bg-[#EBF5EC] cursor-pointer w-full"
                  />
                </div>
                <div className="col-span-1">
                  <Label className="mb-2">Pin Code</Label>
                  <Input placeholder="PIN Code" className="bg-[#EBF5EC] cursor-pointer w-full" />
                </div>
                <div className="col-span-1">
                  <Label className="mb-2">State</Label>
                  <Input placeholder="State" className="bg-[#EBF5EC] cursor-pointer w-full" />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <Label className="mb-2">Country</Label>
                  <Input
                    placeholder="Country"
                    className="bg-[#EBF5EC] cursor-pointer w-full"
                  />
                </div>
                <div className="col-span-1">
                  <Label className="mb-2">Document Front</Label>
                  <Input
                    type="file"
                    className="bg-[#EBF5EC] cursor-pointer file:text-sm file:border-0 file:bg-white file:text-gray-600 w-full"
                  />
                </div>
                <div className="col-span-1">
                  <Label className="mb-2">Document Back</Label>
                  <Input
                    type="file"
                    className="bg-[#EBF5EC] cursor-pointer file:text-sm file:border-0 file:bg-white file:text-gray-600 w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="col-span-1 sm:col-span-2 mt-4 bg-[#689567] hover:bg-[#000] font-bold transition duration-300 active:scale-95 cursor-pointer text-white"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}