import { useEffect, useRef, useState } from 'react';

interface Props {
  firstName: string;
}

export function ObjectUpdateInfiniteLoopAntiPattern(props: Props) {
  const { firstName } = props;
  const [user, setUser] = useState({ firstName });
  const updateCountRef = useRef(0);

  useEffect(() => {
    if (updateCountRef.current < 10) {
      updateCountRef.current += 1;
      setUser({ firstName: user.firstName + updateCountRef.current });
    }
  }, [firstName, user]);

  return <p>{user.firstName}</p>;
}
