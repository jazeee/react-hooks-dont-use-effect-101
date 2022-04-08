import { useState } from 'react';

interface Props {
  firstName: string;
}

export function ImperativeChangeAntiPattern(props: Props) {
  const { firstName } = props;
  const [localFirstName, setLocalFirstName] = useState(firstName);
  const [inputValue, setInputValue] = useState(firstName);

  return (
    <>
      <p>{localFirstName}</p>
      <label htmlFor="inputValue">
        Enter a local value
        <input
          id="inputValue"
          value={inputValue}
          onChange={(event) => {
            const { value } = event.target;
            setInputValue(value);
            setLocalFirstName(`${value} 1`);
          }}
        />
      </label>
    </>
  );
}
