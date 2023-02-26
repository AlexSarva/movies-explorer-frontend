import { useEffect, useState } from 'react'
import { debounce } from '../utils/utils'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    const debouncedResize = debounce(handleResize, 300)

    window.addEventListener('resize', debouncedResize)
    return () => window.removeEventListener('resize', debouncedResize)
  }, [])
  return windowDimensions
}
