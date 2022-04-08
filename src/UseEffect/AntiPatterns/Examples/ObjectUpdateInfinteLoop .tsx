interface Props {
  firstName: string;
}

export function ObjectUpdateInfiniteLoopAntiPattern(props: Props) {
  const { firstName } = props;
  const user = { firstName };

  return <p>{user.firstName} 1</p>;
}

// { a: 1 } !== { a: 1 }
