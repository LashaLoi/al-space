import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useMemo,
} from 'react'

enum Page {
  HOME,
  CV,
  BLOG,
}

type GlobalStateContext = {
  pagesMounted: Array<Page>
  addPage: (page: Page) => void
}

const GlobalStateContext = createContext<GlobalStateContext>({
  pagesMounted: [],
  addPage: () => {},
})

export const GlobalStateProvider: React.FC = ({ children }) => {
  const [pagesMounted, setPagesMounted] = useState<Array<Page>>([])

  const addPage = useCallback((page: Page) => {
    setPagesMounted((pages) => [...pages, page])
  }, [])

  return (
    <GlobalStateContext.Provider
      value={{
        pagesMounted,
        addPage,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}

export const useGlobalStateContext = () =>
  useContext<GlobalStateContext>(GlobalStateContext)

export const useGlobalState = () => {
  const { pagesMounted } = useGlobalStateContext()

  const isHomeMounted = pagesMounted.some((page) => page === Page.HOME)
  const isCVMounted = pagesMounted.some((page) => page === Page.CV)
  const isBlogMounted = pagesMounted.some((page) => page === Page.BLOG)

  return useMemo(
    () => ({
      pagesMounted,
      isHomeMounted,
      isCVMounted,
      isBlogMounted,
    }),
    [pagesMounted, isHomeMounted, isCVMounted, isBlogMounted]
  )
}

export const useGlobalStateApi = () => {
  const { pagesMounted, addPage } = useGlobalStateContext()

  const handleAddPage = useCallback(
    (page: Page) => {
      const alreadyExists = pagesMounted.some(
        (mountedPage) => mountedPage === page
      )

      if (alreadyExists) {
        return
      }

      addPage(page)
    },
    [addPage]
  )

  const addHomePage = useCallback(() => {
    handleAddPage(Page.HOME)
  }, [handleAddPage])

  return useMemo(
    () => ({
      addPage: handleAddPage,
      addHomePage,
    }),
    [addPage]
  )
}
