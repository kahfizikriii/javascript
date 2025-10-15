import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext harus digunakan di dalam UserProvider!");
  }
  return context;
};
