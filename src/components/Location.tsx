'use client'

import AnimatedContainer from "@/components/ui/AnimatedContainer";
import useAnimatedDelay from "@/hooks/useAnimatedDelay";

const Location = ({ location }: { location: { city: string; countryCode: string } }) => {
  
  const { city, countryCode } = location;
  const titleDelay = useAnimatedDelay(0.2); 

  return (
    <>
      <AnimatedContainer scrollTriggered delay={titleDelay}>
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
