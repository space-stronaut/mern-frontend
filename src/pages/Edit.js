import React from 'react'
import axios from 'axios'
import { Card,CardContent,Container,TextField, Box,Button } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Edit(){
  const [title, setTitle] = useState('')
  const [released, setReleased] = useState('')
  const [studio, setStudio] = useState('')
  const [world, setWorld] = useState('')
  const [domestic, setDomestic] = useState('')
  
  const forms = {
    film_title : title,
    released : released,
    studio : studio,
    worldwide_gross : world,
    domestic_gross : domestic
  }

  const params = useParams()

  const getData = async() => {
    let response = await axios.get('http://127.0.0.1:3000/api/get/' + params.id)

    console.log(response.data.query[0])
    setTitle(response.data.query[0].film_title)
    setReleased(response.data.query[0].released)
    setStudio(response.data.query[0].studio)
    setWorld(response.data.query[0].worldwide_gross)
    setDomestic(response.data.query[0].domestic_gross)
  }

  useEffect(() => {
    getData()
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault()
    let response = await axios.post('http://127.0.0.1:3000/api/edit/' + params.id, forms)

    alert(response.data.message)
  }

    return (
      <Container>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column">
              <TextField label="Film Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ marginTop : "20px"}} variant="outlined" />
              <TextField label="Released" value={released} variant="outlined" onChange={(e) => setReleased(e.target.value)} style={{ marginTop : "20px"}} />
              <TextField label="Studio" value={studio} variant="outlined" style={{ marginTop : "20px"}} onChange={(e) => setStudio(e.target.value)} />
              <TextField label="Worldwide Gross" value={world} variant="outlined" style={{ marginTop : "20px"}} onChange={(e) => setWorld(e.target.value)}/>
              <TextField label="Domestic Gross" value={domestic} variant="outlined" style={{ marginTop : "20px"}} onChange={(e) => setDomestic(e.target.value)}/>
              <Button variant="contained" color="primary" type="submit">Submit</Button>
            </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    )
}
