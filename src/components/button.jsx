function Button(props) {
  return (
    <button
      className={`bg-button hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
