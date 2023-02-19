import React from 'react';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';


const Post = ({post}) => {
    const {userName , userPhoto , postPhoto} = post ;
    return (
        <Card sx={{margin:5 , boxShadow: 3}}  >
            <CardHeader
                avatar={
                    <Avatar  src={userPhoto} alt={userName} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton >
                }
                title={userName}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="20%"
                image={postPhoto}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />

                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>

            </CardActions>

        </Card>
    );
};

export default Post;