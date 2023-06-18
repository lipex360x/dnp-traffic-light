'use client'

import { useState } from "react"
import { Light } from "../Light"

import styles from './styles.module.scss'

const colors = ['red', 'orange', 'green']

export const TrafficLight = () => {
  const [light, setLight] = useState('')

  return (
    <div className={styles.component}>
      {colors.map((color) => (
        <Light key={color} color={color} light={light} setLight={setLight} />
      ))}
    </div>
  )
}
