import * as reducer from "../../store/reducer/menu";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useMenu = () => {
  const menuList = useShallowEqualSelectorToJS((state) =>
    state.menu.get("list")
  );
  const additionMenuList = useShallowEqualSelectorToJS((state) =>
    state.menu.get("additionList") 
  );
  
  const actions = useActions(reducer);

  return {
    menuList,
    additionMenuList,

    listAllMenu: actions.listAllMenu,
    listAllAdditionMenu: actions.listAllAdditionMenu,
  };
};

export default useMenu;
