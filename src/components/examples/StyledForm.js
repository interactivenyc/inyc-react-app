import React, { Component } from 'react';
import '../../css/examples/StyledForm.css';

const StyledForm = () => {
  return (
    <div className="styled-form">

      <form>
        <label className="hidden-label" for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" />

        <label className="hidden-label" for="password">Password</label>
        <input type="password" name="password" id="email" placeholder="Password" />

        <select>
          <option>Initial view...</option>
          <option>Profile</option>
          <option>Inbox</option>
          <option>Account Settings</option>
        </select>

        <input type="submit" value="Sign In" />

        <label>
          <input type="checkbox" name="remember" checked="checked" value="yes" />
          <span class="checkbox-text">Stay signed in</span>
        </label>

      </form>

    </div>
  );
}

export default StyledForm;
