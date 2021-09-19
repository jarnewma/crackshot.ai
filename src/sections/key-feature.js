/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import data from "data/key-feature"
import styles from "style/key-feature"



export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="A better way to handle road maintenance"
          title="Streamlined process for roadway assessment and estimation "
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn 
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}


