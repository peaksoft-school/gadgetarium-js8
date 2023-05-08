import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: {
      primary: {
        main: string
        headerFooter: string
        mainHover: string
        mainActive: string
        contrasText: string
        background: string
      }
      secondary: {
        main: string
        filterName: string
        black: string
        contrasText: string
        blue: string
        orange: string
      }
      tertiary: {
        firstGray: string
        secondGray: string
        thirdGray: string
        fourthGray: string
        fifthGray: string
      }
      error: {
        main: string
      }
      success: {
        main: string
        second: string
      }
    }
    customTypography: {
      mainfontFamily: string
      secondFontFamily: string
      fontSize: number
    }
  }

  interface ThemeOptions {
    customPalette?: {
      primary?: {
        main: string
        headerFooter: string
        mainHover: string
        mainActive: string
        contrasText: string
        background: string
      }
      secondary?: {
        main: string
        filterName: string
        black: string
        contrasText: string
        blue: string
        orange: string
      }
      tertiary?: {
        firstGray: string
        secondGray: string
        thirdGray: string
        fourthGray: string
        fifthGray: string
      }
      error?: {
        main: string
      }
      success?: {
        main: string
        second: string
      }
    }
    customTypography?: {
      mainfontFamily: string
      secondFontFamily: string
      fontSize: number
    }
  }
}

export const appTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          '&.MuiContainer-maxWidthLg': {
            maxWidth: '90%'
          }
        }
      }
    }
  },
  customPalette: {
    primary: {
      main: '#CB11AB',
      headerFooter: '#1A1A25',
      mainHover: '#E313BF',
      mainActive: '#C90EA9',
      contrasText: '#000',
      background: '#F4F4F4'
    },
    secondary: {
      main: '#5c5957',
      filterName: '#384255',
      black: '#292929',
      contrasText: '#fff',
      blue: '#2C68F5',
      orange: '#F99808'
    },
    tertiary: {
      firstGray: '#909CB5',
      secondGray: '#91969E',
      thirdGray: '#CDCDCD',
      fourthGray: '#E8E8E8',
      fifthGray: '#E0E2E7'
    },
    error: {
      main: '#F10000'
    },
    success: {
      main: '#2FC509',
      second: '#3CDE14'
    }
  },
  customTypography: {
    mainfontFamily: 'Inter',
    secondFontFamily: 'Ubuntu',
    fontSize: 16
  }
})
