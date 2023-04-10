import {
  Badge,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { BiLink } from "react-icons/bi";
import {
  AUTO,
  FILL_60PARENT,
  FILL_80PARENT,
  FILL_PARENT,
  POINTER,
  SB,
  YELLOW,
} from "../../../constants/typography";
import "./task.css";
import { Link } from "react-router-dom";

export default function TaskCard({ task }) {
  const [expanded, setExpanded] = useState(false);
  const [down, setDown] = useState(false);
  const Task = task.split("~");
  const icon = Task[0].toLowerCase();
  console.log(Task);
  const addPoint = async() =>  {
   let point = parseInt(task.split("~")[2]);
   const ad = localStorage.getItem('address');
   const apiUrl = 'http://localhost:4000/user/addPoint';
   try {
     const token = localStorage.getItem('jwtToken');
     const response = await fetch(apiUrl, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       },
       body: JSON.stringify({point:point,address:ad}),
     });
     console.log(response)
   } catch (error) {
     
   }
   
  }

  return (
    <Card
      bg={"#1A1D1F"}
      w={FILL_PARENT}
      className={expanded ? "downslide" : "upslide"}
      borderRadius={"16px"}
      padding={0}
      marginTop="10px"
    >
      <CardBody w={FILL_PARENT}>
        <VStack w={FILL_PARENT}>
          <Flex justifyContent={SB} w={FILL_PARENT}>
            <HStack>
              {icon.includes("twitter") ? (
                <FiTwitter color="#0EA5E9" />
              ) : icon.includes("youtube") ? (
                <AiOutlineYoutube color="red" />
              ) : icon.includes("discord") ? (
                <RxDiscordLogo color="#5865F2" />
              ) : icon.includes("instagram") ? (
                <RxDiscordLogo color="#F52887" />
              ) : (
                <BiLink color="#10B981" />
              )}

              <Text margin={0} color={"#E6E6E6"}>
                {" "}
                <Link to={task.split("~")[1]} target="_blank">
                  {" "}
                  {task.split("~")[0]}
                </Link>
              </Text>
            </HStack>

            <HStack>
              <Badge
                m={0}
                textTransform="lowercase"
                fontWeight={"5000"}
                borderRadius="20px"
                autoCapitalize="false"
                colorScheme={YELLOW}
              >
                {task.split("~")[2]} xp
              </Badge>
              <IoIosArrowDown
                size={16}
                color="#0EA5E9"
                style={{
                  cursor: POINTER,
                  transform: down ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
                onClick={() => {
                  setExpanded((prev) => !prev);
                  setDown((prev) => !prev);
                }}
              />
            </HStack>
          </Flex>
          {/* <Flex w={FILL_PARENT} alignItems={"flex-start"}>
            {" "}
            <span style={{ display: expanded ? "block" : "none" }}>
              {"-> "}
              {task.split("~")[2]}
            </span>
          </Flex> */}
         
            <Button
              variant={"outline"}
              display={expanded ? "block" : "none"}
              borderColor={"#0EA5E9"}
              padding={"0px 32px"}
              borderRadius={"50px"}
              fontWeight={"5000"}
              color={"#0EA5E9"}
              onClick={addPoint}
            >
              Verify
            </Button>
          
        </VStack>
      </CardBody>
    </Card>
  );
}
