'use client'

import { useEffect, useState } from 'react'
import BinaryStream from './BinaryStream'

export default function BinaryStreamWrapper(props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? <BinaryStream {...props} /> : null
}
