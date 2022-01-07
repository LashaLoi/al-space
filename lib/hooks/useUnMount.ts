import { useEffect } from 'react'

export const useUnMount = (cb: () => void) => useEffect(() => () => cb(), [])
