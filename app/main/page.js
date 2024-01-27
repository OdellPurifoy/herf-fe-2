'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
// import Hero from "./components/Hero";

export default function MainPage() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const loungeData = data?.lounges?.data

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No lounge data</p>

  return (
    <main>
      <Navbar />;{/* <Hero /> */}
      <ul>
        {loungeData.map((lounge) => (
          <li key={lounge.id}>
            <h1>{lounge.attributes.name}</h1>
            {lounge.attributes.email}
            {lounge.attributes.phone}
            {lounge.attributes.description}
          </li>
        ))}
      </ul>
    </main>
  )
}
