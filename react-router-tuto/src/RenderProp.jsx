import React, { useCallback, useContext, useState } from "react";

const MenuContext = React.createContext(false);

const Layout = ({renderHeader, renderFooter, renderMain, 
  renderLert, renderRight}) => {
  const [isOpen, setIsOpen] = useState();
  return (
    <div className="contaner">
      <header className="header">{renderHeader?.()}</header>
      <button onClick={(state) => setIsOpen(!state)} >Click Me</button>
      <main>
        <div className="sideLeft">{renderLeft?.(isOpen)}</div>
        <div className="main">{renderMain?.()}</div>
        <div className="sideRight">{renderRight?.(isOpen)}</div>
      </main>
      <footer className="footer">{renderFooter?.()}</footer>
    </div>
  )
}

export default function RenderProp() {
  return (
    <Layout 
      renderHeader={() => <header>Hello!</header>}
      renderLeft={(isOpen) => <div>{isOpen ? "Contacts" : "closed"}</div>}
      renderMain={() => <div>Content</div>}
      renderFooter={() => <footer>About</footer>}
     />
  )
}
