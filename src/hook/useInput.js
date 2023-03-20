import { useState } from 'react'
import useValidation from './useValidation'

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setIsDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (someValue) => {
    setIsDirty(true)
    setValue(someValue)
  }

  return {
    isDirty,
    value,
    onChange,
    ...valid
  }
}

export default useInput
