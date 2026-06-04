import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>

  <div className="register-container">

<div className="register-title">
    <h1>Create Your Account</h1>
    <p>Register to access the Library Management System</p>
</div>

<div className="form-grid">

<div className="form-group">
<label>Full Name</label>
<input type="text" placeholder="👤 Enter Your Full Name" />
</div>

<div className="form-group">
<label>Username</label>
<input type="text" placeholder="👤 Choose a Username" />
</div>

<div className="form-group">
<label>Email Address</label>
<input type="text" placeholder="✉️ Enter Your Email" />
</div>

<div className="form-group">
<label>Phone Number</label>
<input type="text" placeholder="📞 Enter Your Phone Number" />
</div>

<div className="form-group">
<label>Password</label>
<input type="password" placeholder="🔒 Enter Password" />
</div>

<div className="form-group">
<label>Confirm Password</label>
<input type="password" placeholder="🔒 Confirm Password" />
</div>

<div className="form-group">
<label>Role</label>
<select>
<option>Select Role</option>
<option>Student</option>
<option>Faculty</option>
<option>Research Scholar</option>
<option>Guest Member</option>
</select>
</div>

<div className="form-group">
<label>Date of Birth</label>
<input type="date" />
</div>

</div>

<button className="register-btn">
Register Account
</button>

 <div className="divider">
            <span>OR</span>
          </div>

          <p className="register-link">
            Already account created
            <Link to="/login"> Login Here</Link>

          </p>

</div>

    </div>
  )
}

export default Register