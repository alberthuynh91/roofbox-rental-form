const getFieldType = (props) => {
  const { type, name, disabled = false } = props;
  if (type === 'textarea') {
    return (
      <>
        <textarea name={name} />
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
        <input type={type} name={name} disabled={disabled} />
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
