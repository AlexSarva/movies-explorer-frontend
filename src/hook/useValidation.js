import { useEffect, useState } from 'react'

const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [queryInputValid, setQueryInputValid] = useState(false)

  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  const usernamePattern = /^[a-zA-Zа-яА-ЯЁё\s-]{2,30}$/
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
          break
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true)
          break
        case 'usernameCheck':
          usernamePattern.test(value) ? setUsernameError(false) : setUsernameError(true)
          break
        case 'emailCheck':
          emailPattern.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
          break
        case 'passwordCheck':
          passwordPattern.test(value) ? setPasswordError(false) : setPasswordError(true)
          break
      }
    }
  }, [value])

  useEffect(() => {
    if (isEmpty || minLengthError) {
      setQueryInputValid(false)
    } else {
      setQueryInputValid(true)
    }
  }, [isEmpty, minLengthError])

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    usernameError,
    passwordError,
    queryInputValid
  }
}

export default useValidation
