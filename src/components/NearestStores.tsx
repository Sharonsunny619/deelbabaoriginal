// components/NearestStores.tsx
import Image from "next/image";

const stores = [
    {
        name: "Adidas",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        offer: "Flat 50% Off",
        valid: "Offer Valid Till March*",
    },
    {
        name: "Kappa",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        offer: "Flat 50% Off",
        valid: "Offer Valid Till March*",
    },
    {
        name: "Puma",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        offer: "Flat 50% Off",
        valid: "Offer Valid Till March*",
    },
    {
        name: "The North Face",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        offer: "Flat 50% Off",
        valid: "Offer Valid Till March*",
    },
    {
        name: "Reebok",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        offer: "Flat 50% Off",
        valid: "Offer Valid Till March*",
    },
    {
        name: "Reebok",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        offer: "Flat 50% Off",
        valid: "Offer Valid Till March*",
    },
    {
        name: "Reebok",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        offer: "Flat 50% Off",
        valid: "Offer Valid Till March*",
    },
    {
        name: "Reebok",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        offer: "Flat 50% Off",
        valid: "Offer Valid Till March*",
    },
    {
        name: "Reebok",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        offer: "Flat 50% Off",
        valid: "Offer Valid Till March*",
    },
];

const NearestStores = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold mb-10 text-black flex items-center gap-4">
                Nearest <span className="text-[#689567]">Store</span>
                <span className="flex-1 h-px bg-black"></span>
            </h2>

            <div
                className="overflow-x-auto"
                style={{
                    scrollbarWidth: "none", // Firefox
                    msOverflowStyle: "none", // Internet Explorer/Edge
                }}
            >
                <div className="flex gap-4 pb-4">
                    {stores.map((store, index) => (
                        <div
                            key={index}
                            className="min-w-[220px]  rounded-2xl shadow p-4 text-center flex-shrink-0"
                            style={{
                                background:
                                    "radial-gradient(208.91% 208.91% at 71.52% -22.74%, #FFFFFF 0%, #DFF5A2 100%)",
                            }}
                        >
                            <div className="flex justify-center">
                                <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-2">
                                    <Image
                                        src={store.logo}
                                        alt={store.name}
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <p className="font-medium text-2xl text-black">
                                {store.name}
                            </p>
                            <p className="text-xl font-bold mt-2 text-black">
                                {store.offer}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                {store.valid}
                            </p>
                            <button className="mt-4 w-full bg-[#8DC38C] text-white py-2 rounded-[15px] hover:bg-[#689567] transition flex items-center justify-center gap-2">
                                Visit Store
                                <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NearestStores;
