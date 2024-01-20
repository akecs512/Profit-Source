import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import AboutPage from "./pages/AboutPage";

export const Routes = () => {
    return (
      <Router>
        <Switch>
            <Route path ="/">
                <AboutPage />
            </Route>
        </Switch>
      </Router>
    )
}

export default Routes;