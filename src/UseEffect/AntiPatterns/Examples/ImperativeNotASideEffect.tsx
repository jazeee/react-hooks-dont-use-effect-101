import { useState } from 'react';

interface Props {
  firstName: string;
}

export function ImperativeNotASideEffectAntiPattern(props: Props) {
  const { firstName } = props;
  const [inputValue, setInputValue] = useState(firstName);

  return (
    <label htmlFor="inputValue">
      Enter a local value
      <input
        id="inputValue"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          try {
            sessionStorage.setItem('ImperativeNotASideEffectAntiPattern', inputValue);
          } catch (error) {
            // deal with error.
          }
        }}
      />
    </label>
  );
}
