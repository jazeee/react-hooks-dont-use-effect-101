import { useState } from 'react';

interface Props {
  firstName: string;
}

export function ExternalReferenceAntiPattern(props: Props) {
  const { firstName } = props;
  const [value, setValue] = useState(0);
  function incrementValue() {
    setValue((oldValue) => oldValue + 1);
  }

  return (
    <>
      <p>
        {firstName} {value}
      </p>
      <button type="button" onClick={() => incrementValue()}>
        Increment Value
      </button>
    </>
  );
}
