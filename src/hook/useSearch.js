import { useContext } from 'react'
import { SearchContext } from '../hoc/SearchProvider'

export function useSearch () {
  return useContext(SearchContext)
}
