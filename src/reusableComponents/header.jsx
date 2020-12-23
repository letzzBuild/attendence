import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Header(props) {
  return (
    <>
      <Container
        maxWidth="sm"
        style={{
          margin: 30,
          backgroundColor: props.bgColor,
          borderRadius: 5,
          padding: 20,
          color:props.color,
          width:500,
          border:props.border
        }}
      >
        <Typography style={{fontSize:20,fontWeight:'bold'}}>{props.data}</Typography>
      </Container>
    </>
  );
}
