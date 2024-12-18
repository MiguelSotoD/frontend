"use client"
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Menulist from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";

const Navbar =() => {
    const router = useRouter()
  return (
    <div className="flex items-center justify-between p-4 mx-auto  sm:max-w-4xl md:max-w-6xl lg:max-w-7xl">
      <h1 className="text-3xl" onClick={() => router.push("/")}>Mike<span className="font-bold">Dev</span></h1>
      <div >
        <Menulist />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={()=> router.push("/cart")}/>
        <Heart strokeWidth="1" className="cursor-pointer" onClick={()=> router.push("/loved-products")}/>
        <User strokeWidth="1" className="cursor-pointer" onClick={()=> router.push("/profile")}/>
        <ToggleTheme />
      </div>
    </div>
  )
}
export default Navbar;