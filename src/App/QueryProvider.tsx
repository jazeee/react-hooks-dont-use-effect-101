import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) => fetch(queryKey[0] as RequestInfo).then((res) => res.json()),
      refetchOnWindowFocus: false,
    },
  },
});

interface Props {
  children: ReactNode;
}
export function QueryProvider(props: Props) {
  const { children } = props;
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
