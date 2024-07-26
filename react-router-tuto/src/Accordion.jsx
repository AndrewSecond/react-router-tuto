import React, { useCallback, useContext, useState } from "react";

const MenuContext = React.createContext(false);

const MenuAccordion = ({children}) => {
  const [activeGroup, setActiveGroup] = useState();

  const switchGroup = useCallback((title) => {
    setActiveGroup((state) => (state === title) ? undefined : title);
  }, []);

  return (
    <MenuContext.Provider value={{activeGroup, switchGroup}} >
      {children}
    </MenuContext.Provider>
  )
}

MenuAccordion.Group = function Group({children, title}) {
  const {activeGroup, switchGroup} = useContext(MenuContext);

  return (
    <div>
      <button onClick={() => switchGroup(title)} >{title}</button>
      {(activeGroup === title) && <div>{children}</div>}
    </div>
  )
}

MenuAccordion.Item = function Item({title}) {
  return (
      <div>{title}</div>
  )
}

export default function Accordion() {
  return (
    <MenuAccordion>
      <MenuAccordion.Item title="General" />
      <MenuAccordion.Group title="Countries" >
        <MenuAccordion.Item title="Ranking" />
        <MenuAccordion.Item title="Representation" />
        <MenuAccordion.Item title="Forecast for next year" />
      </MenuAccordion.Group>
      <MenuAccordion.Group title="Clubs" >
        <MenuAccordion.Item title="Ranking" />
        <MenuAccordion.Item title="Matchs shedules" />
        <MenuAccordion.Item title="Drawing of lots" />
        <MenuAccordion.Item title="Matchs results" />
      </MenuAccordion.Group>
      <MenuAccordion.Group title="Service" >
        <MenuAccordion.Item title="About" />
        <MenuAccordion.Item title="FAQ" />
        <MenuAccordion.Item title="Contacts" />
        <MenuAccordion.Item title="Partners" />
      </MenuAccordion.Group>
    </MenuAccordion>
  )
}
