import React, { useCallback, useContext, useState, useMemo } from "react";

const ThemeContext = React.createContext("default"); 
const SwitchThemeContext = React.createContext(()=>{}); 

const useTheme = () {
  return useContext(ThemeContext)
}
const useThemeSwitcer = () {
  return useContext(SwitchThemeContext)
} 

const Header = () => {
  const switchTheme = useThemeSwitcer();
  return 
    <header>
      Header
      <button onClick={switchTheme}>
        switch theme
      </button> 
    </header>
}
const Content = () => {
  const theme = useTheme();
  return <div>Content with {theme}</div>
}
const OtherContent = () => {
  return <div>Content other</div>
}

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('default');
  const switchTheme = useCallback(() => {
    setTheme((state) => state === 'default' ? 'alternative' : 'default')
  }, []);

  return 
  <ThemeContext.Provider value={theme}>
    <SwitchThemeContext value={switchTheme}>
      {children}
    </SwitchThemeContext>
  </ThemeContext.Provider>
}

export default function ContextPage() {
  return (
    <ThemeProvider >
      <div>
        <Header />
        <Content />
        <OtherContent />
      </div>
    </ThemeProvider>
  )
}
