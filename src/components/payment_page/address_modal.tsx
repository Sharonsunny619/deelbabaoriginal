import React from 'react';
import { DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface Address {
  id: string;
  name: string;
  type: string;
  address: string;
  mobile: string;
}

interface AddressModalProps {
  editAddress: Address;
  setEditAddress: React.Dispatch<React.SetStateAction<Address>>;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: (address: Address) => void;
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
        <DialogTitle>{editAddress.id ? 'Edit Address' : 'Add New Address'}</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            value={editAddress.name}
            onChange={(e) =>
              setEditAddress({ ...editAddress, name: e.target.value })
            }
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="type" className="text-right">
            Type
          </Label>
          <Input
            id="type"
            value={editAddress.type}
            onChange={(e) =>
              setEditAddress({ ...editAddress, type: e.target.value })
            }
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="address" className="text-right">
            Address
          </Label>
          <Input
            id="address"
            value={editAddress.address}
            onChange={(e) =>
              setEditAddress({ ...editAddress, address: e.target.value })
            }
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="mobile" className="text-right">
            Mobile
          </Label>
          <Input
            id="mobile"
            value={editAddress.mobile}
            onChange={(e) =>
              setEditAddress({ ...editAddress, mobile: e.target.value })
            }
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button
          variant="outline"
          onClick={() => setIsDialogOpen(false)}
        >
          Cancel
        </Button>
        <Button onClick={handleSaveAddress}>Save</Button>
      </DialogFooter>
    </>
  );
}