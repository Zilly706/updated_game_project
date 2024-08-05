import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo2.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";





interface Props{
  onSearch: (searchText: string) => void;

}



const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding='10px'>

<Image src={logo} boxSize="70px" borderRadius={'50%'} alt="logo" />

<SearchInput onSearch={onSearch}/>
<ColorModeSwitch />

    </HStack>
     
  );
};

export default NavBar;
