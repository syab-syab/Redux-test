import React from 'react'
import CodeSelect from './CodeSelect'
import CacheTest from './CacheTest'
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

const queryClient = new QueryClient();

const Main = () => {
  const [show, setShow] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <CodeSelect />
        <div>
          <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
        { show && <CacheTest /> }
    </div>
    </QueryClientProvider>

  )
}

export default Main