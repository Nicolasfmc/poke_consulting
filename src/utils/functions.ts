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

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

export const defaultStyle: React.CSSProperties = {
  display: 'flex',
  width: window.innerWidth,
  padding: '18px',
  margin: 0,
  flexDirection: 'column',
  backgroundColor: colors.white,
}
