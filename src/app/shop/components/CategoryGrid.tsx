import fashion from "../../../images/product.png"
export default function CategoryGrid() {
  const categories = [
    { name: "Fashion", image: fashion.src },
    { name: "Mobiles", image: fashion.src },
    { name: "Electronics", image: fashion.src },
    { name: "Appliances", image: fashion.src },
    { name: "Beauty & Health", image: fashion.src },
    { name: "Hardwares", image: fashion.src },
    { name: "Spare Parts", image: fashion.src },
  ];

  return (
    <div className="bg-[#fdfdf6] py-6 px-2">
      <div className="flex justify-between items-center bg-white rounded-2xl shadow-sm overflow-hidden text-black">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center flex-1 py-4 hover:bg-gray-50 transition"
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
