"use client"

import { CarProps } from "@/types";

interface CarCardProps {
    car: CarProps;
  }

const CarCard = ({ car }: CarCardProps) => {
    
    const { city_mpg, year, make, model, transmission, drive } = car;
  return (
    <div className="border border-gray-200 rounded-lg p-4">
        <h2 className="pr-2"> Make:  { make}   </h2>
        <br />
        <h2 className="pr-2"> Model:  { model}   </h2>
     
      
    </div>
  )
}

export default CarCard
