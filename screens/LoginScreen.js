import AuthContent from "../components/Auth/AuthContent";
import { useState, useContext } from "react";
import { Alert } from "react-native";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../utils/auth";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Authentication failed", "다시 확인해봐라");
      setIsAuthenticating(false);
    }
    //setIsAuthenticating(false); //화면전환과 동시에 상태변경이 일어나서 위치를 변경
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="user user.." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
