const fontFamily = 'Poppins, sans-serif';
const lineHeight = 1.75;

const shared = {
  margin: 0,
};

const variants = {
  default: {
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
  mobile: {
    h1: {
      fontSize: '36px',
      fontWeight: 600,
      ...shared,
    },
    h2: {
      fontSize: '30px',
      fontWeight: 600,
      ...shared,
    },
    h3: {
      fontSize: '20px',
      fontWeight: 500,
      ...shared,
    },
    h4: {
      fontSize: '16px',
      fontWeight: 500,
      ...shared,
    },
    main: {
      fontSize: '14px',
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

const text = {
  fontFamily,
  lineHeight,
  variants,
};

export default text;
