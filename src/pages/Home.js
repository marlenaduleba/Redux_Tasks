const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeigth: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Task manager welcome page 💁‍♀️</h1>
    </div>
  );
};
