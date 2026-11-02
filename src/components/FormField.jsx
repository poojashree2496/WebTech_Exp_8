// Reusable labelled input / select with an error message
function FormField({ label, name, value, onChange, onBlur, error, type = "text", options, placeholder }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {options ? (
        <select id={name} name={name} value={value} onChange={onChange} onBlur={onBlur}>
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input id={name} name={name} type={type} value={value}
          onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
      )}
      {error && <small>{error}</small>}
    </div>
  );
}

export default FormField;
