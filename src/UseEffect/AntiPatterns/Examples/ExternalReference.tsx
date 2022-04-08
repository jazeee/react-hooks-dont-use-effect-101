import { useEffect, useState } from 'react';

let value = 0;
function incrementValue() {
  value += 1;
}

interface Props {
  firstName: string;
}

export function ExternalReferenceAntiPattern(props: Props) {
  const { firstName } = props;
  const [localFirstName, setLocalFirstName] = useState(firstName);

  useEffect(() => {
    setLocalFirstName(`${firstName} ${value}`);
    incrementValue();
  }, [firstName]);

  return <p>{localFirstName}</p>;
}
