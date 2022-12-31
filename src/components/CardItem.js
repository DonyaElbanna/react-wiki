import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Unstable_Grid2";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

const CardItem = ({ results }) => {
  return (
    <Grid
      xs={12}
      sm={8}
      md={9}
      container
      rowSpacing={5}
      columnSpacing={{ sm: 1, md: 2 }}
    >
      {results ? (
        results.map((result) => {
          let { id, name, image, origin, gender, location, species, status } =
            result;
          return (
            <Grid xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 400 }} key={id}>
                <div style={{ position: "relative" }}>
                  <Badge
                    color={
                      status === "Dead"
                        ? "error"
                        : status === "Alive"
                        ? "primary"
                        : "warning"
                    }
                    badgeContent={status}
                    style={{
                      position: "absolute",
                      top: "13px",
                      right: status === "unknown" ? "43px" : "27px",
                    }}
                  />
                  <CardMedia
                    component="img"
                    image={image}
                    alt={name + " image"}
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {result.name}
                  </Typography>
                  <Typography variant="body1" color="text.info">
                    Gender: {gender} <br></br>
                    Species: {species} <br></br>
                    Origin: {origin.name} <br></br>
                    Location: {location.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })
      ) : (
        <div>No Caharacters Found</div>
      )}
    </Grid>
  );
};

export default CardItem;
