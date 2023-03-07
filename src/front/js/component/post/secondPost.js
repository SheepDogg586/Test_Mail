import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions} from '@material-ui/core';
import { Avatar, Typography } from '@material-ui/core';
import {purple} from '@material-ui/core/colors';
import { Favorite, FavoriteBorder, LocationOn } from '@material-ui/icons';
import { FormControlLabel, Checkbox } from '@material-ui/core';

export function SecondPost() {
    
return (
    <Card style={{ margin: 'auto', maxWidth: 650 }}>
        <CardHeader
            avatar={
        <Avatar style={{ backgroundColor: purple[500]}}>
            <LocationOn />
        </Avatar>
    }
    title="Delray Beach"
    />
    <CardMedia
        component="img"
        height="450"
        image="https://images.pexels.com/photos/3569749/pexels-photo-3569749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Surfing"
    />
    <CardContent>
        <Typography variant="body1">
            The waves are perfect today, it's a great day for SURFING!!!
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