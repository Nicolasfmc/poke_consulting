import React from 'react'
import {
  Button as ButtonMui,
  ThemeProvider,
  createTheme,
  ButtonProps,
  PaletteOptions,
} from '@mui/material'
import colors from '../../utils/colors'

export interface ButtonDisprops extends ButtonProps {
  width?: string
  height?: string
  fontSize?: string
  fontWeight?: string
  borderRadius?: string
  textTransform?: 'uppercase' | 'none'
}

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.white,
    },
    background: {
      default: colors.background,
    },
    text: {
      primary: colors.titleText,
      secondary: colors.subText,
    },
    success: {
      main: colors.success,
      contrastText: colors.white,
    },
    error: {
      main: colors.error,
      contrastText: colors.white,
    },
    action: {
      disabledBackground: '#E0E0E0',
      disabled: '#CBCBCB',
    },
  } as PaletteOptions,
})

const Button = React.forwardRef<HTMLButtonElement, ButtonDisprops>(
  (
    {
      width,
      height,
      children,
      fontSize,
      fontWeight,
      borderRadius,
      textTransform,
      variant = 'contained',
      ...rest
    }: ButtonDisprops,
    ref,
  ) => {
    return (
      <ThemeProvider theme={theme}>
        <ButtonMui
          ref={ref}
          sx={{
            '&.MuiButton-root': {
              fontSize: fontSize ?? '14px',
              fontWeight: fontWeight ?? '600',
              fontFamily: 'Varela Round',
              textTransform: textTransform ?? 'none',
              borderRadius: borderRadius ?? '8px',
              width,
              height,
            },
          }}
          variant={variant}
          {...rest}
        >
          {children}
        </ButtonMui>
      </ThemeProvider>
    )
  },
)

Button.displayName = 'Button'

export default Button
