import { PaletteMode } from '@mui/material';
/* import { amber, deepOrange, grey } from '@mui/material/colors'; */
/* const theme = {
  palette: {
    primary: amber,
  },
}; */

/* export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
   
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
        
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});
*/
/* export default theme; */

// Función que devuelve los tokens de diseño dependiendo del modo
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Valores de la paleta para el modo claro
          primary: {
            main: '#FFFFFF', // Color del AppBar
          },
          secondary: {
            main: '#F7F7F7',
          },
          text: {
            primary: '#1B1A1B',
            secondary: '#FFFFFF',
          },
          background: {
            default: '#f8fafc', // Fondo de la página
          },
        }
      : {
          // Valores de la paleta para el modo oscuro
          primary: {
            main: '#111827',
          },
          secondary: {
            main: '#1f2937',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#1B1A1B',
          },
          background: {
            default: '#1f2937',
          },
        }),
  },
});
