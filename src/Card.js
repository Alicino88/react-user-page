import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
/*styles is a package to style the components. We could style the components with inline styling
but we cannot style them by writing a class in index.css and then using it here in the card component.
This option is called css inside javascript.*/
import { makeStyles } from "@material-ui/core/styles";

/*buttonStyle is a class which contains several styles.
 Inside this object I can put as many classes as I want. makeStyles is a function that, as arguments 
 takes an object containing a bunch of different classes.*/

const useStyles = makeStyles({
  buttonStyle: {
    color: "#040926",
    "&:hover": {
      color: "#C1EDCC",
      backgroundColor: "#040926",
    },
    borderColor: "#040926",
    border: "2px solid #040926",
    fontWeight: "600",
  },
  cardStyle: {
    fontFamily: "Oswald",
  },
});
/*to add props from the parent to the child component we need to add "props"as an argument to the component function.*/
const UserCard = (props) => {
  /*When we call useStyles this makes makesStyles generate all the classes and styles and store them inside the object classes*/
  const classes = useStyles();
  console.log(classes);
  return (
    <Card
      style={{
        height: "280px",
        width: "200px",
        backgroundColor: "#C1EDCC",
      }}
      className={classes.cardStyle}
    >
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <Avatar
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#040926",
              marginTop: "10px",
            }}
          >
            {props.name.charAt(0)}
          </Avatar>
        </div>

        <Typography
          /*the variant changes how the text lookslike*/
          variant="body1"
          /*the component changes the semantic underlying element*/
          component="h3"
          color="textSecondary"
          gutterBottom
          style={{ textAlign: "center", fontWeight: "600", color: "#040926" }}
        >
          {props.name}
        </Typography>
        <Typography
          variant="subtitle2"
          component="h2"
          style={{ textAlign: "center", color: "#7D2E68", fontWeight: "600" }}
        >
          {props.username}
        </Typography>

        <Typography
          variant="subtitle2"
          component="h2"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#7D2E68",
          }}
        >
          {props.website}
        </Typography>
      </CardContent>
      <CardActions>
        <div
          className="button-container"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/*below example of template literal containing a placeholder*/}
          <Link to={`/${props.id}`}>
            <Button
              className={classes.buttonStyle}
              variant="outlined"
              disableElevation
            >
              More details
            </Button>
          </Link>
        </div>
      </CardActions>
    </Card>
  );
};

export default UserCard;
