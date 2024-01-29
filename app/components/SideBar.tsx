"use client";
import { Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { PiPlantBold } from "react-icons/pi";

const SideBar = () => {
  const items = [
    { id: 1, label: "Dashboard", icon: <MdDashboard size={24} /> },
    { id: 2, label: "Profile", icon: <CgProfile size={24} /> },
  ];

  return (
    <Flex
      direction="column"
      justify="start"
      alignItems="center"
      marginTop={3}
      gap={3}
      className="h-full w-full"
    >
      <Flex justify="center" alignItems="center" gap={3}>
        <PiPlantBold size={32} />
        <Heading as="h4" size="lg">
          HWUM IoT
        </Heading>
      </Flex>
      <Flex className="h-full w-full" ml={10}>
        <List spacing={3}>
          {items.map((item) => (
            <ListItem key={item.id}>
              <Flex justify="start" alignItems="center" gap={2}>
                {item.icon}
                <Text>{item.label}</Text>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
};

export default SideBar;
