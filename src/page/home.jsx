import TitleEl from "../component/common/Title";
import React from "react";
import Layout from "../component/common/Layout";
import useRouteUpdater from "../hooks/useRouterUpdater";
import { route } from "../component/common/Routes";

const Home = () => {
  const routeUpdater = useRouteUpdater();

  return (
    <div>
      <Layout>
        <TitleEl />
        <button onClick={() => routeUpdater(route.social)}>Social</button>
      </Layout>
    </div>
  );
};

export default Home;
