import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const PhotoItem = ({ photo }) => { 
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardMedia
            component="img"
            height="140"
            image={photo.thumbnailUrl}
            alt={photo.title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {photo.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Album: {photo.album.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                User: {photo.album.user.name}
            </Typography>
        </CardContent>
        </Card>
    )
}

export default PhotoItem