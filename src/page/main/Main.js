import React, {useEffect} from "react";

import Sale from "./Sale";
import Order from "./Order";
import Review from "./Review";

import { useOrder, useLoading, CTLoading, useReview } from "../../components";

const Main = () => {
  const { loading, setLoading } = useLoading(true);
  const { listAllJointOrder, jointOrderList } = useOrder();
  const { reviewTodayList, listAllTodayReview } = useReview();

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllJointOrder();
        await listAllTodayReview();
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [])

  return loading ? 
  <CTLoading/> : (
    <>
      <Sale />
      <Review review={reviewTodayList} />
      <Order order={jointOrderList} />
    </>
  );
};

export default Main;
