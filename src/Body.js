import Home from "./Home";
import DetailPage from "./DetailPage";
import { Route, Switch } from "react-router-dom";

const Body = () => {
  return (
    <div className="content">
      {/*the switch component is to make sure only one component renders at once*/}
      <Switch>
        {/*the exact prop is to make sure that a component is rendered only when
            the path is exactly the same and not just part of it*/}
        <Route exact path="/">
          <Home />
        </Route>
        {/*:id is a URL paramenter, when we click on the link on the card component then its value
          becomes the value of the path. This value is then pulled into an object thanks to the params hook.
          The params hook connects to the router and pulls out any URL paramenter into an object inside the 
          component where it is then used.*/}
        <Route exact path="/:id">
          <DetailPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Body;
