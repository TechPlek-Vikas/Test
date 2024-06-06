import { Box, Container, Typography } from "@mui/material";

function Test1() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Box
        sx={{
          height: "100px",
          backgroundColor: "#f0f0f0",
          padding: "0.5rem 3rem",
        }}
      >
        <Typography variant="body1">Fixed height content</Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          border: "1px solid red",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(247, 255, 192)",
        }}
      >
        <Box sx={{ backgroundColor: "aqua", padding: "5rem" }}>
          <Typography variant="h6">
            How Pune Porsche Teen Went From Essay Writing To Observation Home In
            3 Days
          </Typography>
        </Box>
        <Box sx={{ padding: "1rem", flexGrow: 1, overflowY: "auto" }}>
          {Array.from({ length: 50 }, (_, index) => (
            <Typography key={index} variant="body1" gutterBottom>
              Flexible height content
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Test1;
