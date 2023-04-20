import React from 'react'
import {

    Footer,
    Text,
    Grid,
    List,
    Box,
    Container,
    Center,
    createStyles,
    TextInput,
    PasswordInput,
    Button,
    Flex,

} from '@mantine/core';

const useStyle = createStyles((theme) => ({
    formBox: {
        background: "#ff5829",

        color: "#fff",

    },
    contact: {
        // padding: "15%",
        background: "#ff5829",
        color: "#fff",

    },
    textCenter: {
        height: "100%",
        // background: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",


    },
    mainText: {
        fontSize: "350%",
        verticalAlign: "middle",
        fontWeight: 700,
    },

    formSection: {
        height: "100%",
        // width: "50%",
        // background: "red"
    }
}))
export default function FooterSection() {
    const { classes } = useStyle()
    return (
        <>
            <Box className={classes.formBox}>
                <Container size="90%" p={50}>
                    <Grid m={0} p={0}>
                        <Grid.Col m={0} p={0} md={6} lg={6}>
                            <Box className={classes.textCenter}>
                                <Text className={classes.mainText}>Get Your Free <br /> Quote <br /> <Text style={{ color: "black", fontSize: "16px", fontWeight: "normal" }}>I'm a paragraph. Click here to add your own <br /> text and edit me. It's easy.   </Text></Text>
                            </Box>
                        </Grid.Col>
                        <Grid.Col md={6} lg={6} >
                            <Center>
                                <Box className='contact-conatainer'>
                                    <Grid>


                                        <Grid.Col md={6} lg={6}>


                                            <Box mt="lg" mx="auto" >
                                                <Grid>

                                                    <Grid.Col md={12} lg={12} sm={12}>
                                                        <TextInput label={<Text className='label-text'>First Name</Text>} placeholder="Enter First Name"
                                                            size="md" />
                                                    </Grid.Col>
                                                    <Grid.Col md={12} lg={12} sm={12}>

                                                        <TextInput label={<Text className='label-text'>Last Name</Text>} placeholder="Enter Last Name"
                                                            size="md"
                                                        />
                                                    </Grid.Col>


                                                    <Grid.Col>
                                                        <TextInput label={<Text className='label-text'>Email</Text>} placeholder="Enter your email"
                                                            size="md"
                                                        />
                                                    </Grid.Col>


                                                    <Grid.Col md={6} lg={6} sm={12}>
                                                        <PasswordInput label={<Text className='label-text'>Password</Text>} placeholder="Password"

                                                        />
                                                    </Grid.Col>
                                                    <Grid.Col md={6} lg={6} sm={12}>
                                                        <PasswordInput label={<Text className='label-text'>New Password</Text>} placeholder="Confirm Password"

                                                        />
                                                    </Grid.Col>
                                                </Grid>
                                                <Center>
                                                    <Button type='submit' color="dark" mt="md">Submit</Button>
                                                </Center>
                                            </Box>
                                        </Grid.Col>

                                    </Grid>
                                </Box>
                            </Center>
                        </Grid.Col>
                    </Grid>

                </Container>
            </Box>

            <Box style={{ background: "black", color: "#fff" }}>
                <Container size="90%" p={50}>
                    <Grid>
                        <Grid.Col md={3}>
                            <Center>


                                <List spacing="sm" sx={(theme) => ({ color: "#fff", listStyle: "none", cursor: "pointer", lineHeight: "10" })}>
                                    <Center>

                                        <Text sx={(theme) => ({ fontSize: "30px", fontWeight: 700, color: "#ff5829", })}>LOGO</Text>
                                    </Center>
                                    

                                        <List.Item>Licence Number: 123-456-7890</List.Item>
                                        <List.Item >© 2035 by Fly Right Movers.</List.Item>
                                        <List.Item>power and secured by WX</List.Item>
                                    
                                </List>
                            </Center>
                        </Grid.Col>
                        <Grid.Col md={3}>
                            <Center>


                                <List spacing="sm" sx={(theme) => ({ color: "#fff", listStyle: "none", cursor: "pointer", lineHeight: "10" })}>
                                    <Text mb="md" sx={(theme) => ({
                                        fontSize: "20px",
                                        fontWeight: 700
                                    })}> CONTACT</Text>

                                    <List.Item>Phone: 123-456-7890 </List.Item>
                                    <List.Item>Email: info@mysite.com</List.Item>
                                    <List.Item>500 Terry Francine Street,</List.Item>
                                    <List.Item>San Francisco, CA 94158</List.Item>

                                </List>
                            </Center>
                        </Grid.Col>
                        <Grid.Col md={3}>


                            <Center>


                                <List spacing="sm" sx={(theme) => ({ color: "#fff", listStyle: "none", cursor: "pointer", lineHeight: "10" })}>
                                    <Text mb="md" sx={(theme) => ({
                                        fontSize: "20px",
                                        fontWeight: 700
                                    })}>
                                        WORKING HOURS</Text>
                                    <List.Item>
                                        Mon - Fri: 8am - 8pm

                                    </List.Item>
                                    <List.Item>
                                        Saturday: 9am - 7pm
                                        .</List.Item>

                                    <List.Item>
                                        Sunday: 9am - 8pm

                                    </List.Item>

                                </List>
                            </Center>
                        </Grid.Col>
                        <Grid.Col md={3}>


                            <Center>


                                <List spacing="sm" sx={(theme) => ({ color: "#fff", listStyle: "none", cursor: "pointer", lineHeight: "10" })}>

                                    <Text mb="md" sx={(theme) => ({
                                        fontSize: "20px",
                                        fontWeight: 700
                                    })}>
                                        WORKING HOURS</Text>
                                    <List.Item>Locations

                                    </List.Item>
                                    <List.Item>
                                        Tips

                                    </List.Item>
                                    <List.Item>
                                        FAQs

                                    </List.Item>
                                    <List.Item>

                                        Privacy & Terms
                                    </List.Item>
                                </List>

                            </Center>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
