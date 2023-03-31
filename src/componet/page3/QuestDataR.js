import React, { useState } from 'react'
import "./QuestDataR.css"
import { AiOutlineAliyun } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import { AUTO, FILL_30PARENT, FILL_40PARENT, FILL_PARENT } from '../../constants/typography';


function QuestDataR(props) {
    const [qbtn,setQbtn] = useState(true)
const [pbtn,setPbtn] = useState(false)
    return (
        <Box   className="right"  width={{base:FILL_PARENT,sm:FILL_PARENT,lg:FILL_40PARENT}} >
            <div className='QuestMaindiv' >
                <Button style={{backgroundColor:qbtn?"#272B30":"#1A1D1F"}}  onClick={()=>{
                    setQbtn((prev)=>!prev)
                    setPbtn((prev)=>!prev)

                }}>Quest</Button>
                <Button style={{backgroundColor:pbtn?"#272B30":"#1A1D1F"}}  onClick={()=>{
                    setPbtn((prev)=>!prev)
                    setQbtn((prev)=>!prev)


                }}>Project info</Button>
            </div>
            <Box className='condiv'  width={{base:FILL_PARENT,sm:FILL_PARENT,lg:FILL_PARENT}}>

                <Flex alignItems={"flex-start"} ><h3>{props.pname}</h3></Flex>
                <HStack alignItems={"center"} className='kdiv'>
                    <p>By</p>
                    <img src={props.imgsrc} className='smallimg' alt="" />
                    <h5>{props.name}</h5>
                </HStack>
                <div className='paradiv'>
                    <p>
                        {props.para1}

                    </p>
                    <p>
                        {props.para2}

                    </p>
                </div>
                <div className='tagdiv'>
                    <h6>raffle</h6>
                    <h6>USDC</h6>
                </div>
                <div className='taskdiv'>
                    <p><AiOutlineAliyun />  Perpetual + Raffle</p>
                    <p>{props.task} tasks</p>
                </div>
                <div className='lastflex1'>
                    <h4>  <BsPeople /></h4>
                    <h5>{props.likes} Like</h5>
                </div>

                <div className='xpdiv'>
                    <h3>{props.xppoints} </h3>
                    <h4>100 USDC</h4>

                </div>
                <div className='imgsmallingdvi'>
                    <img src={props.imgsrc2} alt="" />
                    <h4>Cryptocity NFT</h4>
                    <h6>To Everyone</h6>
                    <p>WALL covers the minting gas fees</p>
                </div>



            </Box>

        </Box>
    )
}

export default QuestDataR