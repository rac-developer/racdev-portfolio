'use client'

import { basics } from "@/database/data.json";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import useAnimatedDelay from "@/hooks/useAnimatedDelay";

const Location = () => {
  
  const { city, countryCode } = basics.location;
  const titleDelay = useAnimatedDelay(0.9); 

  return (
    <>
      <AnimatedContainer delay={titleDelay}>
        <div className="flex flex-col h-full justify-center text-center">
          <h2 className="text-4xl font-bold">
            Me encuentro en {city}, {countryCode}{" "}
          </h2>
        </div>
      </AnimatedContainer>
    </>
  );
};

export default Location;
