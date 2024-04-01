import { BOOKMARK_ICON, DIS_ICON, HELP_ICON, HOME_ICON, SETTING_ICON } from "@/assests/icons";

export const menuItem: menuItemInterface[] = [
  {
    label: "Home",
    icon: <HOME_ICON/>,
    path:"/dashboard"
  },
  {
    label: "Discover",
    icon: <DIS_ICON/>,
    path:"/discover"
  },
  {
    label: "Bookmark",
    icon: <BOOKMARK_ICON/>,
    path:"/bookmark"
  },
  {
    label: "Setting",
    icon: <SETTING_ICON/>,
    path:"/setting"
  },
  {
    label: "Help",
    icon: <HELP_ICON/>,
    path:"/help"
  },
];
