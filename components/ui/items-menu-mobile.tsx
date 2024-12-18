import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { Menu } from "lucide-react";


const ItemsMenuMobile = () => {
    return(
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <Popover>
                <a href="/categories/cafe-molido" className="block">Café molido</a>
                <a href="/categories/cafe-grano" className="block">Café en grano</a>
                <a href="/categories/cafe-capsula" className="block">Cafe en capsula</a>
            </Popover>
        </Popover>
    )
}
export default ItemsMenuMobile;