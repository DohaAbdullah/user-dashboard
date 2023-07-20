function FormData(props) {
  // console.log(props);
  const { label, onChange, id, errorMessage, isValid, ...inputProps } = props;
  // console.log(isValid);
  return (
    <div className="mb-6">
      <label
        className={`block  my-1.5  text-sm font-medium  dark:text-gray-700 ${props.className}`}
      >
        {label}
      </label>
      <input
        className={`shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${props.className}`}
        {...inputProps}
        onChange={props.onChange}
      />
      {isValid ? (
        <span className="display: none;"></span>
      ) : (
        <span className="text-red-500 text-xs italic display: block;">
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default FormData;
