import React, {Component} from 'react'
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : []
    }
  }

  async handleDelete(e){
    const response = await axios.get('http://127.0.0.1:3000/api/delete/' + e)

    console.log(response)
    this.getData()
  }

  async getData(){
    const response = await axios.get('http://127.0.0.1:3000/api/get')

    this.setState({
      data : response.data.query
    })

    console.log(response)
  }

  componentDidMount(){
    this.getData()
  }

  render(){
    return(
      <Container>
      <Link to="/addFilm">Tambah Data</Link>
      <TableContainer style={{ marginTop : "50px"}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Film Title</TableCell>
            <TableCell align="right">Released</TableCell>
            <TableCell align="right">Studio</TableCell>
            <TableCell align="right">Worldwide Gross</TableCell>
            <TableCell align="right">Domestic Gross</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.data.length > 0 ? this.state.data.map((row) => (
            <TableRow key={row.film_title}>
              <TableCell component="th" scope="row">
                {row.film_title}
              </TableCell>
              <TableCell align="right">{row.released}</TableCell>
              <TableCell align="right">{row.studio}</TableCell>
              <TableCell align="right">{row.worldwide_gross}</TableCell>
              <TableCell align="right">{row.domestic_gross}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary">
                  <Link to={`/editFilm/` + row.id}>Edit</Link>
                </Button>
                <Button variant="contained" color="secondary" onClick={() => this.handleDelete(row.id)}>
                  Hapus
                </Button>
              </TableCell>
            </TableRow>
          )) : <TableRow>
            <TableCell component="th" scope="row">
              Tidak Ada Data
            </TableCell>
          </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    )
  }
}
