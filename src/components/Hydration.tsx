"use client"
import {useEffect, useState } from "react"

export default function Hydration({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isHydration, setHydration] = useState(false)

  useEffect(() => {
    setHydration(true)
  }, [])

  return <>
    {isHydration ? <div>{children}</div> : null}
  </>
}
