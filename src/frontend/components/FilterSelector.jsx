import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const FilterSelector = ( { 
    users, 
    setSelectedTitle, 
    setSelectedAlbumTitle, 
    setSelectedLimit,
    setSelectedOffset,
    setSelectedEmail,
    selectedEmail, 
    handleSubmit 
} ) => {

  return (
    <div>
      <Grid container spacing={2}>
        <TextField  
          label={'Select'} 
          helperText={'Select an email address'}
          select
          value={selectedEmail || ''}
          onChange={(event) => setSelectedEmail(event.target.value)}
          margin='normal'
          fullWidth
        >
          {users.map((user) => (
            <MenuItem key={user.id} value={user.email}>
              {user.email}
            </MenuItem>
         ))}
        </TextField>
        <TextField 
          id='outlined-basic' 
          label='Photo Title' 
          variant='outlined' 
          margin='normal'
          onChange={(event) => setSelectedTitle(event.target.value)}
          fullWidth
          helperText={'Enter a photo title'}
        />
        <TextField 
          id='outlined-basic' 
          label='Album Title' 
          variant='outlined' 
          margin='normal'
          onChange={(event) => setSelectedAlbumTitle(event.target.value)}
          fullWidth
          helperText={'Enter an album title'}
        />
        <Grid container spacing={2} margin={1}> 
          <TextField
            id="outlined-number"
            label="Limit"
            type="number"
            
            onChange={(event) => setSelectedLimit(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{min: 0}}
          />
          <TextField
            id="outlined-number"
            label="Offset"
            type="number"
            onChange={(event) => setSelectedOffset(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{min: 0}}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default FilterSelector