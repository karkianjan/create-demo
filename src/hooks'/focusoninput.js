import { useRef } from 'react';

 function FormFocus() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        click here to focus on input box
      </button>
    </>
  );
}
export default FormFocus;