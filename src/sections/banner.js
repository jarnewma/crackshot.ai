/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import BannerImg from "assets/architecture.jpeg";
import styles from "style/banner"


export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Crackshot AI
          </Heading>
          <Text as="p" variant="heroSecondary">
            The Future of Road Repair
          </Text>
          {/* <Button variant="primary"> Explore </Button> */}
          <Box sx={styles.banner.imageBox}>
            <Image src={BannerImg} alt='banner' />
          </Box>
        </Box>
      </Container>
    </section>
  );
}


