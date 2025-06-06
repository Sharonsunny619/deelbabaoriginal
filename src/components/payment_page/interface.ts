interface Address {
  id: string;
  firstName: string; 
  lastName: string;  
  pincode: string;    
  address: string;
  street: string;     
  city: string;       
  state: string;      
  country: string;    
  mobile: string;
}

interface AddressModalProps {
  editAddress: Address;
  setEditAddress: React.Dispatch<React.SetStateAction<Address>>;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: (address: Address) => void;
}

interface FloatingLabelInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
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

interface DialogpaymentAProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  paymentMethod: string
}

interface CartItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  image: string;
}