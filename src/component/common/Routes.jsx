import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../page/home";
import Social from "../../page/social";
import Layout from "./Layout";

export const route = {
  home: "/",
  social: "/social",
};

const Routes = () => {
  return (
    <Switch>
      <Route exact path={route.home} render={(props) => <Home {...props} />} />
      <Route
        exact
        path={route.social}
        render={(props) => <Social {...props} />}
      />
      <Route
        component={() => (
          <Layout>
            <h1>404 Error - Page not found</h1>
          </Layout>
        )}
      />
    </Switch>
  );
};

export default Routes;
