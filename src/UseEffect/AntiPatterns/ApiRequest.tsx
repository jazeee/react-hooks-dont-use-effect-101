import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

interface Props {
  firstName: string;
}

export function ApiRequestAntiPattern(props: Props) {
  const { firstName } = props;
  const [localFirstName, setLocalFirstName] = useState(firstName);
  const { data, isLoading } = useQuery<string>(firstName);

  useEffect(() => {
    if (data) {
      setLocalFirstName(data);
    }
  }, [data]);

  return <p>{isLoading ? 'Loading...' : localFirstName}</p>;
}
