import { useEffect, useRef, useState } from 'react';

interface Props {
  firstName: string;
}

export function InfiniteLoopAntiPattern(props: Props) {
  const { firstName } = props;
  const [localFirstName, setLocalFirstName] = useState(firstName);
  const [anotherName, setAnotherName] = useState(`${localFirstName} ${firstName}`);
  const updateCountRef = useRef(0);

  useEffect(() => {
    if (updateCountRef.current < 10) {
      updateCountRef.current += 1;
      setLocalFirstName(anotherName);
    }
  }, [anotherName]);

  useEffect(() => {
    setAnotherName(`${localFirstName} ${firstName}`);
  }, [localFirstName, firstName]);

  return (
    <p>
      {localFirstName} {anotherName}
    </p>
  );
}
