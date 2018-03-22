
import { compose, withState, withProps } from 'recompose'

export default compose(
  withState('isLoading', 'setIsLoading', false),
  withState('loginState', 'setLoginState', { email: '', password: '', errorMsg: null }),
  withProps(props => {
    return {
      onLoginFormChangeByFieldName: (fieldName) => (e) => props.setLoginState({ ...props.loginState, [fieldName]: e.target.value }),
      onLoginFormSubmit: async () => {
        props.setLoginState({
          ...props.loginState,
          errorMsg: undefined
        })

        props.setIsLoading(true)

        const { email, password } = props.loginState
        const resp = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        })

        const result = await resp.json()
        if (resp.status >= 400) {
          props.setLoginState({
            ...props.loginState,
            errorMsg: result.msg
          })
        } else if (resp.status === 200) {
          alert('Login Successed')
        } else {
          alert('Something went wrong')
        }

        props.setIsLoading(false)
      }
    }
  })
)
