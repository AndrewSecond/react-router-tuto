import React, { useContext, useState } from "react";

const toggleContext = React.createContext(false);

const ToggleCompound = ({children, initialValue}) => {
  const [isOn, setIsOn] = useState(initialValue);

  return (
    <toggleContext.Provider value={{isOn, setIsOn}} >
          <div>{children}</div>
    </toggleContext.Provider>
  )
}

ToggleCompound.TextOn = function TextOn() {
  const {isOn} = useContext(toggleContext);
  return <>
  {isOn && <span>On</span>} 
  </>
}

ToggleCompound.TextOff = function TextOff() {
  const {isOn} = useContext(toggleContext);
  return <>
  {!isOn && <span>Off</span>} 
  </>
}

ToggleCompound.SwitchButton = function SwitchButton() {
  const {setIsOn} = useContext(toggleContext);
  return <>
  <button onClick={() => setIsOn((state) => !state)}>Switch</button>
  </>
}

export default function CompoundComp() {
  return (
    <ToggleCompound initialValue={false} >
      <ToggleCompound.TextOn />
      <ToggleCompound.TextOff />
      <ToggleCompound.SwitchButton />
    </ToggleCompound>
  )
}