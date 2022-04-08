import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(queryKey);
          }, 1500 + Math.random() * 1500);
        });
      },
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
