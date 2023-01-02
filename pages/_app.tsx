import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={ false }>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
