const getFieldType = (props) => {
  const { type, name, disabled = false, placeholder = '' } = props;
  if (type === 'textarea') {
    return (
      <>
        <textarea name={name} placeholder={placeholder} />
      </>
    );
  }
  if (type === 'checkbox') {
    const { value = false, onChange = () => {} } = props;
    return (
      <>
        <input
          type="checkbox"
          name="vehicleHasCrossbars"
          value={value}
          onChange={onChange}
        />
      </>
    );
  }
  if (type) {
    return (
      <>
        <input
          type={type}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
        />
      </>
    );
  }
};

const Field = (props) => {
  const { label } = props;
  return (
    <div className="field-container">
      {label && <label>{label}</label>}
      {getFieldType(props)}
    </div>
  );
};

export default Field;
