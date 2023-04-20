import { Box, Center, Grid, createStyles, Text, Flex, Container, } from '@mantine/core'
import React from 'react'
import { useReducedMotion } from '@mantine/hooks';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import vd from "../../src/assets/vd.mp4"
import vd1 from "../../src/assets/vd1.mp4"
import vd2 from "../../src/assets/vd2.mp4"
import sn from "../../src/assets/sn.mp4"
import p1 from "../assets/p1.jpg"
import FooterSection from './FooterSection'
import { Carousel } from '@mantine/carousel';
import NavBar from './NavBar';
const useStyle = createStyles((theme) => ({

    bgVideo: {
        width: "100%",


    },
    videoplayer: {
        width: "inherit",
        zIndex: -1,
        position: "sticky",
        top: 0


    },
    textOver: {
        // background: "green",
        position: "absolute",
        top: "50%",
        // left: "8%",
        '@media (max-width: 768px)': {
            top: '20%',


        },


    },
    textContant: {
        fontWeight: 800,
        color: "#fff",
        fontSize: "80px",
        '@media (max-width: 768px)': {
            fontSize: "40px"

        },
    },
    box1: {
        background: "#ff5829",
        padding: "40px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    box2: {
        background: "black",
        padding: "40px",

        color: '#fff',
        "&:hover": {
            cursor: "pointer"
        }
    }




}))
export default function Home() {
    const prefersReducedMotion = useReducedMotion();
    const { classes } = useStyle()
    const items = [
        { title: 'Item 1', content: 'This is the content of item 1.' },
        { title: 'Item 2', content: 'This is the content of item 2.' },
        { title: 'Item 3', content: 'This is the content of item 3.' },
    ];

    return (
        <>
         <NavBar />
            <Box id='#' m={0} p={0}>
                <Box className={classes.bgVideo}>
                    <video className={classes.videoplayer} src={vd} autoPlay loop muted />

                    <Container size="90%">

                        <Grid className={classes.textOver}>

                            <Grid.Col md={6} lg={6}>
                                <Center>

                                    <Box className={classes.textContant}>
                                        Making Your Move Quick  & Easy

                                    </Box>
                                </Center>

                            </Grid.Col>
                            <Grid.Col md={6} lg={6} >

                            </Grid.Col>

                            <Flex mt={50} sx={(theme => ({ '@media (max-width: 1280px)': { display: "none" } }))}>

                                <Box className={classes.box2}>

                                    <Text fs={18} fw={600}>

                                        CALL US
                                    </Text>

                                    123-456-789

                                </Box>
                                <Box md={6} className={classes.box1}>

                                    <Text fs={18} fw={600}>

                                        START ONLINE
                                    </Text>

                                    Get a free moving
                                    <br /> quote in seconds
                                </Box>

                            </Flex>
                        </Grid>



                    </Container>
                </Box >
                <Container size="90%">
                    <Box style={{
                        height: "50vh",
                        // background: "red",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundImage: `url(${p1})`,
                        
                        color: "black"
                    }}>
                        <Center style={{
                            fontSize: "350%",
                            verticalAlign: "middle",
                            fontWeight: 700,
                        }}> <Text> Movers You Can Trust</Text></Center>
                    </Box>
                    <Grid>
                        <Grid.Col md={4} lg={4}>
                            <Box style={{
                                height: "20vh",
                                background: "black",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <Text style={{
                                    verticalAlign: "middle",
                                    color: "#fff",
                                    fontSize: "32px"

                                }}>

                                    Long Distance Moving
                                </Text>
                            </Box>
                        </Grid.Col>
                        <Grid.Col md={4} lg={4}>
                            <Box style={{
                                height: "20vh",
                                background: "#ff5829",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <Text style={{
                                    verticalAlign: "middle",
                                    color: "#fff",
                                    fontSize: "32px"

                                }}>

                                    Full Value Insurance
                                </Text>
                            </Box>
                        </Grid.Col>
                        <Grid.Col md={4} lg={4}>
                            <Box style={{
                                height: "20vh",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <Text style={{
                                    verticalAlign: "middle",

                                    fontSize: "32px"

                                }}>


                                    95% Referral Rate
                                </Text>
                            </Box>
                        </Grid.Col>

                    </Grid>
                    <Box style={{
                        height: "50vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Center style={{
                            fontSize: "350%",
                            verticalAlign: "middle",
                            fontWeight: 700,
                        }}> <Text> Our Happy Customers</Text>

                        </Center>
                    </Box>
                    <Box style={{
                        // height: "50vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Center style={{
                            // fontSize: "350%",
                            verticalAlign: "middle",
                            // fontWeight: 700,
                        }}>
                            <Carousel
                                maw={4000}
                                mx="auto"
                                withIndicators
                                height={200}
                                dragFree
                                slideGap="md"
                                align="start"
                            >
                                <Carousel.Slide><Text> Our Happy Customers</Text></Carousel.Slide>
                                <Carousel.Slide><Text> Our Happy Customers</Text></Carousel.Slide>
                                <Carousel.Slide><Text> Our Happy Customers</Text></Carousel.Slide>
                                {/* ...other slides */}
                            </Carousel>
                            {/* <Text> Our Happy Customers</Text> */}

                        </Center>
                    </Box>


                </Container>
                <FooterSection />
            </Box >
        </>
    )
}
