import { categories } from "./data";

export default function CategoryTab() {
 

  return (
    <div className="bg-[#fdfdf6] py-6 px-2">
      <div className="flex justify-between items-center bg-white rounded-2xl shadow-sm overflow-hidden text-black">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col hover:bg-gray-200 hover:scale-110 cursor-pointer items-center justify-center flex-1 py-4  transition px-0"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-semibold text-center">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
