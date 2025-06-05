import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
 import { Trash2, MapPin } from "lucide-react";

 import ShoeImage from "../home/images/product.png";  

 const cartItems = [
  {
    id: 1,
    name: "Ultraboost 1.0 Shoes",
    description: "Lorem Ipsum Color Support, Consecutive Adipiscing Elit",
    price: 7500,
    quantity: 1,
    image: ShoeImage,
  },
  {
    id: 2,
    name: "Ultraboost 1.0 Shoes",
    description: "Lorem Ipsum Color Support, Consecutive Adipiscing Elit",
    price: 7500,
    quantity: 1,
    image: ShoeImage,
  },
];

 const addresses = [
  {
    id: "1",
    name: "John Mathew",
    type: "Home",
    address:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua",
    mobile: "1249567890",
  },
  {
    id: "2",
    name: "John Mathew",
    type: "Home",
    address:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua",
    mobile: "1249567890",
  },
  {
    id: "3",
    name: "John Mathew",
    type: "Home",
    address:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua",
    mobile: "1249567890",
  },
];

const Address: React.FC = () => {
   const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 2100;
  const delivery = 0;
  const total = subtotal - discount + delivery;

  return (
    <div className="min-h-full bg-[#fffff5] flex justify-center  px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8">
        {/* Left Section: Address Selection */}
        <div className="flex-1">
          {/* Stepper */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-500 mt-1">
                  BAG
                </span>
              </div>
              <div className="h-1 w-20 bg-gray-300"></div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-green-600 mt-1">
                  ADDRESS
                </span>
              </div>
              <div className="h-1 w-20 bg-gray-300"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-500 mt-1">
                PAYMENT
              </span>
            </div>
          </div>

          {/* Address Selection */}
          <h1 className="text-2xl font-bold mb-4">Select Delivery Address</h1>
          <RadioGroup defaultValue="1" className="space-y-4">
            {addresses.map((address) => (
              <Card
                key={address.id}
                className="p-4 bg-white border border-gray-200 rounded-lg flex items-start gap-4"
              >
                <RadioGroupItem value={address.id} id={address.id} />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold">
                          {address.name}
                        </h2>
                        <span className="text-sm text-gray-500">
                          ({address.type})
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {address.address}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Mobile: {address.mobile}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-500 hover:text-red-500"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                  <Button
                    variant="link"
                    className="text-green-600 p-0 h-auto mt-2"
                  >
                    EDIT
                  </Button>
                </div>
              </Card>
            ))}
          </RadioGroup>

          {/* Add New Address */}
          <Button
            variant="link"
            className="text-green-600 p-0 h-auto mt-4 text-lg"
          >
            + Add New
          </Button>
        </div>

        {/* Right Section: Order Summary */}
        <div className="w-full md:w-80">
          <Card className="p-4 bg-white border border-gray-200 rounded-lg">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover rounded-md w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Expected By: Mon, Jan 01
                  </p>
                </div>
              </div>
            ))}

            {/* Price Details */}
            <h2 className="text-xl font-bold mb-4">PRICE DETAILS</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Amount ({cartItems.length} items)</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-₹{discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                <span>GRAND TOTAL</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Continue Button */}
            <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
              CONTINUE
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Address;