const styles = {
    card: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flexShrink: 0,
      a: {
        m: ['0 auto', null, null, 0],
      },
    },
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      mt: -1,
      subTitle: {
        fontSize: [0, null, 1],
        color: 'primary',
        textTransform: 'uppercase',
        fontWeight: '700',
        mb: [2, 3],
        lineHeight: 1.5,
        letterSpacing: ['1.5px', null, '2px'],
      },
      title: {
        fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
        color: 'heading_secondary',
        lineHeight: [1.3, null, null, null, 1.2],
        fontWeight: '700',
        letterSpacing: '-.5px',
        mb: 5,
      },
    },
    description: {
      fontSize: ['15px', 2, null, null, null, '17px', null, 3],
      fontWeight: 400,
      lineHeight: [1.85, null, null, 2, null, '2.2'],
      color: 'text_secondary',
      mb: '30px',
    },
  };

  export default styles