import create from 'zustand'

const useThemeStore = create((set) => ({
  theme: 'light-1',
  setTheme: (theme) => set({ theme }),
}))

export default useThemeStore
