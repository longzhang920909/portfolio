const fontFamily = 'Poppins, sans-serif';
const lineHeight = 1.75;
const shared = {
  margin: 0,
};

const text = {
  fontFamily,
  lineHeight,
  variants: {
    h1: {
      fontSize: '54px',
      fontWeight: 600,
      ...shared,
    },
    h2: {
      fontSize: '36px',
      fontWeight: 600,
      ...shared,
    },
    h3: {
      fontSize: '24px',
      fontWeight: 500,
      ...shared,
    },
    h4: {
      fontSize: '16px',
      fontWeight: 500,
      ...shared,
    },
    main: {
      fontSize: '16px',
      fontWeight: 400,
      ...shared,
    },
    small: {
      fontSize: '14px',
      fontWeight: 400,
      ...shared,
    },
    extraSmall: {
      fontSize: '12px',
      fontWeight: 400,
      ...shared,
    },
  },
};

export default text;
