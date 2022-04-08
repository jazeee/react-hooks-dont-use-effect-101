interface Props {
  firstName: string;
}

export function UseEffectAntiPatterns(props: Props) {
  const { firstName } = props;
  return <p>{firstName}</p>;
}
