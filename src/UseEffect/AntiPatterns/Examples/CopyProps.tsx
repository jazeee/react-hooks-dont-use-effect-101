import { useEffect, useState } from 'react';

interface Props {
  firstName: string;
}

export function CopyPropsAntiPattern(props: Props) {
  const { firstName } = props;
  const [localFirstName, setLocalFirstName] = useState(firstName);

  useEffect(() => {
    setLocalFirstName(firstName);
  }, [firstName]);

  return <p>{localFirstName}</p>;
}
