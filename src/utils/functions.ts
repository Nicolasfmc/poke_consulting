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

export function formatPrice(value: number, br = false): string {
  if (br) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  } else {
    return `$${value}`
  }
}

export const defaultStyle: React.CSSProperties = {
  display: 'flex',
  width: window.innerWidth,
  padding: '18px',
  margin: 0,
  flexDirection: 'column',
  backgroundColor: colors.white,
}

/**
 * Formata uma string de data ISO para o formato dd/MM/yyyy.
 * @param isoDateString - A string de data no formato ISO 8601 (ex: 2024-05-28T00:00:00.000Z)
 * @returns A data formatada como dd/MM/yyyy
 */
export function formatDate(isoDateString: string): string {
  const date = new Date(isoDateString)

  // Extrair o dia, mês e ano
  const day = date.getUTCDate().toString().padStart(2, '0')
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0') // Meses começam do zero
  const year = date.getUTCFullYear()

  // Retornar a data formatada
  return `${day}/${month}/${year}`
}
