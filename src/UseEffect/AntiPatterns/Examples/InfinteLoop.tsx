interface Props {
  firstName: string;
}

export function InfiniteLoopAntiPattern(props: Props) {
  const { firstName } = props;

  return (
    <p>
      {firstName} {firstName}, {firstName}
    </p>
  );
}
