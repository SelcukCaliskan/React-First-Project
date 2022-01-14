
const CustomInput = ({ type, name, value, required, placeholder, event }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            required={required}
            placeholder={placeholder}
            onChange={event}
        />
    );
}

export default CustomInput;
