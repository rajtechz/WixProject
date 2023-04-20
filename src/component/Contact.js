import { Box, Center, Container, Grid, Text, createStyles } from '@mantine/core'
import React from 'react'
import MapContainer from './MapContainer'
import FooterSection from './FooterSection'
import NavBar from './NavBar'
const useStyle = createStyles((theme) => ({
  contact: {
    height: "100vh",
    width: "100vw",

  },
  contactBox1: {
    background: "#ff5829",
    color: "#fff",
    fontWeight: 900,
    padding: "15%",

    display: "flex",
    fontSize: "350%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    "@media(max-width :991px)": {
      textAlign: "left",
    }

  },
  contactBox2: {
    display: "flex",
    textAlign: "auto",
    justifyContent: "center",
    alignItems: "center",
    padding: "15%"
  },
  contectbg: {
    background: "whitesmoke"
  },
  contectBoxLeft: {
    paddingLeft: "15%",
    textAlign: "right",
    fontSize: "350%",
    "@media(max-width :991px)": {
      textAlign: "left",
    }

  },
  contactBoxText: {
    padding: "15%",
    // fontWeight: 700,

  },
 
  textCenter: {
    height: "100%",
    // background: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "350%",
    fontWeight: 700,


  },
  mainText: {

    verticalAlign: "middle",
    fontWeight: 700,
  },



}))
export default function () {
  const { classes } = useStyle()
  return (
    <>
     <NavBar />
      <Box id='contact' className={classes.contact}>



        <Grid m={0} p={0}>
          <Grid.Col p={0} m={0} md={6} >
            <Box className={classes.contactBox1}>
              <Text style={{ marginTop: "0px", marginBottom: "0px" }}>

                Let’s Get <br /> You Moving</Text>
            </Box>
          </Grid.Col >
          <Grid.Col p={0} m={0} md={6} sm={12} className={classes.contectbg}>
            <Box className={classes.contactBox2}>
              <Text >
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
              </Text>
            </Box>
          </Grid.Col>
        </Grid >
        <Grid m={0} p={0}>
          <Grid.Col m={0} p={0} md={6} lg={6}>
            <Box className={classes.textCenter}>
              <Text className={classes.contactBoxText}>Fly Right  Movers <br />
                Main Office
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col m={0} p={0} md={6} lg={6}>
            <Box className={classes.textCenter2}>
              <Text className={classes.contactBoxText}>
                <b>Licence Number: 123-456-7890</b>  <br />
                <b>Phone: 123-456-7890 <br /></b>
                <b>Email: info@mysite.com <br /></b>

                500 Terry Francine Street,<br />
                San Francisco, CA 94158
              </Text>

            </Box>
          </Grid.Col>
        </Grid>





        <MapContainer />
        <FooterSection/>
      </Box>
    </>
  )
}
