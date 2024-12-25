"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const [userId, setUserId] = useState("");
  const [orders, setOrders] = useState([]);
  const params = useSearchParams();

  const getOrders = async () => {
    try {
      const userId = params.get("userId");
      if (!userId) return;
      const url = `http://localhost:4000/user/cart/${userId}`;
      const response = await axios.get(url, { withCredentials: true });
      setOrders(response.data);
      console.log("Orders fetched:", response.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    const userIdFromParams = params.get("userId");
    if (userIdFromParams) {
      setUserId(userIdFromParams);
      getOrders();
    }
  }, [params]);

  if (!userId) {
    return <div className="text-center mt-[10vh]">No user ID provided.</div>;
  }

  return (
    <>
      <h1 className="mt-[10vh] text-center font-semibold text-xl">Your Orders:</h1>
      <div className="justify-center md:ml-8 flex flex-wrap gap-8">
        {orders.map((order) => (
          <Link
            key={order._id}
            href={{
              pathname: '/product',
              query: { id: order.productId, userId: order.userId },
            }}
          >
            <div className="md:w-[30vw] flex flex-row md:flex-col w-[90vw] h-[20vh] md:h-[60vh] bg-pink-100 rounded-3xl">
              <img
                className="w-[30vw] h-[20vh] md:h-[45vh] md:rounded-t-3xl rounded-l-3xl"
                src={order.product[0]?.image || "/default-image.jpg"}
                alt={order.productName}
              />
              <div className="text-center md:pl-0 md:pt-0 pl-[5vw] pt-[1.5vh] text-black text-xl">
                <h1><span className="font-semibold">Order Name:</span> {order.productName}</h1>
                <h1><span className="font-semibold">Order Price:</span> {order.productPrice}₹</h1>
                <h1><span className="font-semibold">Order Status:</span> {order.status}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
