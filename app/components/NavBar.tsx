import { Heading } from "@chakra-ui/react";
import { PiPlantBold } from "react-icons/pi";

const NavBar = () => {
  return (
    <header className="h-full flex items-center">
      <nav className="ml-3 flex items-center justify-start gap-2">
        <PiPlantBold size={32} />
        <Heading as="h2" size="xl">
          HWUM IoT Agriculture
        </Heading>
      </nav>
    </header>
  );
};

export default NavBar;
