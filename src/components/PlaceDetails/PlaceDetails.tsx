import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from '@material-ui/lab/Rating';

import useStyles from "./styles";

export interface Place {
    name: string;
    photo: any;
    price_level: string;
    ranking: string;
    awards: any;
    cuisine: Array<{key: string; name:string}> | undefined
    address: string;
    phone: string;
    web_url: string;
    website: string;
}

const PlaceDetails: React.FC<Place> = ({
    name,
    photo,
    price_level,
    ranking,
    awards,
    cuisine,
    address,
    phone,
    web_url,
    website
}) => {
    const classes = useStyles();

    return (
        <Card elevation={6}>
            <CardMedia
                style={{height: 350}}
                image={photo ? photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant='h6'>{name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant='subtitle1'>Price</Typography>
                    <Typography gutterBottom variant='subtitle1'>{price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant='subtitle1'>Ranking</Typography>
                    <Typography gutterBottom variant='subtitle1'>{ranking}</Typography>
                </Box>
                {awards?.map((award: any) => (
                    <Box my={1} display='flex' justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
                    </Box>
                ))}
                {cuisine?.map(({ name })=> (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                {address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon/> {address}
                    </Typography>
                )}
                {phone && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <PhoneIcon/> {phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>        
    );
}

export default PlaceDetails;