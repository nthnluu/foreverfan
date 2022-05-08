import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {FirebaseAuthProvider, useFirebaseAuth} from "../util/firebaseAuthHelpers";

function MyApp({ Component, pageProps }: AppProps) {
  const firebaseAuthState = useFirebaseAuth();
  return <FirebaseAuthProvider value={firebaseAuthState}>
    <Component {...pageProps} />
  </FirebaseAuthProvider>
}

export default MyApp
