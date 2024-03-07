"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  const [mouseVariants, setMouseVariants] = useState("default")

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "pink",
      mixBlendMode: "multiply",
    },
  }

  const textEnter = () => {
    setMouseVariants("text")
  }

  const textLeave = () => {
    setMouseVariants("default")
  }

  return (
    <>
      <div className="absolute flex items-center justify-center w-screen h-screen bg-pink-200 ">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="font-bold text-pink-500 text-8xl"
        >
          Hello World
        </h1>
      </div>
      <motion.div
        variants={variants}
        animate={mouseVariants}
        className="pointer-events-none relative top-0 left-0 h-[32px] w-[32px] bg-black rounded-[50%]"
      ></motion.div>
    </>
  )
}
