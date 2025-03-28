"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, LayoutGrid, Settings, Database, Code, ChevronDown, ChevronRight } from "lucide-react";
import CommonButton from "./Button";
import { menuItems } from "src/constants/naviation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (id) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  return (
    <nav className="bg-gradient-to-r from-[#12002b] to-[#1a0033] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center w-1/2 justify-around space-x-8">
          <Link href="/">
            <div className="text-white font-bold text-xl flex items-center">
              <span className="text-blue-400">PreCall</span>.Ai
            </div>
            <p className="text-[10px] text-gray-400">Quick | Quality</p>
          </Link>

          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.id} className="relative group">
                <Link href={item.url} className="hover:text-gray-400 text-sm flex items-center space-x-1">
                  <span>{item.text}</span>
                  {item.hasChildren ? <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" /> : " "}
                </Link>
                {item.hasChildren && (
                  <div className="absolute left-0 bg-[#11121c] min-w-[600px] text-white rounded-2xl shadow-lg p-4 hidden group-hover:flex flex-col">
                    <h3 className="text-sm text-gray-400 mb-3">AI Product Offer by QCall.ai</h3>

                    {/* Grid Layout for Submenu */}
                    <div className="grid grid-cols-2 gap-1">
                      {item.subMenu.map((sub, index) => (
                        <div key={sub.url} className="flex items-center justify-between border rounded-2xl w-60 bg-[#171825] pl-2 pr-2 hover:bg-gray-800">
                          <Link href={sub.url} className="flex items-center space-x-3 p-2 rounded-2xl  transition">
                            {index % 4 === 0 && <LayoutGrid size={20} />}
                            {index % 4 === 1 && <Settings size={20} />}
                            {index % 4 === 2 && <Database size={20} />}
                            {index % 4 === 3 && <Code size={20} />}

                            <div>
                              <p className="text-sm">{sub.text}</p>
                              <p className="text-xs text-gray-400">{sub.sortDec}</p>
                            </div>
                          </Link>
                          <div className="p1 rounded-full border border-gray-500">
                            <ChevronRight />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <CommonButton className="text-white bg-gradient-to-r from-purple-500 to-purple-700 text-sm px-4 py-2 rounded-full" title="Sign up" />
          <CommonButton className="text-black bg-white px-4 py-2 rounded-full" title="Log in" />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#12002b] py-4 space-y-4">
          {menuItems.map((item) => (
            <div key={item.id} className="w-full text-center">
              <button className="w-full text-sm py-2 hover:text-gray-400" onClick={() => item.hasChildren && toggleSubMenu(item.id)}>
                {item.text}
              </button>
              {item.hasChildren && openSubMenu === item.id && (
                <ul className="bg-[#1a0033] text-white py-2">
                  {item.subMenu.map((sub) => (
                    <li key={sub.url} className="py-2">
                      <Link href={sub.url} className="hover:text-gray-400">
                        {sub.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <CommonButton className="text-white bg-gradient-to-r from-purple-500 to-purple-700 text-sm px-4 py-2 rounded-full" title="Sign up" />
          <CommonButton className="text-black bg-white px-4 py-2 rounded-full" title="Log in" />
        </div>
      )}
    </nav>
  );
}



