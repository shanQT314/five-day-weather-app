
const styles = {
    mainPage: {
      backgroundSize: 'cover',
      backgroundImage: "url('pattern.svg')",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%'
    },
    searchButton: {
      margin: '10px'
    },
    forecastHeader: {
      color: '#000',
      marginBottom: '10px',
      marginTop: '40px',
      fontSize: '45px',
      fontWeight: '100',
      textAlign: 'center'
    },
    forecastSubheader: {
      color: '#000',
      marginBottom: '10px',
      fontSize: '30px',
      fontWeight: '100',
      textAlign: 'center'
    },
    forecastContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      margin: '50px 10%',
    },
    dayForecastContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      marginBottom: '20px'
    },
    dayForecastHeader: {
      textAlign: 'center',
      color: '#aaa',
      marginBottom: '10px',
      fontSize: '20px',
      fontWeight: '100',
    },
    dayDetailContainer: {
      marginTop: '30px',
      textAlign: 'center',
      color: 'black',
      marginBottom: '10px',
      fontSize: '20px',
      fontWeight: '100',
    },
    SearchBar: {
        margin: "0rem 0rem 0rem 0rem",
        display: "flex",
        justifyContent: "space-between",
        background: "rgb(255, 110, 70)",
        color: "#fff",
        padding: "10px",
        flexDirection: "row"
      },
      SearchBoxDiv: {
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection: "column"
      } 

  };
  
  export default styles;