import image from "../../../images/Group 302.png"
export default function HorizontalImageScroller() {
    const images = [
        image.src,
        image.src,
        image.src,
        image.src,
    ];
  
    return (
      <div className="overflow-x-auto whitespace-nowrap p-4 bg-[#fdfdf6] rounded-xl"  style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // Internet Explorer/Edge
    }}>
        <div className="flex space-x-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md  min-w-[750px]  flex items-center justify-center"
            >
              <img src={src} alt={`item-${idx}`} className="h-40 object-contain" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  