import React from "react";
import { Card, CardHeader, CardMedia, CardContent, CardActions, FormControlLabel } from "@material-ui/core";
import { Avatar, Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { Favorite, LocationOn, FavoriteBorder } from "@material-ui/icons";
import { Checkbox} from "@material-ui/core";

export function FirstPost() {
  
  return (
    <Card style={{ margin: "auto", maxWidth: 650 }}>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: purple[500]}}>
            <LocationOn />
          </Avatar>
        }
        title="Miami Beach"
        />
        <CardMedia
          component="img"
          height="450"
          image="https://images.pexels.com/photos/3046637/pexels-photo-3046637.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Scuba Diving"
        />
        <CardContent>
          <Typography>
            I had an amazing time scuba diving today. I'm definently coming back again.
          </Typography>
        </CardContent>
      <CardActions disableSpacing>
        <FormControlLabel
          control={
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          }
          label="Like"
        />
      </CardActions>
    </Card>
  );
}