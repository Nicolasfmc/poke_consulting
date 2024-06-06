import React, { useCallback, useEffect, useState } from 'react'
import colors from './colors'

export function useDimension(width: number): boolean {
  const [state, setState] = useState(false)

  const updateMobileState = useCallback(() => {
    const newMobile = window.innerWidth <= width
    if (newMobile !== state) {
      setState(newMobile)
    }
  }, [width, state])

  useEffect(() => {
    updateMobileState()

    window.addEventListener('resize', updateMobileState)

    return () => window.removeEventListener('resize', updateMobileState)
  }, [updateMobileState])

  return state
}

export const defaultStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  padding: '18px',
  flexDirection: 'column',
  backgroundColor: colors.white,
}
