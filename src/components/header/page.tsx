"use client";
import React, { useState, useEffect } from "react";
import Deelbaba from "./images/deelbaba";
import { Button } from "@/components/ui/button";
import {
  ArrowRightLeft,
  ChevronRight,
  ShoppingCart,
  User,
  Wallet,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";
import { profileMenuItems, tabs } from "./data";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";

export default function Header() {
  const [activeTab, setActiveTab] = useState("/");
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = React.useState({
    wallet: false,
    user: false,
  });
  const router = useRouter();
  const pathname = usePathname();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  useEffect(() => {
    const basePath = "/" + pathname.split("/")[1];
    const currentTab = tabs.find((tab) => tab.url === basePath);
    if (currentTab) {
      setActiveTab(currentTab.url);
    } else {
      setActiveTab("/");
    }
  }, [pathname]);

  const handleTabClick = (tabUrl: string) => {
    setActiveTab(tabUrl);
    router.push(tabUrl);
  };

  return (
    <header className="fixed z-50 bg-[#fffef4] h-[80px] top-0 w-full px-16 py-3 shadow-md flex items-center justify-between">
      {/* Logo Section */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => router.push("/home")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Deelbaba
          colorA={isHovered ? "#A6E8A4" : "#689567"}
          colorB={isHovered ? "#689567" : "#A6E8A4"}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-2 border-[1px] border-[#000000] rounded-full p-1">
        {tabs.map((tab) => (
          <Button
            key={tab.title}
            variant="ghost"
            onClick={() => handleTabClick(tab.url)}
            className={`rounded-full cursor-pointer px-6 py-2 font-semibold transition-colors duration-300 ${
              activeTab === tab.url
                ? "hover:text-gray-300 bg-gradient-to-r from-black to-gray-500 text-white"
                : "text-gray-800 bg-[#FFFEF4] hover:bg-[#FFFEF4] transition hover:scale-110 hover:text-gray-600"
            }`}
          >
            {tab.title}
          </Button>
        ))}
      </nav>

      {/* User Actions */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Button
            onClick={() => router.push("/cart")}
            variant="ghost"
            size="icon"
            className="transition active:scale-95 cursor-pointer rounded-full"
          >
            <ShoppingCart className="h-5 w-5 text-gray-700" />
          </Button>
          {cartItemCount > 0 && (
            <div className="absolute top-0 right-0 bg-[#689567] text-white text-[11px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
              {cartItemCount}
            </div>
          )}
        </div>

        <Popover
          open={open.wallet}
          onOpenChange={() => {
            setOpen((prev) => ({ ...prev, wallet: !open.wallet }));
          }}
        >
          <PopoverTrigger asChild>
            <Button className="bg-[#fffef4] transition active:scale-95 cursor-pointer rounded-full h-10 w-10 hover:bg-gray-100 shadow-none">
              <Wallet className="h-5 w-5 text-gray-700" />
            </Button>
          </PopoverTrigger>
          {open.wallet && <div className="fixed inset-0 bg-black/20 z-40" />}
          <PopoverContent className="relative w-[330px] p-0 bg-white rounded-3xl shadow-lg border-none">
            <div className="flex flex-col items-center text-center gap-4 z-10">
              <div className="rounded-t-2xl shadow-[0_4px_5px_-1px_rgba(0,0,0,0.1)] gap-5 w-full py-7 flex items-center justify-center">
                <Wallet className="h-8 w-8 text-[#689567]" />
                <h2 className="text-[14px] font-semibold">Wallet</h2>
              </div>

              <div className="flex flex-col items-start py-2">
                <div className="text-[12px] text-[#212121] -mb-2">Balance</div>
                <div className="text-[32px] font-[590] text-[#018F07] -mb-2">
                  ₹5100
                </div>
              </div>

              <div className="w-full text-left px-8">
                <label className="block text-sm font-[560] text-[#212121] mb-1">
                  Top Up Your Wallet
                </label>
                <Input
                  type="number"
                  placeholder="Enter Amount"
                  className="w-full border border-[#AECBAE] bg-green-50 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400"
                />
                <p className="text-[9px] text-gray-400 mt-1">
                  Payment can be made comfortably without fear of bank errors
                </p>
              </div>

              <Button className="w-[266px] transition active:scale-95 cursor-pointer text-white rounded-xl py-2 text-sm font-[590] bg-[#5a8159] hover:bg-[#699568]">
                Top Up
              </Button>
              <div className="h-[1px] bg-gray-100" />

              <Button
                variant="outline"
                className="w-[266px] mb-9 transition active:scale-95 border border-[#AECBAE] text-[#689567] flex items-center justify-between rounded-md px-4 py-2 text-sm hover:bg-green-50"
              >
                <ArrowRightLeft />
                <span>Wallet Transaction History</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Popover
          open={open.user}
          onOpenChange={() => {
            setOpen((prev) => ({ ...prev, user: !open.user }));
          }}
        >
          <PopoverTrigger asChild>
            <Button className="bg-[#fffef4] transition active:scale-95 cursor-pointer rounded-full h-10 w-10 hover:bg-gray-100 shadow-none">
              <User className="h-6 w-6 text-gray-700" />
            </Button>
          </PopoverTrigger>
          {open.user && <div className="fixed inset-0 bg-black/20 z-40" />}

          <PopoverContent className="w-[300px] bg-white rounded-3xl shadow-lg border-none p-0">
            <div className="flex flex-col gap-2">
              <div className="shadow-[0_4px_5px_-1px_rgba(0,0,0,0.1)] rounded-t-2xl flex items-center justify-center">
                <Button className="group font-[700] text-[14px] relative h-8 my-7 mx-7 overflow-hidden rounded-sm bg-[#689567] text-white px-9 py-4 cursor-pointer transition active:scale-95">
                  Login/Register
                </Button>
              </div>
              <div className="-mt-3 -mb-1 p-3">
                {profileMenuItems.map((item, index) => (
                  <a
                    key={index}
                    className="w-full gap-2 text-[#689567] font-medium px-3 cursor-pointer rounded-md"
                  >
                    <div className="flex px-7 items-start justify-start gap-3">
                      <div className="mt-[1px]">{item.icon}</div>
                      <div className="text-black font-[570] hover:text-[#689567] text-[14px] transition hover:scale-110">
                        {item.label}
                      </div>
                    </div>
                    {index !== profileMenuItems.length - 1 && (
                      <div className="h-[1px] bg-gray-100 mx-14 mt-[12px] -mb-2" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Button
          onClick={() => router.push("/login")}
          className="group relative h-10 overflow-hidden rounded-lg bg-black text-white px-6 py-2 cursor-pointer transition active:scale-95"
        >
          <span className="relative z-10 font-[600]">Login/Register</span>
          <span className="absolute inset-0 overflow-hidden rounded-lg">
            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#689567] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </Button>
      </div>
    </header>
  );
}
