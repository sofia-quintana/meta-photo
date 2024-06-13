import { useEffect, useState } from 'react'
import { Container, Typography, Button } from '@mui/material'
import PhotoList from './PhotoList'
import FilterSelector from './FilterSelector'
import { fetchUsers } from '../utils/getData'

const Home = () => {
  const [users, setUsers] = useState([])
  const [selectedEmail, setSelectedEmail] = useState('')
  const [selectedTitle, setSelectedTitle] = useState('')
  const [selectedAlbumTitle, setSelectedAlbumTitle] = useState('')
  const [selectedLimit, setSelectedLimit] = useState(0)
  const [selectedOffset, setSelectedOffset] = useState(0)

  const [submitted, setSubmitted] = useState(false)  

  const handleButtonStates = () => { 
    const newShow = !submitted
    setSubmitted(newShow)
  }

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data))
  }, [])

  return (
    <Container>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Meta Photo
      </Typography>
      { !submitted &&
        <FilterSelector 
          users={users} 
          setSelectedTitle={setSelectedTitle}
          setSelectedAlbumTitle={setSelectedAlbumTitle}
          setSelectedLimit={setSelectedLimit}
          setSelectedOffset={setSelectedOffset}
          setSelectedEmail={setSelectedEmail} 
          selectedEmail={selectedEmail}
          handleSubmit={handleButtonStates}
        />
      }
      { submitted && <Button variant="contained" onClick={handleButtonStates}>Back</Button>}
      { submitted && 
        <PhotoList 
          email={selectedEmail} 
          title={selectedTitle}
          albumTitle={selectedAlbumTitle}
          limit={selectedLimit}
          offset={selectedOffset}
        />
      }
    </Container>
  )
}

export default Home
