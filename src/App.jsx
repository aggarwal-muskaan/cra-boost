import { QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { getQueryClientInstance } from '@/lib/queryClient';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  const queryClientInstance = getQueryClientInstance();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClientInstance}>
        <div className="font-display max-w-xl mx-auto p-8 text-center">
          <p className="text-sm sm:text-lg font-bold">Hi !</p>
          <div className="flex justify-center items-center">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="h-[6em] p-6" alt="Vite logo" />
            </a>
            <span className="text-2xl font-bold">+</span>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="h-[6em] p-6 react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="p-8">
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            <p className="mt-2">
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="text-[#888]">Click on the Vite and React logos to learn more</p>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
