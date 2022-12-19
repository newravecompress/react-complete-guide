import classes from './ProfileForm.module.css'
import { useContext, useRef } from 'react'
import { API_KEY } from '../../const'
import { AuthContext } from '../../store/auth-context'
import { useHistory } from 'react-router-dom'

const ProfileForm = () => {
  const newPasswordInputRef = useRef()
  const authCtx = useContext(AuthContext)
  const history = useHistory()

  const submitHandler = event => {
    event.preventDefault()

    const enteredPassword = newPasswordInputRef.current.value

    // Add validation

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + API_KEY,
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: false
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
      .then(res => {
        //assumption: always succeeds!

        history.replace('/')
      })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  )
}

export default ProfileForm
