import { VARIABLES } from "src/common/variables";

const sideMenu: MenuType[] = [
  {
    title: "Equipment",
    icon: "test",
    href: "/equipment",
    chiildren: [
      { title: "Rockets", href: "/equipment/rocket" },
      { title: "Ships", href: "/equipment/ship" },
    ],
  },
];

/** 메인 주소를 찾는 함수 */
export const getMainRoute = () =>
  sideMenu[0].chiildren ? sideMenu[0].chiildren[0].href : sideMenu[0].href;

const SideNav = () => {
  return (
    <div className={`w-[256px]`}>
      {/* logo */}
      <div className={`h-[76px]`}>{VARIABLES.TITLE}</div>
      {/* nav items */}
      <div></div>
    </div>
  );
};
export default SideNav;
