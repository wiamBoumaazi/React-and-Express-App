import React from "react";
import { connect } from "react-redux";
import { setYear, buttonClicked, setResponse } from "../redux/actions/userActions";
import { TextField, Button, Grid, Box } from "@material-ui/core";

const Movie = ({ year, loadingState, dispatch, response }) => {
  if (loadingState === "loading") {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div>
      <h2 className="App">Popular Movie</h2>
      <div className="App">
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item align-items-xs="flex-end">
            <TextField
              id="input-field"
              size="small"
              label="Year"
              variant="outlined"
              value={year}
              onChange={e => {
                dispatch(setYear(e.target.value))
                dispatch(setResponse("will be displayed here"))
              }}
            />
          </Grid>
          <Grid item align-items-xs="flex-start">
            <Button
              id="fetch-data"
              variant="contained"
              color="primary"
              onClick={() => dispatch(buttonClicked())}
              size="small"
            >
              Get Popular Movie
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className="response">
        <Box>
          {loadingState === "Error" && <b>Invalid Year</b>}
          {response && (
            <p>Popular Movie for year{" "}
              <b>{year}: {response}
              </b>
            </p>
          )}
        </Box>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    year: state.userReducer.year,
    loadingState: state.userReducer.loadingState,
    response: state.userReducer.response
  };
};
export default connect(mapStateToProps)(Movie);
