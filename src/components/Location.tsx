import { basics } from "@/database/data.json"

const Location = () => {
  const { city, countryCode } = basics.location

  return (
    <div>
      <h2 className="title">Me encuentro en {city}, {countryCode}</h2>

    </div>
  )
}

export default Location
