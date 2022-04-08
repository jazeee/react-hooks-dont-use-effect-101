import { useQuery } from 'react-query';

interface Props {
  firstName: string;
}

export function ApiRequestAntiPattern(props: Props) {
  const { firstName } = props;
  const {
    data: localFirstName,
    isLoading,
    error,
  } = useQuery<string>(firstName, {
    onError: () => {
      // show error toast
    },
    // onSuccess...
  });

  return (
    <>
      <p>{isLoading ? 'Loading...' : localFirstName}</p>
      {error && <p>Error {error}</p>}
    </>
  );
}
