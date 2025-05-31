import { Bell, CalendarCheck, Gift, Heart, Package, Wallet } from "lucide-react";

export const tabs = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Shop",
      url: "/shop",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  export const profileMenuItems = [
    {
      icon: <Package className="h-5 w-5 text-[#689567]" />,
      label: "Orders",
    },
    {
      icon: <CalendarCheck className="h-5 w-5 text-[#689567]" />,
      label: "Bookings",
    },
    {
      icon: <Heart className="h-5 w-5 text-[#689567]" />,
      label: "Wish List",
    },
    {
      icon: <Bell className="h-5 w-5 text-[#689567]" />,
      label: "Notification",
    },
    {
      icon: <Gift className="h-5 w-5 text-[#689567]" />,
      label: "Gift Card",
    },
    {
      icon: <Wallet className="h-5 w-5 text-[#689567]" />,
      label: "Wallet",
    },
  ];