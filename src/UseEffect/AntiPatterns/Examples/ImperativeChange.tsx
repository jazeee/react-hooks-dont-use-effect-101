import { useEffect, useState } from 'react';

interface Props {
  firstName: string;
}

export function ImperativeChangeAntiPattern(props: Props) {
  const { firstName } = props;
  const [localFirstName, setLocalFirstName] = useState(firstName);
  const [inputValue, setInputValue] = useState(firstName);

  useEffect(() => {
    setLocalFirstName(inputValue);
  }, [inputValue]);

  return (
    <>
      <p>{localFirstName}</p>
      <label htmlFor="inputValue">
        Enter a local value
        <input
          id="inputValue"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </label>
    </>
  );
}
