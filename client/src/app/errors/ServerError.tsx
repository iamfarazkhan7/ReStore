import { Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ServerError() {
  const { state } = useLocation();
  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant="h3" color="secondary" gutterBottom>
            {state.error.title}
          </Typography>
          <Divider />
          <Typography variant="body1">
            {state.error.detail || "Internal Server Error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h3" color="secondary" gutterBottom>
          Internal Server Error
        </Typography>
      )}
      <Typography gutterBottom variant="h5">
        Server error
      </Typography>
    </Container>
  );
}
