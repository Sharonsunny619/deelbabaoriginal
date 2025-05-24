"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className="bg-white sticky top-0 z-50"
            style={{ boxShadow: "0px 0px 0px 1px rgb(234, 231, 231)" }}
        >
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-green-600">
                    Just<span className="text-gray-900">Local</span>
                </Link>
                {/* Desktop Navigation */}
                <nav
                    className="hidden md:flex space-x-8 ml-32 border px-2 py-2 rounded-[30px]"
                    style={{ border: "1px solid rgba(0, 0, 0, 1)" }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium px-6 py-2 rounded-[30px] transition-all duration-300 ${
                                pathname === link.href
                                    ? "text-white bg-[linear-gradient(to_right,rgba(33,33,33,0.98),rgba(33,33,33,0.8))]"
                                    : "text-black"
                            }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                {/* Actions */}
                <div className="hidden md:flex items-center space-x-8 gap-2">
                    <button className="text-gray-600 hover:text-green-600 flex flex-col items-center">
                        <FaWallet className="text-3xl text-[rgba(33,33,33,1)]" />
                    </button>
                    <button className="text-[rgba(33,33,33,1)] hover:text-green-600 flex flex-col items-center">
                        <CgProfile className="text-3xl text-[rgba(33,33,33,1)]" />
                    </button>
                    <button className="bg-[rgba(33,33,33,1)] text-white px-4 py-2 rounded-[10px] text-sm font-medium hover:bg-green-600">
                        Login/Register
                    </button>
                </div>
                {/* Hamburger Menu Button */}
                <button
                    className="md:hidden text-3xl text-gray-800"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>
            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-6 space-y-4">
                    <nav className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium ${
                                    pathname === link.href
                                        ? "text-green-600 font-semibold"
                                        : "text-gray-800"
                                }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-col space-y-4 mt-4">
                        <button className="bg-green-700 text-white px-4 py-2 rounded-[10px] text-sm font-medium hover:bg-green-600">
                            Login/Register
                        </button>
                        <button className="text-gray-700 hover:text-green-600 flex items-center space-x-2">
                            <FaWallet className="text-xl text-black" />
                            <span>Wallet</span>
                        </button>
                        <button className="text-gray-700 hover:text-green-600 flex items-center space-x-2">
                            <CgProfile className="text-xl text-black" />
                            <span>Profile</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
