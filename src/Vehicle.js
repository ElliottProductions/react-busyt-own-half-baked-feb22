export default function Vehicle({ vehicle }) {
  return <div className="vehicle">
    {/* the Vehcile component has a prop called vehicle. Check to see what string is in this vehicle prop */}

    {/* if the vehicle props is a car, render a '🚗' emoji */}
    {vehicle === 'car' && <span>🚗</span>}
    {/* if the vehicle props is a truck, render a '🚚' emoji */}
    {vehicle === 'truck' && <span>🚚</span>}
    {/* if the vehicle props is a bus, render a '🚌' emoji */}
    {vehicle === 'bus' && <span>🚌</span>}
    {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
    {vehicle === 'motorcycle' && <span>🏍️</span>}
  </div>;
}