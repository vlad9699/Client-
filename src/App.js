import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { HomePage, SnackbarAll, NotFound, Authorization, Registration } from './components'

const App = () => {
  return (
    <>
      <SnackbarAll />
      <Router>
        <Switch>
          <Route exact path="/login" component={Authorization} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default App
