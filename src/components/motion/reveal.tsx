'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import type { Variants } from 'framer-motion'

const smoothEase: [number, number, number, number] = [0.2, 0.9, 0.24, 1]

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  amount?: number
}>

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.96,
  distance = 12,
  once = true,
  amount = 0.18,
}: RevealProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: distance, filter: 'blur(10px)' }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount, margin: '0px 0px -6% 0px' }}
      transition={{ duration: reducedMotion ? 0 : duration, delay, ease: smoothEase }}
    >
      {children}
    </motion.div>
  )
}

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.02,
    },
  },
}

type StaggerProps = PropsWithChildren<{
  className?: string
  once?: boolean
  amount?: number
}>

export function StaggerGroup({ children, className, once = true, amount = 0.14 }: StaggerProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={reducedMotion ? undefined : staggerContainer}
      initial={reducedMotion ? undefined : 'hidden'}
      whileInView={reducedMotion ? undefined : 'show'}
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = PropsWithChildren<{
  className?: string
  distance?: number
  duration?: number
}>

export function StaggerItem({ children, className, distance = 10, duration = 0.9 }: StaggerItemProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={
        reducedMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: distance, filter: 'blur(7px)' },
              show: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: {
                  duration,
                  ease: smoothEase,
                },
              },
            }
      }
    >
      {children}
    </motion.div>
  )
}
