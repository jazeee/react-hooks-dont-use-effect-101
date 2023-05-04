interface Props {
  firstName: string;
}

export function CopyPropsAntiPattern(props: Props) {
  const { firstName } = props;

  return <p>{firstName}</p>;
}
