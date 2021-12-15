import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    //borderRadius: 15,
    //margin: '10px',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#3949AB",
    height: 65,
    width: "60%",
    marginLeft: "20%",
    marginRight: "20%",
  },
  heading: {
    //color: 'rgba(0,183,255, 1)',
    color: "white",
    marginLeft: 20,
  },
  image: {
    //marginLeft: '15px',
  },
  container: {
    marginTop: 20,
  },
}));
