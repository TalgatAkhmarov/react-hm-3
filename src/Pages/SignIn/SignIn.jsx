import React from 'react'

function SignIn() {
  return (
    <div className="registration-cssave">    
     <h3 className='test-center'>Форма входа</h3>
      <div className='form-group'>
        <input className='form-control' type="text" name='username' maxLength='15' minlength="4" pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Логин" required />
      </div>
      <div className='form-group'>
        <input className="form-control-item" type="password" name="Пароль" minlength="6" id="password" placeholder="Пароль" required />
      </div>
      <div>
        <button className="btn btn-primary btn-block create-account" type="submit">Вход в аккаунт</button>
      </div>
    </div>
  )
}

export default SignIn