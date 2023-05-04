interface Props {
  firstName: string;
}

const DEFAULT_NAME = 'Jazeee';

export function LocalOrRemoteAntiPattern(props: Props) {
  const { firstName } = props;

  return <p>{firstName || DEFAULT_NAME}</p>;
}
