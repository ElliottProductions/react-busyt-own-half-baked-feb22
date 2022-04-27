import './App.css';
import VehicleList from './VehicleList';
import TrafficLight from './TrafficLight';

import React, { useState } from 'react';


function App() {
  // track the following state with a few useState hooks:
  // lightColor should be a string that starts out as 'red'
  const [lightColor, setLightColor] = useState('red');
  // lizardSize should be a number that starts out as 10
  const [lizardSize, setLizardSize] = useState(10);
  // alienSize should be a number that starts out as 10
  const [alienSize, setAlienSize] = useState(10);
  // traffic is complicated. It should be an array of strings that starts out as ['car', 'truck']
  const [vehicleParade, setVehicleParade] = useState(['car', 'truck']);

  function handleAlienEat() {
    setAlienSize(alienSize + 1);
  }
  function handleAlienAttack() {
    setLizardSize(lizardSize - 1);
  }

  function handleLizardEat() {
    setLizardSize(lizardSize + 1);
  }
  function handleLizardAttack() {
    setAlienSize(alienSize - 1);
  }



  function handleLightRed() {
    setLightColor('red');
  }
  function handleLightYellow() {
    setLightColor('yellow');
  }
  function handleLightGreen() {
    setLightColor('green');
  }

  function handleAddVehicle(vehicle) {
    vehicleParade.push(vehicle);

    setVehicleParade([...vehicleParade]);
  }


  return (
    <div className="App">
      <div className="fight">
        <div className="monster">
          {/* the width of the alien should be ten times whatever the alien size is in state */}
          <img src="alien.png" width={alienSize * 10} />
          <div className='buttons'>
            {/* when you click this button, the alien's size in state should go up by one */}
            <button onClick={handleAlienEat}>Oh no! The alien is gobblin up all the electricity!</button>
            {/* when you click this button, the lizard's size in state should go down by one */}
            <button onClick={handleAlienAttack}>Amazing! The alien zapped the lizard!</button>
          </div>
        </div>
        <div className="monster">
          {/* the width of the lizard should be ten times whatever the alien size is in state */}
          <img src="lizard.png" width={lizardSize * 10} />
          <div className="buttons">
            {/* when you click this button, the lizard's size in state should go up by one */}
            <button onClick={handleLizardEat}>Yegads! The lizard is ramping up to its final form!</button>
            {/* when you click this button, the alien's size in state should go up by one */}
            <button onClick={handleLizardAttack}>Oh my! The lizard chomped down on the alien!</button>
          </div>
        </div>
      </div>
      <TrafficLight color={lightColor} />
      <div className="buttons">
        {/* when you click this button, the color of the light in state should be set to 'red' */}
        <button onClick={handleLightRed}>Red</button>
        {/* when you click this button, the color of the light in state should be set to 'yellow' */}
        <button onClick={handleLightYellow}>Yellow</button>
        {/* when you click this button, the color of the light in state should be set to 'green' */}
        <button onClick={handleLightGreen}>Green</button>
      </div>
      {/* 
      the VehicleList component takes in one prop: vehicles.
      This prop should be an array of strings like ['car', 'truck', 'truck', 'car', 'bus'].
      Do you have something like that in state that you could pass as a vehicles prop? 
      */}
      <VehicleList vehicles={vehicleParade} />
      <div className='buttons'>
        {/* This part is weird */}
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'car' to the end */}
        <button onClick={()=>handleAddVehicle('car')}>Car</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'bus' to the end */}
        <button onClick={()=>handleAddVehicle('bus')}>Bus</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'truck' to the end */}
        <button onClick={()=>handleAddVehicle('truck')}>Truck</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'motorcycle' to the end */}
        <button onClick={()=>handleAddVehicle('motorcycle')}>Motorcycle</button>
      </div>

    </div>
  );
}

export default App;

