import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Trash2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ShoeImage from "../home/images/product.png";
import AddressModal from "./address_modal";
import { RootState } from "@/app/lib/store";
 
interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

interface Address {
  id: string;
  firstName: string;
  lastName: string;
  pincode: string;
  street: string;
  type: string;
  city: string;
  state: string;
  country: string;
  address: string;
  mobile: string;
}

interface AddressProps {
  onContinue: () => void;
}

const Address: React.FC<AddressProps> = ({ onContinue }) => {
   const cartItems = useSelector((state: RootState) => state.cart.items);

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      firstName: "John",
      lastName: "Mathew",
      pincode: "682030",
      street: "MG Road",
      type: "Home",
      city: "Kochi",
      state: "Kerala",
      country: "India",
      address:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua",
      mobile: "1249567890",
    },
    {
      id: "2",
      firstName: "John",
      lastName: "Mathew",
      pincode: "682030",
      street: "MG Road",
      type: "Home",
      city: "Kochi",
      state: "Kerala",
      country: "India",
      address:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua",
      mobile: "1249567890",
    },
    {
      id: "3",
      firstName: "John",
      lastName: "Mathew",
      pincode: "682030",
      street: "MG Road",
      type: "Home",
      city: "Kochi",
      state: "Kerala",
      country: "India",
      address:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua",
      mobile: "1249567890",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState("1");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editAddress, setEditAddress] = useState<Address>({
    id: "",
    firstName: "",
    lastName: "",
    pincode: "",
    street: "",
    type: "",
    city: "",
    state: "",
    country: "",
    address: "",
    mobile: "",
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = cartItems.length > 0 ? 2100 : 0;  
  const delivery = 0;
  const total = subtotal - discount + delivery;

   const currentDate = new Date("2025-06-06");
  const deliveryDate = new Date(currentDate);
  deliveryDate.setDate(currentDate.getDate() + 5);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "2-digit",
  };
  const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-US", options);

  const handleEditClick = (address: Address) => {
    setEditAddress(address);
    setIsDialogOpen(true);
  };

  const handleAddNewClick = () => {
    setEditAddress({
      id: `${Date.now()}`, // Simple unique ID generation
      firstName: "",
      lastName: "",
      pincode: "",
      street: "",
      type: "",
      city: "",
      state: "",
      country: "",
      address: "",
      mobile: "",
    });
    setIsDialogOpen(true);
  };

  const handleDeleteAddress = (id: string) => {
    setAddresses(addresses.filter((address) => address.id !== id));
    if (selectedAddress === id) {
      setSelectedAddress(addresses[0]?.id || "");
    }
  };

  const handleSaveAddress = (newAddress: Address) => {
    if (addresses.some((addr) => addr.id === newAddress.id)) {
      // Update existing address
      setAddresses(
        addresses.map((addr) =>
          addr.id === newAddress.id ? newAddress : addr
        )
      );
    } else {
      // Add new address
      setAddresses([...addresses, newAddress]);
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-full bg-[#fffff5] flex justify-center px-4">
      <div className="max-w-8/12 w-full flex flex-col md:flex-col gap-8">
        <div className="grid grid-cols-3 gap-9">
          <div className="col-span-2">
            <h1 className="text-3xl font-bold mb-4">Select Delivery Address</h1>
            <RadioGroup
              value={selectedAddress}
              onValueChange={setSelectedAddress}
              className="space-y-4"
            >
              {addresses.map((address) => (
                <Card
                  key={address.id}
                  className="p-4 bg-white border border-gray-200 rounded-xl flex items-start gap-4 shadow-none"
                >
                  <div className="flex-1">
                    <div className="grid grid-cols-12 w-full gap-4 items-center">
                      <RadioGroupItem
                        value={address.id}
                        id={address.id}
                        className="cursor-pointer"
                      />
                      <div className="col-span-10">
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg font-semibold">
                            {address.firstName} {address.lastName}
                          </h2>
                          <div className="text-[12px] px-2 text-white bg-[#689567] rounded-lg">
                            {address.type}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {address.address}, {address.street}, {address.city},{" "}
                          {address.state}, {address.country} - {address.pincode}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          Mobile:{" "}
                          <span className="font-bold">{address.mobile}</span>
                        </p>
                        {selectedAddress === address.id && (
                          <Button
                            onClick={() => handleEditClick(address)}
                            className="text-black bg-white hover:bg-white text-[12px] px-2 py-1 border-[#689567] border-[1px] h-auto mt-2 transition duration-300 active:scale-90 font-bold hover:text-[#689567] cursor-pointer"
                          >
                            EDIT
                          </Button>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-red-500 cursor-pointer active:scale-90 transition duration-300"
                        onClick={() => handleDeleteAddress(address.id)}
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </RadioGroup>

            <Button
              onClick={handleAddNewClick}
              className="text-[#689567] cursor-pointer transition duration-300 active:scale-97 hover:bg-gray-100 border-[1px] bg-white py-4 rounded-xl font-bold flex items-start justify-start w-full h-auto mt-4 text-lg"
            >
              + Add New Address
            </Button>
          </div>

          <div className="w-full mt-[52px]">
            <Card className="p-4 bg-white border border-gray-200 rounded-xl shadow-none">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty.</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="pastureland-items-start gap-4 mb-4"
                    >
                      <div className="flex gap-5">
                        <div className="w-20 h-20">
                          <Image
                            src={item.image || ShoeImage}  
                            alt={item.name}
                            width={80}
                            height={80}
                            className="object-cover rounded-md w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h2 className="text-lg font-semibold">{item.name}</h2>
                          <p className="text-[13px] text-gray-500">
                            {item?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor "}
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-[16px] font-semibold uppercase text-[#108F0D] mt-1">
                          Expected By: {formattedDeliveryDate}
                        </p>
                      </div>
                    </div>
                  ))}

                  <h2 className="text-xl font-bold">PRICE DETAILS</h2>
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

                  <Button
                    onClick={onContinue}
                    className="w-full bg-[#689567] hover:bg-black transition duration-300 active:scale-90 cursor-pointer font-bold text-white"
                  >
                    CONTINUE
                  </Button>
                </>
              )}
            </Card>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-white min-w-[700px]">
            <AddressModal
              editAddress={editAddress}
              setEditAddress={setEditAddress}
              setIsDialogOpen={setIsDialogOpen}
              onSave={handleSaveAddress}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Address;