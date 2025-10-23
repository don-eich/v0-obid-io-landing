"use client"

import { useEffect, useState } from "react"

interface AnimatedMetricProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedMetric({
  value,
  suffix = "",
  prefix = "",
  duration = 1250,
  className = "",
}: AnimatedMetricProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return (
    <span className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
