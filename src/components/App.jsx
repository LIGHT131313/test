export const App = () => {
  const envOne = process.env.REACT_APP_FIREBASE_API_KEY;
  const envTwo = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;


  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template< br/> {envOne} < br/>
      {envTwo}
    </div>
  );
};
