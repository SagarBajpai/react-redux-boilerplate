import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeLoader } from "./Home.actions";
import { goToProfilePage, fetchSomeData } from "./Home.middleware";

const Home = () => {
  const dispatch = useDispatch();
  const HomeState = useSelector((state) => state.Home);
  const history = useHistory();

  const [data, setData] = useState(HomeState.apiData);

  useEffect(() => {
    setData(HomeState.apiData);
  }, [HomeState.apiData]);

  console.log(HomeState);
  return (
    <div>
      <button onClick={() => dispatch(goToProfilePage(history))}>
        Test Routing : Click to Go To Profile
      </button>
      <br />
      <button onClick={() => dispatch(changeLoader(!HomeState.loading))}>
        Check normal state update in Redux using dispatching Actions : Change{" "}
        <i>Loading</i> state
      </button>
      <h4>Loading : {HomeState.loading ? "True" : "False"}</h4>
      <button onClick={() => dispatch(fetchSomeData())}>
        Click here to fetch some Data from API:
      </button>
      <ul>
        {data.map((todo) => {
          return <li key={todo.title}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
