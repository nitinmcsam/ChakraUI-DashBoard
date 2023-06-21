import React from "react";
import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Text,
  background,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { RiHomeLine } from "react-icons/ri";
function NavBar() {
  return (
    <Box display={{ base: "none", md: "block" }} width="300px" p="5" h="90vh">
      <Card variant={"outline"}>
        <CardBody>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            variant="outline"
            bgColor={"white"}
            height={"90vh"}
          >
            <Box>
              <Flex flexDirection={"column"} alignItems={"center"}>
                <Text autoCapitalize="" fontWeight="bold" autocapitalize py="5">
                  PURITY UI DASHBOARD
                </Text>

                <Divider
                  orientation="horizontal"
                  borderColor={"gray.400"}
                  bgGradient="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, rgb(224, 225, 226) 49.52%, rgba(224, 225, 226, 0) 100%);"
                  width="70%"
                />
              </Flex>
            </Box>
            <Box>
              <Box>
                <Button
                  style={{
                    outlineColor: "transparent",
                    borderColor: "transparent",
                    backgroundColor: "transparent",
                    marginTop: "15px",
                  }}
                  
                >
                  <Flex alignItems={"Center"} flexDirection={"row"}>
                    <Box style={{ display: "flex", alignItems: "center" }}>

                      <RiHomeLine size={20} style={{ font: "20px" }}  />
                      <Text fontWeight="bold" fontSize={"md"} px={"5"} py={"5"}>
                        Dashboard
                      </Text>
                    </Box>
                  </Flex>
                </Button>
              </Box>
              <Box></Box>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
}

export default NavBar;
