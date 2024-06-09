import { QueryClient } from '@tanstack/react-query';

export const getQueryClientInstance = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        cacheTime: 0,
      },
    },
  });
};
