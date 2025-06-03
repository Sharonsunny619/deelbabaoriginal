import { HandHeart, PackageOpen, User } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function StatsSection() {
  return (
    <section className="py-10 bg-[#fffef4]">
      <div className="max-w-5xl mx-auto p-1 bg-white rounded-[30px] shadow-[inset_0px_0px_2px_rgba(0,0,0,0.2),0_4px_4px_rgba(0,0,0,0.15)]">
        <div className="bg-[#e3e2da] bg-opacity-70 rounded-[30px] shadow-[inset_0px_0px_2px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.15)] px-4 py-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Users */}
          <div className="flex flex-col items-center flex-1 border-r  border-gray-400 last:border-none">
            <div className="flex items-center space-x-2">
              <div className="rounded-full h-[52px] w-[52px] mt-[4px] bg-[#bdccbe] flex items-center justify-center">
                {" "}
                <User className="text-[#255823] text-lg" />
              </div>
              <div className="flex flex-col ">
                <span className="text-[30px] font-bold text-[#616161] -mb-1">
                  500+
                </span>
                <span className="text-sm font-semibold text-[#616161] -mt-1">
                  Users
                </span>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="flex flex-col items-center flex-1 border-r border-gray-400 last:border-none">
            <div className="flex items-center space-x-2">
              <div className="rounded-full h-[52px] w-[52px] mt-[4px] bg-[#bdccbe] flex items-center justify-center">
                {" "}
                <FaMapMarkerAlt className="text-[#255823] text-lg" />
              </div>
              <div className="flex flex-col ">
                <span className="text-[30px] font-bold text-[#616161] -mb-1">
                  50+
                </span>
                <span className="text-sm font-semibold text-[#616161] -mt-1">
                  Locations
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center flex-1 border-r border-gray-400 last:border-none">
            <div className="flex items-center space-x-2">
              <div className="rounded-full h-[52px] w-[52px] mt-[4px] bg-[#bdccbe] flex items-center justify-center">
                {" "}
                <HandHeart className="text-[#255823] text-lg" />
              </div>
              <div className="flex flex-col ">
                <span className="text-[30px] font-bold text-[#616161] -mb-1">
                  40+
                </span>
                <span className="text-sm font-semibold text-[#616161] -mt-1">
                  Services
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col items-center flex-1 border-r border-gray-400 last:border-none">
            <div className="flex items-center space-x-2">
              <div className="rounded-full h-[52px] w-[52px] mt-[4px] bg-[#bdccbe] flex items-center justify-center">
                {" "}
                <PackageOpen className="text-[#255823] text-lg" />
              </div>
              <div className="flex flex-col ">
                <span className="text-[30px] font-bold text-[#616161] -mb-1">
                  1000+
                </span>
                <span className="text-sm font-semibold text-[#616161] -mt-1">
                  Products
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
