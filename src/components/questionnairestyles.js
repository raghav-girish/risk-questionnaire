import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  toolBar: {
    borderRadius: 15,
    //margin: '10px',
    display: "flex",
    flexDirection: "row",
    //justifyContent: 'center',
    alignItems: "center",
    background: "#1976D2",
  },
  toolBar1: {
    borderRadius: 15,
    //margin: '10px',
    display: "flex",
    flexDirection: "row",
    //justifyContent: 'center',
    alignItems: "center",
    background: "#1976D2",
    height: "18px",
  },
  card: {
    width: "60%",
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "15px",
    marginBottom: "15px",
    backgroundColor:"#E3F2FD"
  },
  questionTypography: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#303F9F",
    marginBottom: "10px",
  },
  radio: {
    color: "#1976D2",
  },
}));
