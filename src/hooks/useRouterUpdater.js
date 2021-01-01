import { useHistory } from "react-router-dom";

const useRouteUpdater = () => {
  const history = useHistory();

  return (routeUrl) => {
    history.push(routeUrl);
  };
};

export default useRouteUpdater;
