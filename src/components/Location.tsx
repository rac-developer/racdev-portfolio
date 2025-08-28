import { basics } from "@/database/data.json";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

const Location = () => {
  const { city, countryCode } = basics.location;

  return (
    <>
      <AnimatedContainer delay={0.9}>
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
