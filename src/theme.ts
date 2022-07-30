export interface Theme {
  components?: Components;
}

type Components = {
  Button?: React.CSSProperties;
};

const theme: Theme = {
  components: {
    Button: {
      backgroundColor: '#0000ff',
      padding: '15px',
      borderRadius: '10px',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      fontFamily: "'Roboto', sans-serif;",
      fontWeight: 600,
    },
  },
};

export default theme;
