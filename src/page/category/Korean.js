import React, { useEffect } from "react";
import { useRestaurant, useLoading, CTLoading } from "../../components";
import Store from "./Store";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

const Korean = () => {
  const { loading, setLoading } = useLoading(true);
  const { listAllRestaurants, restaurantList } = useRestaurant();

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllRestaurants("korean");
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
    console.log(restaurantList.results);
  }, []);

  return loading ? (
    <CTLoading />
  ) : (
    <Wrapper>
      {restaurantList.results.map((item) => {
        return <Store key={item._id} data={item} />;
      })}
    </Wrapper>
  );
};

export default Korean;
