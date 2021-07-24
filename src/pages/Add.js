import React , {Component} from 'react'
import axios from 'axios'
import { Card,CardContent,Container,TextField, Box,Button } from '@material-ui/core'

export default class Add extends Component{
  constructor(props){
    super(props)
    this.state = {
        film_title : '',
        released : '',
        studio : '',
        worldwide_gross : '',
        domestic_gross : ''
    }
  }

  // forms = [
  //   this.state.film_title,
  //   this.state.released,
  //   this.state.studio,
  //   this.state.worldwide_gross,
  //   this.state.domestic_gross,
  // ]

  handleSubmit = async(e) => {
    e.preventDefault()
    let response = await axios.post('http://127.0.0.1:3000/api/post', this.state)
    alert(response.data.message)
  }

  handleChangeTitle = (e) => {
    this.setState({film_title : e.target.value})
  }

  handleChangeReleased = (e) => {
    this.setState({released : e.target.value})
  }

  handleChangeStudio = (e) => {
    this.setState({studio : e.target.value})
  }
  handleChangeWorld = (e) => {
    this.setState({worldwide_gross : e.target.value})
  }
  handleChangeDominic = (e) => {
    this.setState({domestic_gross : e.target.value})
  }

  render(){

    return (
      <Container>
        <Card>
          <CardContent>
            <form onSubmit={this.handleSubmit}>
            <Box display="flex" flexDirection="column">
              <TextField value={this.state.film_title} label="Film Title" style={{ marginTop : "20px"}} variant="outlined" onChange={this.handleChangeTitle}/>
              <TextField value={this.state.released} label="Released" variant="outlined" style={{ marginTop : "20px"}} onChange={this.handleChangeReleased}/>
              <TextField label="Studio" value={this.state.studio} variant="outlined" style={{ marginTop : "20px"}} onChange={this.handleChangeStudio}/>
              <TextField label="Worldwide Gross" variant="outlined" value={this.state.worldwide_gross} style={{ marginTop : "20px"}} onChange={this.handleChangeWorld}/>
              <TextField label="Domestic Gross" variant="outlined" style={{ marginTop : "20px"}} value={this.state.domestic_gross} onChange={this.handleChangeDominic}/>
              <Button variant="contained" color="primary" type="submit">Submit</Button>
            </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    )
  }
}
