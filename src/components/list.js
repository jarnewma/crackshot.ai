import React from "react";
import { Flex, Box, IconButton } from "theme-ui";
import styles from 'style/list'

export default function List({ items = [], parentStyle, childStyle }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}
    >
      {items.map((item, i) => (
        <Flex
          className={item.isAvailable ? "open" : "closed"}
          as="li"
          sx={{ ...childStyle }}
          key={i}
        >
          <IconButton sx={styles.listIcon} aria-label="list icon">
            {item.icon}
          </IconButton>
          {item.text}
        </Flex>
      ))}
    </Box>
  );
}


