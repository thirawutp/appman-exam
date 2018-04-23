import React from 'react'

import withLoginFormState from './containers/withLoginFormState'
import LoginDialog from './components/LoginDialog'

const LoginDialogWithFormState = withLoginFormState(LoginDialog)

class App extends React.Component {
  render () {
    // start your code here
    return (
      <div className='app-container child-center'>
        <LoginDialogWithFormState />
      </div>
    )
  }
}

export default App
