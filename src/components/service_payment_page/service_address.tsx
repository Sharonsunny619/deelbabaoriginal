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
  <div className="min-h-full bg-[#fffff5] flex justify-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl w-full flex flex-col gap-6 lg:gap-8 py-4 sm:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-9">
        {/* Address Selection Section */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Select Delivery Address</h1>
          <RadioGroup
            value={selectedAddress}
            onValueChange={setSelectedAddress}
            className="space-y-3 sm:space-y-4"
          >
            {addresses.map((address) => (
              <Card
                key={address.id}
                className="p-3 sm:p-4 bg-white border border-gray-200 rounded-xl shadow-none"
              >
                <div className="flex-1">
                  <div className="grid grid-cols-12 w-full gap-2 sm:gap-4 items-start">
                    <div className="col-span-1 pt-1">
                      <RadioGroupItem
                        value={address.id}
                        id={address.id}
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="col-span-10 sm:col-span-10">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <h2 className="text-base sm:text-lg font-semibold">
                          {address.firstName} {address.lastName}
                        </h2>
                        <div className="text-[10px] sm:text-[12px] px-2 py-1 text-white bg-[#689567] rounded-lg self-start">
                          {address.type}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                        {address.address}, {address.street}, {address.city},{" "}
                        {address.state}, {address.country} - {address.pincode}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-2">
                        Mobile:{" "}
                        <span className="font-bold">{address.mobile}</span>
                      </p>
                      {selectedAddress === address.id && (
                        <Button
                          onClick={() => handleEditClick(address)}
                          className="text-black bg-white hover:bg-white text-[10px] sm:text-[12px] px-2 py-1 border-[#689567] border-[1px] h-auto mt-2 transition duration-300 active:scale-90 font-bold hover:text-[#689567] cursor-pointer"
                        >
                          EDIT
                        </Button>
                      )}
                    </div>
                    <div className="col-span-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-red-500 cursor-pointer active:scale-90 transition duration-300 h-8 w-8 sm:h-10 sm:w-10"
                        onClick={() => handleDeleteAddress(address.id)}
                      >
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </RadioGroup>

          <Button
            onClick={handleAddNewClick}
            className="text-[#689567] cursor-pointer transition duration-300 active:scale-97 hover:bg-gray-100 border-[1px] bg-white py-3 sm:py-4 rounded-xl font-bold flex items-center justify-center w-full h-auto mt-4 text-base sm:text-lg"
          >
            + Add New Address
          </Button>
        </div>

        {/* Service Details Section */}
        <div className="w-full lg:mt-[52px]">
          <Card className="p-4 sm:p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex flex-col">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-2">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-base sm:text-[18px] font-bold">{service.name}</h2>
                <p className="text-xs sm:text-[14px] font-semibold text-gray-600 mb-1">
                  Nurse
                </p>

                <div className="flex items-center justify-center mb-2 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-sm sm:text-base">
                      {i < Math.round(service.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <p className="text-xs sm:text-sm text-black font-semibold">
                  {service.location}
                </p>
                <p className="text-xs sm:text-sm text-black font-semibold">
                  {service.kmAway} Km Away From Your Location
                </p>
                <p className="text-xs sm:text-sm text-black font-semibold">
                  {service.worksCompleted} Work Completed
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-2 text-black font-semibold text-xs sm:text-sm justify-center sm:justify-start">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span>📅</span>
                  <span>26 December 2024</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span>🕒</span>
                  <span>05 PM - 07 PM</span>
                </div>
              </div>

              <hr className="w-full my-3 sm:my-4 border-gray-300" />

              <div className="text-center sm:text-left w-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 justify-center sm:justify-start">
                  <h3 className="text-sm sm:text-base font-semibold">John Mathew</h3>
                  <span className="text-[10px] sm:text-[11px] text-white bg-[#689567] px-2 h-4 flex items-center justify-center rounded-full font-medium self-center sm:self-auto">
                    Home
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-snug px-2 sm:px-0">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed
                  Do Eiusmod Tempor Incididunt 674839
                </p>
                <p className="text-xs sm:text-sm text-gray-700 mt-2">
                  Mobile: <span className="font-semibold">1234567890</span>
                </p>
              </div>
            </div>

            <Button
              onClick={() => setOtpDialogOpen(true)}
              className="w-full h-10 sm:h-12 bg-[#689567] hover:bg-[#000] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white mt-4 sm:mt-6 rounded-lg py-3 text-base sm:text-lg"
            >
              Confirm
            </Button>
          </Card>
        </div>
      </div>

      {/* Address Modal Dialog */}
     
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-white min-w-[300px] md:min-w-[700px]">
            <AddressModal
              editAddress={editAddress}
              setEditAddress={setEditAddress}
              setIsDialogOpen={setIsDialogOpen}
              onSave={handleSaveAddress}
            />
          </DialogContent>
        </Dialog>

      {/* OTP Dialog */}
      <Dialog open={otpDialogOpen} onOpenChange={setOtpDialogOpen}>
        <DialogContent className="w-[95vw] max-w-[300px] md:max-w-[380px] p-0 rounded-2xl text-center bg-white mx-auto">
          <DialogHeader className="py-2 px-4 sm:px-8 bg-white shadow-lg rounded-t-2xl overflow-hidden">
            <Deelbaba
              colorA={"#689567"}
              colorB={"#A6E8A4"}
              width={"90"}
              height={"40"}
            />
          </DialogHeader>
          <div className="flex items-center justify-center flex-col px-4 sm:px-6">
            <div className="flex justify-center mt-4 mb-6 sm:mb-8">
              <Image src={phone} alt="OTP Icon" className="h-20 w-20 sm:h-24 sm:w-24" />
            </div>

            <p className="text-sm sm:text-[15px] font-medium px-2">
              Please Enter The OTP To Confirm Your Booking
            </p>
            <p className="text-xs sm:text-[13px] text-gray-500 mb-4 sm:mb-6">
              A OTP Has Been Sent To ******567
            </p>

            <div className="flex justify-center gap-2 sm:gap-3 mb-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <input
                  key={i}
                  type="password"
                  maxLength={1}
                  className="w-10 h-10 sm:w-12 sm:h-12 border rounded-md text-center text-lg sm:text-xl font-bold bg-gray-50 focus:outline-[#689567]"
                />
              ))}
            </div>

            <p className="text-[10px] sm:text-[12px] text-black font-bold mb-1 mt-3 sm:mt-5">
              Don&#39;t Receive OTP ?
            </p>
            <Button
              onClick={() => setIsBookingSuccess(true)}
              className="bg-[#689567] mb-16 sm:mb-32 cursor-pointer hover:bg-[#000] w-[120px] sm:w-[140px] text-white rounded-md text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 transition duration-300 active:scale-95"
            >
              Send Again
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </div>
) : (
  <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:py-16">
    <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-[160px] w-[160px] sm:h-[200px] sm:w-[200px] rounded-full bg-[#f3f8ea] flex items-center justify-center z-0" />
        <div className="absolute h-[136px] w-[136px] sm:h-[170px] sm:w-[170px] rounded-full bg-[#d3e4d0] flex items-center justify-center z-10" />
        <div className="absolute h-[112px] w-[112px] sm:h-[140px] sm:w-[140px] rounded-full bg-[#a8cda9] flex items-center justify-center z-20" />
        <div className="relative z-30 h-[88px] w-[88px] sm:h-[110px] sm:w-[110px] rounded-full bg-[#81B480] flex items-center justify-center">
          <Check className="h-[64px] w-[64px] sm:h-[80px] sm:w-[80px] text-white" strokeWidth={3} />
        </div>
      </div>

      <div className="text-center space-y-2 sm:space-y-3 mt-10">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#81B480]">
          Booking Successful
        </p>
        <p className="text-base sm:text-lg font-semibold text-[#000]">
          your booking ID is 81272167515
        </p>
      </div>

      <button
        onClick={() => router.push("/home")}
        className="px-4 sm:px-6 py-2 mt-2 sm:mt-3 font-semibold bg-[#81B480] text-white rounded-full text-sm hover:bg-black transition duration-300 active:scale-90 cursor-pointer"
      >
        Back To Home
      </button>
    </div>
  </div>
);
};

export default ServiceAddress;
