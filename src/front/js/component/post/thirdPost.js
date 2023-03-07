import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Checkbox } from '@material-ui/core';
import { Avatar, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { Favorite, LocationOn, FavoriteBorder } from '@material-ui/icons';
import { FormControlLabel } from '@material-ui/core';



export function ThirdPost() {
    
return (
    <Card style={{ margin: 'auto', maxWidth: 650 }}>
    <CardHeader
        avatar={
        <Avatar style={{ backgroundColor: purple[500] }}>
            <LocationOn />
        </Avatar>
        }
        title="Palm Beach"
    />
    <CardMedia
        component="img"
        height="450"
        image="https://images.pexels.com/photos/33191/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Jet Skiing"
    />
    <CardContent>
        <Typography>
        I absoulutely loving jet skiing, it's my favorite thing to do when I come to the beach.
        </Typography>
    </CardContent>
    <CardActions disableSpacing>
    <FormControlLabel
        control = {
            <Checkbox
                icon = {<FavoriteBorder />}
                checkedIcon = {<Favorite />}
            />
        }
        label = "Like"
    />
    </CardActions>
    </Card>
    
);
}