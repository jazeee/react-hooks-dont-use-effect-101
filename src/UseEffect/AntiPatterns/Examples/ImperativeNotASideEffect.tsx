import { useEffect, useState } from 'react';

interface Props {
  firstName: string;
}

export function ImperativeNotASideEffectAntiPattern(props: Props) {
  const { firstName } = props;
  const [inputValue, setInputValue] = useState(firstName);

  useEffect(() => {
    sessionStorage.setItem('ImperativeNotASideEffectAntiPattern', inputValue);
  }, [inputValue]);

  return (
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
  );
}
