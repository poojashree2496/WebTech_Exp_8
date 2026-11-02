import { useState } from "react";
import FormField from "../components/FormField.jsx";

const empty = { name: "", email: "", password: "", age: "", mobile: "", gender: "", state: "" };

function validate(form) {
  const e = {};
  if (!form.name.trim()) e.name = "Name is required.";
  else if (!/^[A-Za-z ]+$/.test(form.name)) e.name = "Name must contain letters and spaces only.";
  if (!form.email) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
  if (!form.password) e.password = "Password is required.";
  else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password))
    e.password = "Use uppercase, lowercase, a number and at least 8 characters.";
  if (!form.age) e.age = "Age is required.";
  else if (Number(form.age) < 18 || Number(form.age) > 30) e.age = "Age must be between 18 and 30.";
  if (!form.mobile) e.mobile = "Mobile number is required.";
  else if (!/^\d{10}$/.test(form.mobile)) e.mobile = "Enter exactly 10 digits.";
  if (!form.gender) e.gender = "Gender is required.";
  if (!form.state) e.state = "State is required.";
  return e;
}

function Register() {
  const [form, setForm] = useState(empty);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const errors = validate(form);
  const valid = Object.keys(errors).length === 0;

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };
  const blur = (e) => setTouched({ ...touched, [e.target.name]: true });
  const show = (n) => (touched[n] || form[n]) && errors[n];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      setSubmitted(true);
      setForm(empty);
      setTouched({});
    }
  };

  return (
    <div className="card">
      <h2>Player Registration</h2>
      <form onSubmit={handleSubmit} noValidate>
        <FormField label="Full Name" name="name" value={form.name} onChange={update} onBlur={blur} error={show("name")} placeholder="Enter your name" />
        <FormField label="Email Address" name="email" type="email" value={form.email} onChange={update} onBlur={blur} error={show("email")} placeholder="Enter your email" />
        <FormField label="Password" name="password" type="password" value={form.password} onChange={update} onBlur={blur} error={show("password")} placeholder="Minimum 8 characters" />
        <div className="two">
          <FormField label="Age" name="age" type="number" value={form.age} onChange={update} onBlur={blur} error={show("age")} placeholder="18 - 30" />
          <FormField label="Mobile Number" name="mobile" type="tel" value={form.mobile} onChange={update} onBlur={blur} error={show("mobile")} placeholder="10-digit number" />
        </div>
        <div className="two">
          <FormField label="Gender" name="gender" value={form.gender} onChange={update} onBlur={blur} error={show("gender")} options={["Male", "Female", "Other"]} />
          <FormField label="State" name="state" value={form.state} onChange={update} onBlur={blur} error={show("state")} options={["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"]} />
        </div>
        <button type="submit" disabled={!valid}>Submit Registration</button>
        {submitted && <p className="success">Registration completed successfully! Welcome to the squad.</p>}
      </form>
    </div>
  );
}

export default Register;
