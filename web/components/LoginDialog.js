import React from 'react'
import '../styles/index.scss'

export default ({ onLoginFormSubmit, onLoginFormChangeByFieldName, loginState, isLoading }) => {
  return (
    <form className='LoginDialog' onSubmit={(e) => e.preventDefault()}>
      <img width='180' src={require('../logo.svg')} className={`${isLoading ? 'logo-spin' : ''}`} />
      <div className='LoginDialog__input-row'>
        <label dangerouslySetInnerHTML={{ __html: 'E-mail address' }} />
        <input
          onChange={onLoginFormChangeByFieldName('email')}
          value={loginState.email}
          className='LoginDialog__email-input'
          name='email'
          placeholder='email...' />
      </div>
      <div className='LoginDialog__input-row'>
        <label dangerouslySetInnerHTML={{ __html: 'Password' }} />
        <input
          value={loginState.password}
          onChange={onLoginFormChangeByFieldName('password')}
          className='LoginDialog__password-input'
          placeholder='password...' type='password'
          name='password' />
      </div>
      <p className='LoginDialog__error-msg' dangerouslySetInnerHTML={{__html: loginState.errorMsg}} />
      <button onClick={onLoginFormSubmit} className='LoginDialog__submit-button' dangerouslySetInnerHTML={{ __html: 'sign in' }} />
      <div className='LoginDialog__action-link-wrapper'>
        <a dangerouslySetInnerHTML={{ __html: 'Forgot password?' }} />
        <a dangerouslySetInnerHTML={{ __html: 'Create a new account' }} />
      </div>
    </form>
  )
}
