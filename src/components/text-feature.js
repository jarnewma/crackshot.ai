/** @jsx jsx */
import { jsx, Box, Heading, Text, Button, Link } from 'theme-ui';
import styles from 'style/text-feature'

export default function TextFeature({
  subTitle,
  title,
  description,
  btnName,
  btnURL = '#',
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
        <Text as="p" sx={styles.wrapper.subTitle}>
          {subTitle}
        </Text>
        <Heading as="h2" sx={styles.wrapper.title}>
          {title}
        </Heading>
      </Box>

      {description && (
        <Text as="p" className="description" sx={styles.description}>
          {description}
        </Text>
      )}

      {btnName  && (
        <Link href={btnURL} variant="default">
          <Button variant="primary" aria-label={btnName}>
            {btnName}
          </Button>
        </Link>
      )}

    </Box>
  );
}


