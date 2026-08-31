import { useState, useEffect } from 'react'

interface CountdownValues {
  days: string
  hours: string
  minutes: string
  seconds: string
  expired: boolean
}

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

export function useCountdown(targetDate: string): CountdownValues {
  const [timeLeft, setTimeLeft] = useState<CountdownValues>(() =>
    calcTimeLeft(targetDate)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}

function calcTimeLeft(targetDate: string): CountdownValues {
  const diff = new Date(targetDate).getTime() - Date.now()

  if (diff <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00', expired: true }
  }

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    expired: false,
  }
}
