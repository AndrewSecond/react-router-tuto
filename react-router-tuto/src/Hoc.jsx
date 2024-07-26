import React, { useCallback, useContext, useState } from "react";

const useIsAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const switchAuth = useCallback(() => {
    setIsAuth((st) => !st);
  }, []);
  return {isAuth, switchAuth};
};

const AuthComponent = () => {
  return (
    <div>Only for authorized users</div>
  )
}
const UnauthComponent = () => {
  return (
    <div>For not authorized users</div>
  )
}

export default function Hoc() {
  const {isAuth, switchAuth} = useIsAuth();
  return (
    <div>
      <button onClick={switchAuth}>{isAuth ? "logOut" : "logIn"}</button>
      {isAuth ? <AuthComponent /> : <UnauthComponent />}
    </div>
  )
}
