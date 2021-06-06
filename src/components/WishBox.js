import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  name: {
    margin: 30,
    width: 400,
  },
  location: {
    margin: 30,
    width: 300,
  },
  message: {
    margin: 30,
    width: 760,
  },
  button: {
    margin: 30,
    width: 200,
    fontSize: 15,
    fontWeight: 900,
  },
}));

function WishBox() {
  const classes = useStyles();
  return (
    <WishForm>
      <Header>
        <p className="text3">
          W<u>ishU</u>s 💐
        </p>
        {/* <FontAwesomeIcon icon={faAddressCard} className="camera" /> */}
      </Header>
      <FormBody>
        <div>
          <TextField className={classes.name} label="Name" variant="outlined" />
          <TextField
            className={classes.location}
            label="Location"
            variant="outlined"
          />
        </div>
        <TextField
          className={classes.message}
          multiline
          label="Message"
          variant="outlined"
        />
        <div>
          <Button
            className={classes.button}
            style={{ backgroundColor: "peru" }}
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </div>
      </FormBody>
    </WishForm>
  );
}

export default WishBox;

const WishForm = styled.div``;

const FormBody = styled.div`
  border-radius: 30px;
  margin: 20px;
  padding: 50px;
  background-color: silver;
`;

const Header = styled.div`
  margin-top: 0px;
  display: flex;
  align-items: center;
`;
