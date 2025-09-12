"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  words: string[]
  loop?: boolean
  cursor?: boolean
  cursorStyle?: string
  typeSpeed?: number
  deleteSpeed?: number
  delaySpeed?: number
}

export default function Typewriter({
  words,
  loop = true,
  cursor = true,
  cursorStyle = "|",
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (isWaiting) {
          setIsWaiting(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          // Deleting characters
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            // Finished deleting, move to next word
            setIsDeleting(false)
            setCurrentWordIndex((prev) => {
              const nextIndex = (prev + 1) % words.length
              // If we've completed all words and loop is false, stay on last word
              if (!loop && nextIndex === 0 && prev === words.length - 1) {
                return prev
              }
              return nextIndex
            })
          }
        } else {
          // Typing characters
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1))
          } else {
            // Finished typing, wait before deleting
            setIsWaiting(true)
          }
        }
      },
      isWaiting ? delaySpeed : isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, isWaiting, words, loop, typeSpeed, deleteSpeed, delaySpeed])

  return (
    <span>
      {currentText}
      {cursor && <span className="animate-blink text-primary">{cursorStyle}</span>}
    </span>
  )
}
