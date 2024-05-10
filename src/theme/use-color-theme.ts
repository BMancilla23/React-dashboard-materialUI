import { PaletteMode, createTheme } from '@mui/material';
import { useMemo, useState } from 'react';
import { getDesignTokens } from './theme';

export const useColorTheme = () => {
  const storedMode = localStorage.getItem('colorMode');
  const initialMode: PaletteMode = storedMode === 'dark' ? 'dark' : 'light';

  /* const [mode, setMode] = useState<PaletteMode>('light'); */
  const [mode, setMode] = useState<PaletteMode>(initialMode);

  const toggleColorMode = () => {
    /* setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light')); */
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('colorMode', newMode); // Guardar el nuevo modo en localstorage
  };

  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
