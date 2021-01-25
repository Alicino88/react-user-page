import Home from "./Home";
import DetailPage from "./DetailPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Body = () => {
  return (
    <div className="content">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/*:id is a URL paramenter, when we click on the link on the card component :id
          takes the same value of the link. This is then pulled into an object thanks to the params hook.
          The params hook connects to the router and pulls out any URL paramenter into an object inside the 
          component where it is then used.*/}
          <Route exact path="/:id">
            <DetailPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Body;
