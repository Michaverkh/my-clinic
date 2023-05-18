import { StoreContext } from "index";
import { useContext } from "react";

export default function useStore() {
  return useContext(StoreContext);
}
