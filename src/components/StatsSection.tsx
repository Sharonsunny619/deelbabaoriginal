// components/StatsSection.tsx
import { FaUsers, FaMapMarkerAlt, FaServicestack, FaBox } from "react-icons/fa";

export default function StatsSection() {
    return (

        <section className="py-8">
          <div className="max-w-3xl rounded-[35px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-300 text-center  bg-opacity-60" style={{ backgroundColor: "rgba(160, 160, 160, 0.08)" }}>
            
            {/* Users */}
            <div className="py-6 px-2 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-green-600">500+</h2>
              <div className="flex items-center mt-1 text-sm text-[#616161]">
                <FaUsers className="mr-1" />
                Users
              </div>
            </div>
        
            {/* Locations */}
            <div className="py-6 px-2 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-green-600">50+</h2>
              <div className="flex items-center mt-1 text-sm text-[#616161]">
                <FaMapMarkerAlt className="mr-1" />
                Locations
              </div>
            </div>
        
            {/* Services */}
            <div className="py-6 px-2 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-green-600">40+</h2>
              <div className="flex items-center mt-1 text-sm text-[#616161]">
                <FaServicestack className="mr-1" />
                Services
              </div>
            </div>
        
            {/* Products */}
            <div className="py-6 px-2 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-green-600">1000+</h2>
              <div className="flex items-center mt-1 text-sm text-[#616161]">
                <FaBox className="mr-1" />
                Products
              </div>
            </div>
        
          </div>
        </section>
        
    );
  }
  