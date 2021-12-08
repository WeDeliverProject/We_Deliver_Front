import React, { useEffect } from "react";
import { useRestaurant, useLoading, CTLoading } from "../../components";
import Store from "./Store";

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
  }, [listAllRestaurants, setLoading]);

  return loading ? (
    <CTLoading />
  ) : (
    restaurantList.results.map((item) => {
      return <Store key={item._id} data={item} />;
    })
  );
};

export default Korean;
