"use client"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const NAV_ITEMS = [
  { label: "Intro", href: "hero" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
]

const Navbar = () => {
  const [cursorPosition, setCursorPosition] = useState({
    left: 0,
    opacity: 0,
  })
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null)
  // console.log({ StateOf: activeSectionId })

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.href))
    // console.log({ sections })

    const isMobile = window.innerWidth <= 768
    const observer = new IntersectionObserver(
      (entries) => {
        const sortedEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (sortedEntries.length > 0) {
          // Set the active section to the one with the largest intersection ratio
          setActiveSectionId(sortedEntries[0].target.id)
        }

        // entries.forEach((entry) => {
        //   if (entry.isIntersecting) {
        //     setActiveSectionId(entry.target.id)
        //   }
        // })
      },
      {
        threshold: isMobile ? 0.22 : 0.5, // Use a lower threshold on mobile to accommodate tall sections
      }
    )

    // Adding the observer to the Sections of Home Page
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    // Cleanup the observer
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <header className="sticky top-0 z-[999] w-full flex items-center justify-center p-2 pt-4 mb-[-88px]">
      <nav className=" w-[320px] sm:w-[480px] h-[48px] sm:h-[64px] bg-black-gradient rounded-[8px] sm:rounded-[14px] flex items-center justify-center overflow-hidden">
        <ul className="relative flex items-center justify-center gap-6 sm:gap-8 h-full">
          {NAV_ITEMS.map((item, index) => (
            <NavItem
              key={index}
              label={item.label}
              href={item.href}
              setCursorPosition={setCursorPosition}
              activeSectionId={activeSectionId}
            />
          ))}
          <Cursor position={cursorPosition} />
        </ul>
      </nav>
    </header>
  )
}

const NavItem = ({
  label,
  href,
  setCursorPosition,
  activeSectionId,
}: {
  label: string
  href: string
  setCursorPosition: React.Dispatch<
    React.SetStateAction<{ left: number; opacity: number }>
  >
  activeSectionId: string | null
}) => {
  const ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const setCursorOnScroll = () => {
      if (ref.current && activeSectionId) {
        if (ref.current.classList.contains(activeSectionId)) {
          const rect = ref.current.getBoundingClientRect()
          const center = ref.current.offsetLeft + rect.width / 2 - 8

          setCursorPosition({ left: center, opacity: 1 })
        }
      }
    }
    setCursorOnScroll()
  }, [activeSectionId, setCursorPosition])

  const handleMouseEnter = () => {
    // if (activeSectionId === href) {
    //   const center = ref.current.offsetLeft
    //   setCursorPosition({
    //     left: 0,
    //   })
    // }
    // if (ref.current) {
    //   const rect = ref.current.getBoundingClientRect()
    //   const center = ref.current.offsetLeft + rect.width / 2 - 8
    //   setCursorPosition({
    //     left: center,
    //   })
    // }
  }

  return (
    <li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className={`text-white relative text-sm sm:text-base ${href}`}
    >
      <Link href={`#${href}`}>{label}</Link>
    </li>
  )
}

const Cursor = ({
  position,
}: {
  position: { left: number; opacity: number }
}) => (
  <motion.span
    initial={{ left: 0, opacity: 0 }}
    animate={{
      left: position.left,
      opacity: position.opacity,
    }}
    className="absolute bottom-[-8px] w-4 h-4 bg-white rounded-full"
  />
)

export default Navbar
