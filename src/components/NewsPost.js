import React from 'react';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';


const NewsPost = ({news}) => {
    const {title, author, image_url,} = news
    const { img, name, published_date } = author
    
    return (
        <Card sx={{margin:5 , boxShadow: 3}}  >
            <CardHeader
                avatar={
                    <Avatar  src={img} alt={name} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton >
                }
                title={name}
                subheader={published_date}
            />
            <CardMedia
                component="img"
                height="20%"
                image={image_url}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {title}
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

export default NewsPost;