import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import AddressModal from "@/components/payment_page/address_modal";
import phone from "./images/f1ae7a193eff5391eb7a6a5cc6cb06bee507644d.png";
import Image from "next/image";
import Deelbaba from "../header/images/deelbaba";
import { useRouter } from "next/navigation";
const ServiceAddress: React.FC<ServiceAddressProps> = ({ service }) => {
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
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const router = useRouter();

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

  const handleEditClick = (address: Address) => {
    setEditAddress(address);
    setIsDialogOpen(true);
  };

  const handleAddNewClick = () => {
    setEditAddress({
      id: `${Date.now()}`,
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
      setAddresses(
        addresses.map((addr) => (addr.id === newAddress.id ? newAddress : addr))
      );
    } else {
      setAddresses([...addresses, newAddress]);
    }
    setIsDialogOpen(false);
  };

  return isBookingSuccess === false ? (
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
            <Card className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex flex-col ">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-2 ">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-[18px] font-bold">{service.name}</h2>
                  <p className="text-[14px] font-semibold text-gray-600 mb-1">
                    Nurse
                  </p>

                  <div className="flex items-center justify-center mb-2 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>
                        {i < Math.round(service.rating) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm  text-black font-semibold">
                  {service.location}
                </p>
                <p className="text-sm  text-black font-semibold">
                  {service.kmAway} Km Away From Your Location
                </p>
                <p className="text-sm  text-black font-semibold">
                  {service.worksCompleted} Work Completed
                </p>

                <div className="flex items-center gap-2 mt-2 text-black font-semibold text-sm">
                  <span>📅</span>
                  <span>26 December 2024</span>
                </div>
                <div className="flex items-center gap-2 text-black font-semibold text-sm">
                  <span>🕒</span>
                  <span>05 PM - 07 PM</span>
                </div>

                <hr className="w-full my-4 border-gray-300" />

                <div className="text-left w-full">
                  <div className="flex items-center gap-6">
                    <h3 className="text-base font-semibold">John Mathew</h3>
                    <span className="text-[11px] text-white bg-[#689567] px-2 h-4 flex items-center justify-center rounded-full text-xs font-medium ml-2">
                      Home
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 leading-snug">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed
                    Do Eiusmod Tempor Incididunt 674839
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    Mobile: <span className="font-semibold">1234567890</span>
                  </p>
                </div>
              </div>

              <Button
                onClick={() => setOtpDialogOpen(true)}
                className="w-full h-10 bg-[#689567] hover:bg-[#000] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white mt-6 rounded-lg py-3 text-lg"
              >
                Confirm
              </Button>
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

        <Dialog open={otpDialogOpen} onOpenChange={setOtpDialogOpen}>
          <DialogContent className="w-[380px]   p-0 rounded-2xl  text-center -mb-4 bg-white">
            <DialogHeader className="py-2 px-8 bg-white shadow-lg rounded-t-2xl overflow-hidden">
              <Deelbaba
                colorA={"#689567"}
                colorB={"#A6E8A4"}
                width={"90"}
                height={"40"}
              />
            </DialogHeader>
            <div className="flex items-center justify-center flex-col ">
              <div className="flex justify-center mt-4 mb-8">
                <Image src={phone} alt="OTP Icon" className="h-24 w-24" />
              </div>

              <p className="text-[15px] font-medium ">
                Please Enter The OTP To Confirm Your Booking
              </p>
              <p className="text-[13px] text-gray-500 mb-6">
                A OTP Has Been Sent To ******567
              </p>

              <div className="flex justify-center gap-3 mb-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <input
                    key={i}
                    type="password"
                    maxLength={1}
                    className="w-12 h-12 border rounded-md text-center text-xl font-bold bg-gray-50 focus:outline-[#689567]"
                  />
                ))}
              </div>

              <p className="text-[12px] text-black font-bold mb-1 mt-5">
                Don&#39;t Receive OTP ?
              </p>
              <Button
                onClick={() => setIsBookingSuccess(true)}
                className="bg-[#689567] mb-32 cursor-pointer hover:bg-[#000] w-[140px] text-white rounded-md text-sm font-semibold px-6 py-2 transition duration-300 active:scale-95"
              >
                Send Again
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center mt-[200px]  space-y-6">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-[200px] w-[200px] rounded-full bg-[#f3f8ea] flex items-center justify-center z-0" />
        <div className="absolute h-[170px] w-[170px] rounded-full bg-[#d3e4d0] flex items-center justify-center z-10" />
        <div className="absolute h-[140px] w-[140px] rounded-full bg-[#a8cda9] flex items-center justify-center z-20" />
        <div className="relative z-30 h-[110px] w-[110px] rounded-full bg-[#81B480] flex items-center justify-center">
          <Check className="h-[80px] w-[80px] text-white" strokeWidth={3} />
        </div>
      </div>

      <p className="text-4xl font-semibold text-[#81B480] mt-10">
        Booking Successful
      </p>
      <p className="text-lg font-semibold text-[#000] -mt-3">
        your booking ID is 81272167515
      </p>

      <button
        onClick={() => router.push("/home")}
        className="px-6 py-2 mt-3 font-semibold bg-[#81B480] text-white rounded-full text-sm hover:bg-black transition duration-300 active:scale-90 cursor-pointer"
      >
        Back To Home
      </button>
    </div>
  );
};

export default ServiceAddress;
