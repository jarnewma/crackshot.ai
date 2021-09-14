import { Box, Card, Text, Heading, Button } from 'theme-ui';
import React from 'react';
import List from './list';
import styles from 'style/price-card'

export default function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    buttonText = 'Start Free Trial',
    anotherOption,
    points,
  },
}) {
  return (
    <Card
    className={header ? 'package__card active' : 'package__card'}
    sx={styles.pricingBox}
    >
      {header && <Text sx={styles.header}>{header}</Text>}
      <Box>
        <Box className='package__header' sx={styles.pricingHeader}>
          <Heading className="package__name" variant="title">
            {name}
          </Heading>
          <Text as="p">{description}</Text>
        </Box>
        <List items={points} childStyle={styles.listItem} />
        <Text className="package__price" sx={styles.price}>
          {priceWithUnit}
          <span>/Monthly</span>
        </Text>
        <Box sx={styles.buttonGroup}>
          <Button variant="primary" aria-label={buttonText}>
            {buttonText}
          </Button>
          {anotherOption && (
            <Button
            variant='textButton'
            className="free__trial"
            aria-label={anotherOption}
            sx={{color: 'black'}}
            >
              {anotherOption}
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
}


