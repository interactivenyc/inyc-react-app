import React from 'react';
import '../../css/examples/StyledForm.css';

function onChange(event) {
  console.log('onChange: ', event.target.checked);

  event.target.checked = !event.target.checked;
}

const StyledForm = () => {
  return (
    <div className="styled-form">
      <div className="code-view-link"><a href="https://codepen.io/steve-warren/pen/xzZdwX" target="_blank">View the code on codepen.io</a></div>

      <form>
        <label className="hidden-label" htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" />

        <label className="hidden-label" htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Password" />

        <select>
          <option>Initial view...</option>
          <option>Profile</option>
          <option>Inbox</option>
          <option>Account Settings</option>
        </select>

        <input type="submit" value="Sign In" />

        <label>
          <input className="checkbox-input" type="checkbox" name="remember" checked="defaultChecked" value="yes" onChange={onChange}/>
          <span className="checkbox-text">Stay signed in</span>
        </label>

      </form>

    </div>
  );
}

export default StyledForm;
