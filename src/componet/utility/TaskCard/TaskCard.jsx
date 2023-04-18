import {
  Badge,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Text,
  VStack,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineCheckCircle, AiOutlineYoutube } from "react-icons/ai";
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
import { inherits } from "@babel/types";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { IntilizeData } from "../../../services/connectWallet";
import axios from "axios";
import twitteAuth from "../../../services/twitterAuth";
import verifyTask from "../../../services/questService";

export default function TaskCard({ task, xppoints, questId }) {
  console.log(xppoints);
  console.log("quest id is", questId);
  console.log("data from parent module", task);
  const [taskLogger, settaskLogger] = useState();
  const { connectionStatus } = useSelector((state) => state.userManager);

  
  const [expanded, setExpanded] = useState(false);
  var y = localStorage.getItem("points");
  const [xp, setxp] = useState(y);

  const [down, setDown] = useState(false);
  const [taskStatus, settaskStatus] = useState(false);
  const [showdiscord, setshowdiscord] = useState(true);
  const [showtwitter, setshowtwitter] = useState(false);

  const Task = task.split("~");
  const icon = Task[0].toLowerCase();
  console.log("task", Task);
  useEffect(() => {
    y = localStorage.getItem("points");

    setxp(y);
    console.log("taskcard value points local", xp, y);
  }, []);
  const addPoint = async () => {
    if (!connectionStatus) {
      return alert("wallet is not connected");
    }
    settaskStatus(true);
    localStorage.setItem("taskStatus", true);
    const twitteAuth = async () => {
      const key = await fetch("http://31.220.48.246:4000/user/twitter")
        .then((response) => response.json())
        .then((data) => {
          console.log("token", data);
          return data.token;
        });
      try {
        const redirect_uri = `http://localhost:3000/callback`;
        console.log(redirect_uri);
        window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${key}&oauth_callback=http%3A%2F%2Flocalhost%3A3001%2FQuest%2F641b16bd5546483a6a14da7b&response_type=code&scope=identify%20guilds%20guilds.join%20guilds.members.read`;
        var x = localStorage.getItem("points");
        setxp(x);
        let point = parseInt(task.split("~")[2]);
        const num = Number(xp) + Number(point);
        console.log("first cal func", num);
        setxp(num);
        localStorage.setItem("points", String(num));
      } catch (err) {
        console.error("Error here", err);
      }
    };
    const DISCORD_AUTH_URL =
      "https://discord.com/api/oauth2/authorize?client_id=1093225051781869668&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FQuest%2F641b16bd5546483a6a14da7b&response_type=code&scope=identify%20guilds%20guilds.join%20connections%20guilds.members.read";
    const discordValidator = async () => {
      window.location = DISCORD_AUTH_URL;
      var x = localStorage.getItem("points");
      setxp(x);
      let point = parseInt(task.split("~")[2]);
      const num = Number(xp) + Number(point);
      console.log("first cal func", num);
      setxp(num);
      localStorage.setItem("points", String(num));
      setshowdiscord(false);
    };

    let name = task.split("~")[0];
    console.log("nok", name);
    if (name.toLowerCase().includes("twitter")) {
      await twitteAuth();
    } else if (name.toLowerCase().includes("discord")) {
      await discordValidator();
    }
    let point = parseInt(task.split("~")[2]);
    const ad = localStorage.getItem("address");

    console.log(ad, "jaaman", point);
    const apiUrl = "http://31.220.48.246:4000/user/addPoint";
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ point: point, address: ad }),
      });
      console.log(response);
    } catch (error) {}
  };

  return (
    <>
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
                {taskStatus || Task[3] === "completed" ? (
                  <BsFillCheckCircleFill color="green" id="check_box" />
                ) : (
                  <icon></icon>
                )}
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

                {Task[3] !== "completed" ? (
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
                ) : (
                  <span></span>
                )}
              </HStack>
            </Flex>
            {/* <Flex w={FILL_PARENT} alignItems={"flex-start"}>
            {" "}
            <span style={{ display: expanded ? "block" : "none" }}>
              {"-> "}
              {task.split("~")[2]}
            </span>
          </Flex> */}
            {connectionStatus ? (
              <Button
                variant={"outline"}
                display={expanded ? "block" : "none"}
                borderColor={"#0EA5E9"}
                padding={"0px 32px"}
                borderRadius={"50px"}
                fontWeight={"5000"}
                color={"#0EA5E9"}
                onClick={icon.includes("twitter") ? ()=>{twitteAuth(questId,task) }:()=>{verifyTask(questId,task)}}
              >
                Verify
              </Button>
            ) : (
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
                connect wallet
              </Button>
            )}
          </VStack>
        </CardBody>
      </Card>
    </>
  );
}
