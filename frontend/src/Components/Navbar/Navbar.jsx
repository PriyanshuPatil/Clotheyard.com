import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  VStack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { CiUser, CiLocationOn } from "react-icons/ci";

import { AiOutlineSearch } from "react-icons/ai";
import { Link as NaviLink, useNavigate } from "react-router-dom";
import { SlHandbag } from "react-icons/sl";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../Assets/clotheyardbg.png";
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  //   const { isAuth, currentUser, logout } = useContext(AuthContext);

  return (
    <Box zIndex={10} position={"sticky"} w="100%" top={0}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2, md: 4 }}
        px={{ base: 10 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        gap={"30px"}
        justifyContent={"space-between"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex
          display={{ base: "none", md: "flex" }}
          ml={5}
          //   border={"1px solid red"}
        >
          <DesktopNav />
        </Flex>

        <Flex>
          <NaviLink to="/">
            <Text
              textAlign={useBreakpointValue({ base: "left", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Image
                textAlign={"left"}
                src={logo}
                alt="Clotheyard"
                maxW={{ base: "100px", md: "200px" }}
              />
            </Text>
          </NaviLink>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={{ base: 2, md: 6 }}
          alignItems={"center"}
        >
          <InputGroup
            w={"200px"}
            mt={2}
            display={useBreakpointValue({ base: "none", md: "solid" })}
          >
            <InputLeftElement
              py={"20px"}
              pointerEvents="none"
              children={<AiOutlineSearch color="gray.300" fontSize={"20px"} />}
            />
            <Input
              py={"20px"}
              type="tel"
              placeholder="Search"
              borderRadius={"50px"}
              variant={"outline"}
              outline={"none"}
            />
          </InputGroup>

          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            variant={"link"}
            borderRadius={"50%"}
            w="45px"
            h="45px"
            _hover={{
              backgroundColor: "#E0F7FA",
              color: "#0277BD",
            }}
            display={useBreakpointValue({ base: "none", md: "inline-block" })}
          >
            <VStack pt={"10px"}>
              <CiLocationOn fontSize={"25px"} spacing={0} />
            </VStack>
          </Button>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            variant={"link"}
            onClick={() => navigate("/login")}
            borderRadius={"50%"}
            w="45px"
            h="45px"
            _hover={{
              backgroundColor: "#E0F7FA",
              color: "#0277BD",
            }}
          >
            <VStack>
              <CiUser fontSize={"25px"} spacing={0} />
            </VStack>
          </Button>

          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            variant={"link"}
            onClick={() => navigate("/cart")}
            w="45px"
            h="45px"
            borderRadius={"50%"}
            _hover={{
              backgroundColor: "#E0F7FA",
              color: "#0277BD",
            }}
          >
            <VStack>
              <SlHandbag fontSize={"25px"} spacing={0} />
            </VStack>
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Flex
      direction={"row"}
      w={"150%"}
      justifyContent={"space-around"}
      gap={"20px"}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NaviLink to={navItem.path || "/"}>
            <Box
              py={1}
              fontSize={"lg"}
              fontWeight={400}
              color={linkColor}
              borderBottom="2px solid white"
              _hover={{
                // transitionDelay: "200ms",
                textDecoration: "none",
                borderBottom: "2px solid black",

                color: linkHoverColor,
              }}
            >
              {navItem.label}
            </Box>
          </NaviLink>
        </Box>
      ))}
       <Box >
          <NaviLink to={"/admin/dashboard"}>
            <Box
              py={1}
              fontSize={"lg"}
              fontWeight={400}
              color={linkColor}
              borderBottom="2px solid white"
              _hover={{
                // transitionDelay: "200ms",
                textDecoration: "none",
                borderBottom: "2px solid black",

                color: linkHoverColor,
              }}
            >
              Admin
            </Box>
          </NaviLink>
        </Box>
    </Flex>
    // </Center>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, path }) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={RouterLink}
        to={path}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Women",
    path: "/products/Womens",
  },
  {
    label: "Men",
    path: "/products/Mens",
  },
  {
    label: "Child",
    path: "/products/Child",
  }
];
