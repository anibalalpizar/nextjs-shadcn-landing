"use client"

import type { AnimatedProps } from "@/types/motion"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Sponsor {
  name: string
  darkLogo: string
  lightLogo: string
  href: string
}

const sponsors: Sponsor[] = [
  {
    name: "Vercel",
    darkLogo: "/sponsors/vercel-dark.svg",
    lightLogo: "/sponsors/vercel-light.svg",
    href: "https://vercel.com",
  },
  {
    name: "Next.js",
    darkLogo: "/sponsors/nextjs-dark.svg",
    lightLogo: "/sponsors/nextjs-light.svg",
    href: "https://nextjs.org",
  },
  {
    name: "Tailwind CSS",
    darkLogo: "/sponsors/tailwind-dark.svg",
    lightLogo: "/sponsors/tailwind-light.svg",
    href: "https://tailwindcss.com",
  },
  {
    name: "shadcn/ui",
    darkLogo: "/sponsors/shadcn-dark.svg",
    lightLogo: "/sponsors/shadcn-light.svg",
    href: "https://ui.shadcn.com",
  },
  {
    name: "TypeScript",
    darkLogo: "/sponsors/typescript-dark.svg",
    lightLogo: "/sponsors/typescript-light.svg",
    href: "https://www.typescriptlang.org",
  },
]

export function Sponsors({ id }: AnimatedProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id={id}
      className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12 bg-gradient-to-r text-transparent bg-clip-text">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-pink-600 dark:from-cyan-600 dark:to-cyan-700">
            Investors and founders
          </span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
          style={{ display: "flex", gap: "2rem" }}
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex flex-col items-center justify-center mx-8 group"
              style={{ width: "200px" }}
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={theme === "dark" ? sponsor.darkLogo : sponsor.lightLogo}
                  alt={sponsor.name}
                  fill
                  className="object-contain drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: "brightness(1.05)" }}
                />
              </div>
              <span className="text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {sponsor.name}
              </span>
            </a>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  )
}
