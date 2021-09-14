/** @jsx jsx */
import { jsx } from "theme-ui";
import { Text, Heading, Image, Box, Link } from "theme-ui";
import styles from 'style/team-card'

export default function TeamCard({ src, altText, title, designation, social }) {
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.memberThumb} />
      <Box>
        <Heading className="info__name" sx={styles.infoWrapper.name}>
          {title}
        </Heading>
        <Text className="info__designation" sx={styles.infoWrapper.designation}>
          { designation }
        </Text>
      </Box>
      <Box sx={styles.socialShare} className="social__share">
        {social.map((item) => (
          <Link key={item.id} href={item.path} className={item.name}>
            {item.icon}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

