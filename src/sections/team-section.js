/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import styles from 'style/team-section'
import data from 'data/team-section'




export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
        slogan="our team"
        title="The most qualified and talented mofos around"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
              />
          ))}
        </Grid>
      </Container>
    </section>
  );
}


