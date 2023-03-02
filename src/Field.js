import './Field.css';

const getFieldType = (props) => {
  const {
    type,
    name,
    disabled = false,
    placeholder = '',
    required = false,
  } = props;
  if (type === 'textarea') {
    return (
      <>
        <textarea name={name} placeholder={placeholder} required={required} />
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
          required={required}
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
          required={required}
        />
      </>
    );
  }
};

const Field = (props) => {
  const { type, label } = props;
  return (
    <div className={`field-container-${type} field-container`}>
      {label && <label>{label}</label>}
      {getFieldType(props)}
    </div>
  );
};

export default Field;
