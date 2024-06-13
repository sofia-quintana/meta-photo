import { useEffect, useState } from 'react'
import PhotoItem from './PhotoItem'
import { Grid, Typography } from '@mui/material'
import { fetchPhotos } from '../utils/getData'

const PhotoList = ( { email, title, albumTitle, limit, offset } ) => { 
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetchPhotos(email,title, albumTitle, limit, offset).then((data) => setPhotos(data))
        console.log('photos', photos.length)
    }, [])

    return (
        <Grid container spacing={2}>
            { !photos.length && 
              <Typography variant="h4" align="center" paddingTop={15} gutterBottom>
                No photos found, click on back button and try again with different filters.
              </Typography>
            }
            { photos && photos.map((photo) => (
                <Grid item key={photo.id} xs={12} sm={6} md={4} lg={3}>
                    <PhotoItem photo={photo} />
                </Grid>
            ))}
        </Grid>
    )
}

export default PhotoList