import { Heading } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";

const NavBar = () => {
  return (
    <header className="h-full flex items-center">
      <nav className="ml-3 flex items-center justify-start gap-2">
        <MdDashboard size={32} />
        <Heading as="h2" size="xl">
          Dashboard
        </Heading>
      </nav>
    </header>
  );
};

export default NavBar;
