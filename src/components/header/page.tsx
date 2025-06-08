
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
  Menu,
  X,
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
    sidebar: false,
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
    setOpen((prev) => ({ ...prev, sidebar: false }));
  };

  const toggleSidebar = () => {
    setOpen((prev) => ({ ...prev, sidebar: !open.sidebar }));
  };

  return (
    <header className="fixed z-50 bg-[#fffef4] h-[80px] top-0 w-full px-4 xl:px-16 py-3 shadow-md flex items-center justify-between">
       <div className="flex items-center gap-3">
        <div
          className="flex items-center cursor-pointer md:block hidden"
          onClick={() => router.push("/home")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Deelbaba
            colorA={isHovered ? "#A6E8A4" : "#689567"}
            colorB={isHovered ? "#689567" : "#A6E8A4"}
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden transition active:scale-95 cursor-pointer"
          onClick={toggleSidebar}
        >
          {open.sidebar ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-8 w-8 text-gray-700" />
          )}
        </Button>
      </div>

       <div
        className={`fixed inset-0 bg-black/20 z-40 lg:hidden transition-opacity duration-300 ${
          open.sidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#fffef4] z-50 lg:hidden transform transition-transform duration-300 ${
          open.sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4   ">
           <div
            className="flex items-center cursor-pointer mb-6 md:hidden"
            onClick={() => {
              router.push("/home");
              setOpen((prev) => ({ ...prev, sidebar: false }));
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Deelbaba
              colorA={isHovered ? "#A6E8A4" : "#689567"}
              colorB={isHovered ? "#689567" : "#A6E8A4"}
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 mb-4">
            {tabs.map((tab) => (
              <Button
                key={tab.title}
                variant="ghost"
                onClick={() => handleTabClick(tab.url)}
                className={`rounded-full cursor-pointer px-6 py-2 font-semibold transition-colors duration-300 text-left ${
                  activeTab === tab.url
                    ? "bg-gradient-to-r from-black to-gray-500 text-white"
                    : "text-gray-800 bg-[#FFFEF4] hover:bg-[#FFFEF4] hover:text-gray-600"
                }`}
              >
                {tab.title}
              </Button>
            ))}
          </nav>

          {/* Cart, Wallet, User in Sidebar */}
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => {
                router.push("/cart");
                setOpen((prev) => ({ ...prev, sidebar: false }));
              }}
              variant="ghost"
              className="flex items-center gap-3 transition active:scale-95 cursor-pointer rounded-full"
            >
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
                {cartItemCount > 0 && (
                  <div className="absolute top-0 right-0 bg-[#689567] text-white text-[11px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItemCount}
                  </div>
                )}
              </div>
              <span className="text-gray-700 font-semibold">Cart</span>
            </Button>

            <Button
              onClick={() => {
                setOpen((prev) => ({ ...prev, wallet: true, sidebar: false }));
              }}
              variant="ghost"
              className="flex items-center gap-3 transition active:scale-95 cursor-pointer rounded-full"
            >
              <Wallet className="h-5 w-5 text-gray-700" />
              <span className="text-gray-700 font-semibold">Wallet</span>
            </Button>

            <Button
              onClick={() => {
                setOpen((prev) => ({ ...prev, user: true, sidebar: false }));
              }}
              variant="ghost"
              className="flex items-center gap-3 transition active:scale-95 cursor-pointer rounded-full"
            >
              <User className="h-5 w-5 text-gray-700" />
              <span className="text-gray-700 font-semibold">Profile</span>
            </Button>
          </div>
        </div>
      </div>

       <nav className="hidden lg:flex gap-2 border-[1px] border-[#000000] rounded-full p-1">
        {tabs.map((tab) => (
          <Button
            key={tab.title}
            variant="ghost"
            onClick={() => handleTabClick(tab.url)}
            className={`rounded-full cursor-pointer px-6 py-2 font-semibold transition-colors duration-300 ${
              activeTab === tab.url
                ? "hover:text-gray-300 bg-gradient-to-r from-black to-gray-500 text-white"
                : "text-gray-800 bg-[#FFFEF4] hover:bg-[#FFFEF4] transition hover:scale-108 hover:text-gray-600"
            }`}
          >
            {tab.title}
          </Button>
        ))}
      </nav>

      {/* User Actions for Desktop (md and above) */}
      <div className="hidden lg:flex items-center gap-3">
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
                <Button
                  onClick={() => router.push("/login")}
                  className="group font-[700] text-[14px] relative h-8 my-7 mx-7 overflow-hidden rounded-sm bg-[#689567] text-white px-9 py-4 cursor-pointer transition active:scale-95"
                >
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

      {/* Login Button for Mobile/Tablet (md and below) */}
      <div className="lg:hidden">
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