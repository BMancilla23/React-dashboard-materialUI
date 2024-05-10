import { Box, Container, Link, Stack, Typography } from "@mui/material"

const MENUITEMS = [
  {
    name: 'Sobre Nosotros'
  },
  {
    name: 'Ayuda'
  },
  {
    name: 'Contáctanos'
  }
] as const;

export const Footer = () => {
  return (
    <Container component={'footer'} maxWidth={'xl'} sx={{ backgroundColor: theme => theme.palette.primary.main }}>
      <Box paddingY={4}>
        <Stack direction={{ md: 'column', lg: 'row' }} rowGap={{ xs: 4, md: 4 }} justifyContent={'space-between'}>
          <Box>
            <Typography textAlign={{ xs: 'center', md: 'center' }} variant="body2" component={'p'}>
              &copy; 2024 Tema AdminTo | Todos los derechos reservados por Adev
            </Typography>
          </Box>
          <Box color={theme => theme.palette.text.primary} display={'flex'} justifyContent={{ xs: 'center', md: 'center', xl: 'space-between' }} columnGap={{ xs: 2, md: 2, lg: 4 }}>
            {
              MENUITEMS.map(({ name }, index) => (
                <Link key={index} color={'inherit'} underline="none">{name}</Link>
              ))
            }
          </Box>
        </Stack>
      </Box>

    </Container>
  )
}
