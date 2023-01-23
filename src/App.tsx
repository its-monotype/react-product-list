import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes } from 'react-router-dom';

import { HomeScreen } from './screens/home/HomeScreen';
import { NoMatchScreen } from './screens/NoMatchScreen';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="*" element={<NoMatchScreen />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
