import { useEffect, useState } from 'react';

interface Props {
  firstName: string;
}

const DEFAULT_NAME = 'Jazeee';

export function LocalOrRemoteAntiPattern(props: Props) {
  const { firstName } = props;
  const [localFirstName, setLocalFirstName] = useState(firstName || DEFAULT_NAME);

  useEffect(() => {
    if (firstName) {
      setLocalFirstName(firstName);
    } else {
      setLocalFirstName(DEFAULT_NAME);
    }
  }, [firstName]);

  return <p>{localFirstName}</p>;
}
