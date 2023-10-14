"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:4000/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No lounge data</p>;

  return <Navbar />;
}
