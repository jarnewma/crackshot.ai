/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';
import styles from 'style/feature-card';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} altText={altText} sx={styles.icon} />
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>

  );
}


