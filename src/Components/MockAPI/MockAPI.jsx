import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMock } from "../../redux/slice/mock";
import "./MockAPI.css";
export const MockAPI = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchMock());
  }, [dispatch]);

  console.log("state", state);
  if (state.mock.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div class="container">
      {state.mock.data.map((e) => (
       <figure>
       <img src={e.avatar} alt="Mountains"/>
       <figcaption>{e.name}</figcaption>
   </figure>
      ))}
    </div>
  );
};
