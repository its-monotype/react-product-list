import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { NoMatch } from './pages/NoMatch';

export function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
