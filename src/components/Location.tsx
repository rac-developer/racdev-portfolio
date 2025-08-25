import { basics } from "@/database/data.json"

const Location = () => {
  const { city, countryCode } = basics.location

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h2 className="text-4xl font-bold">Me encuentro en {city}, {countryCode}</h2>
    </div>
  )
}

export default Location
