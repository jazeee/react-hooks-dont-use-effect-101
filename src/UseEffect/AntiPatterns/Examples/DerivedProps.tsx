interface Props {
  firstName: string;
}

function formatName(firstName: string) {
  return `${firstName}, important customer.`;
}

export function DerivedPropsAntiPattern(props: Props) {
  const { firstName } = props;

  return <p>{formatName(firstName)}</p>;
}
