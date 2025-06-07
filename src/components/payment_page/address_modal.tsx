import React from 'react';
import { DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';



function FloatingLabelInput({
  id,
  label,
  value,
  onChange,
  type = "text",
}: FloatingLabelInputProps) {
  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className="origin-center text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 left-0 -translate-y-1/2 cursor-text px-4 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:left-0 group-focus-within:-translate-x-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:left-0 has-[+input:not(:placeholder-shown)]:-translate-x-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
      >
        <span className="bg-white whitespace-nowrap inline-flex px-0 text-[#212121] font-[530]">
          {label}
        </span>
      </label>
      <Input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder=" "
        className="h-10 w-full"
      />
    </div>
  );
}

export default function AddressModal({
  editAddress,
  setEditAddress,
  setIsDialogOpen,
  onSave,
}: AddressModalProps) {
  const handleSaveAddress = () => {
    onSave(editAddress);
    setIsDialogOpen(false);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className='font-bold text-[25px]'>{editAddress.firstName ? 'Edit Address' : 'Add New Address'}</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4 px-5">
        {/* Two-column grid for First Name and Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <FloatingLabelInput
            id="firstname"
            label="First Name"
            value={editAddress.firstName}
            onChange={(e) =>
              setEditAddress({ ...editAddress, firstName: e.target.value })
            }
          />
          <FloatingLabelInput
            id="lastname"
            label="Last Name"
            value={editAddress.lastName}
            onChange={(e) =>
              setEditAddress({ ...editAddress, lastName: e.target.value })
            }
          />
        </div>

        {/* Full-width fields */}
        <FloatingLabelInput
          id="pincode"
          label="Pincode"
          value={editAddress.pincode}
          onChange={(e) =>
            setEditAddress({ ...editAddress, pincode: e.target.value })
          }
        />
        <FloatingLabelInput
          id="address"
          label="Address"
          value={editAddress.address}
          onChange={(e) =>
            setEditAddress({ ...editAddress, address: e.target.value })
          }
        />
        <FloatingLabelInput
          id="street"
          label="Street"
          value={editAddress.street}
          onChange={(e) =>
            setEditAddress({ ...editAddress, street: e.target.value })
          }
        />
        <FloatingLabelInput
          id="city"
          label="City"
          value={editAddress.city}
          onChange={(e) =>
            setEditAddress({ ...editAddress, city: e.target.value })
          }
        />
        <FloatingLabelInput
          id="state"
          label="State"
          value={editAddress.state}
          onChange={(e) =>
            setEditAddress({ ...editAddress, state: e.target.value })
          }
        />
        <FloatingLabelInput
          id="country"
          label="Country"
          value={editAddress.country}
          onChange={(e) =>
            setEditAddress({ ...editAddress, country: e.target.value })
          }
        />
        <FloatingLabelInput
          id="mobile"
          label="Mobile Number"
          value={editAddress.mobile}
          onChange={(e) =>
            setEditAddress({ ...editAddress, mobile: e.target.value })
          }
          type="number"
        />
      </div>
      <DialogFooter className='px-5'>
        
        <Button onClick={handleSaveAddress} 
        className='transition w-full rounded-lg  h-10 font-bold duration-300 active:scale-95 bg-[#689567] text-white hover:bg-[#000] cursor-pointer'> 
         
        {editAddress.firstName ? 'Edit Address' : 'Add Address'}
        </Button>
      </DialogFooter>
    </>
  );
}