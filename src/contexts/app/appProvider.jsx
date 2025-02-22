import useApp from "../../hooks/useApp";
import { Provider } from "./useAppContext";

export const AppProvider = ({ children }) => {
  const app = useApp();

  return <Provider value={ app }>{children}</Provider>;
};
