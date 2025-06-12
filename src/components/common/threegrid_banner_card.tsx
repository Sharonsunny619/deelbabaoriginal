import Image from "next/image";

export const BannerCard = ({ item }) => {
  return (
    <div className="relative bg-white rounded-none shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)] w-full aspect-[16/9] overflow-hidden">
      <Image
        src={item.image}
        alt={item.name}
        width={640}
        height={360}
        className="object-contain w-full h-full"
      />
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 flex flex-col justify-end items-center p-3 sm:p-4 z-10">
        <button className="mt-2 bg-[#000] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-2xl text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-1.5 hover:opacity-70 w-fit">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export const BannerSection = ({ items }) => {
  return (
    <div className="col-span-full bg-white p-0 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4">
        {items.map((item) => (
          <BannerCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};