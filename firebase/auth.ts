import './clientApp'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  UserCredential,
  OAuthCredential,
} from '@firebase/auth'

const provider = new GoogleAuthProvider()

const auth = getAuth()

export const signInWithGoogle = (
  cb: (user: UserCredential, credential: OAuthCredential | null) => void
) =>
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result)

    cb(result, credential)
  })
