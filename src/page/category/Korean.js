import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurant, useLoading, CTLoading } from "../../components";
import Store from "./Store";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Korean = () => {
  const { loading, setLoading } = useLoading(true);
  const { listAllRestaurants, restaurantList } = useRestaurant();
  const { category } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllRestaurants(category);
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
    console.log(restaurantList);
  }, [listAllRestaurants, setLoading]);

  return loading ? (
    <CTLoading />
  ) : (
    <Wrapper>
      {
      restaurantList.results.map((item) => {
        return <Store key={item._id} data={item} />;
      })
    }
    </Wrapper>
  );
};

export default Korean;
