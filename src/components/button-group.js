/** @jsx jsx */
import { jsx, Box, Container, Flex } from 'theme-ui';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import styles from 'style/button-group'

export default function ButtonGroup({ next, previous }) {
  return (
    <Flex sx={{width: '100%'}}>
      <Container>
        <Box sx={styles.buttonGroup} className="button__group">
          <button onClick={previous} aria-label="Previous">
            <IoIosArrowRoundBack />
          </button>
          <button onClick={previous} aria-label="Next">
            <IoIosArrowRoundForward />
          </button>
        </Box>
      </Container>
    </Flex>
  );
}


