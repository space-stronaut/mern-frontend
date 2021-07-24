import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Add from '../pages/Add'
import Edit from '../pages/Edit'

export default function Router(){
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/addFilm">
        <Add />
      </Route>
      <Route path="/editFilm/:id">
        <Edit />
      </Route>
    </Switch>
  )
}
