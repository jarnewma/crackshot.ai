/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import BannerImg from "assets/banner-thumb.png";
import styles from "style/banner"


export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Top Quality AI Shit
          </Heading>
          <Text as="p" variant="heroSecondary">
            This is the place to go... oh, the places you'll go!
          </Text>
          <Button variant="primary"> Explore </Button>
          <Box sx={styles.banner.imageBox}>
            <Image src={BannerImg} alt='banner' />
          </Box>
        </Box>
      </Container>
    </section>
  );
}


