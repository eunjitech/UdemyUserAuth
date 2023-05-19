//로그인한 사용자 정보 관리

import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false, //로그인 여부
  autenticate: (token) => {}, //사용자가 인증에 성공하면 트리거
  logout: () => {}, //토큰 삭제
});

export default function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
  } //로그인 성공할 때 사용되는 트리거함수

  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
