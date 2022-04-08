import { useEffect, useState } from 'react';

interface Props {
  firstName: string;
}

function formatName(firstName: string) {
  return `${firstName}, important customer.`;
}

export function DerivedPropsAntiPattern(props: Props) {
  const { firstName } = props;
  const [localFirstName, setLocalFirstName] = useState(formatName(firstName));

  useEffect(() => {
    setLocalFirstName(formatName(firstName));
  }, [firstName]);

  return <p>{localFirstName}</p>;
}
