
import { CarProps } from "@/types";

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
  }

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <div>
      Car Details
    </div>
  )
}

export default CarDetails
