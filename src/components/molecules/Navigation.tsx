import React from "react";
import { NavItem, Logo, ThemeSwitcher, Button } from "@/components/atoms";
import { HiBars3, HiXMark } from "react-icons/hi2";

interface NavigationProps {
  navigation: Array<any>;
}

const Navigation = ({navigation} : NavigationProps) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = React.useState(false);
  let nav = navigation || [];
  return (
    <>
        <nav className="hidden md:flex">
          {nav.map((item, index) => {
            return (
              <NavItem key={index} data={item}/>
            );
          })}
        </nav>

        <div className="md:hidden">
          <Button
            type="button"
            onClick={() => setIsShowMobileMenu(true)}
            title="Open Navigation"
          >
            <HiBars3 />
          </Button>
        </div>

        <div
          className={`absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden ${isShowMobileMenu? "opacity-100 scale-100": "opacity-0 scale-95"}`}
        >
          <div className={`divide-y-2 divide-gray-50 rounded-lg bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 ${isShowMobileMenu ? "block" : "hidden"}`}>
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Logo title={""} />
                <div className="mr-2">
                <ThemeSwitcher />
                  <Button
                    type="button"
                    className="ml-2"
                    onClick={() => setIsShowMobileMenu(false)}
                    title="Close Navigation"
                  >
                    <HiXMark />
                  </Button>
                </div>
              </div>
              <div className="mt-6 flex">
                <nav className="grid gap-y-0 w-full">
                  {nav.map((item, index) => {
                    return (
                      <NavItem key={index} data={item} isMobile={true} />
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Navigation;
