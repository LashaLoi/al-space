import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react'
import { getAuth, User, UserCredential, OAuthCredential } from '@firebase/auth'
import { signInWithGoogle } from '../../firebase/auth'

interface UserContextProps {
  logOut: () => void
  signInWithGoogle: (
    cb: (user: UserCredential, credential: OAuthCredential | null) => void
  ) => void
  user: User | null
  loading: boolean
}

const UserContext = createContext<UserContextProps>({
  logOut: () => {},
  signInWithGoogle: () => {},
  user: null,
  loading: false,
})

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const auth = getAuth()

  useEffect(() => {
    setLoading(true)

    auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })
  }, [])

  const logOut = useCallback(() => auth.signOut(), [auth])

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        logOut,
        signInWithGoogle,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContent = () => useContext<UserContextProps>(UserContext)

export const useUserState = () => {
  const { user, loading } = useUserContent()

  return useMemo(
    () => ({
      user,
      loading,
    }),
    [user, loading]
  )
}

export const useUserApi = () => {
  const { logOut, signInWithGoogle } = useUserContent()

  return useMemo(
    () => ({ logOut, signInWithGoogle }),
    [logOut, signInWithGoogle]
  )
}
