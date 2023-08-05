import React from 'react'
import CodeSelect from './CodeSelect'
// import CacheTest from './CacheTest'
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { useState } from 'react';
import useFetch from '../hooks/useFetch';

// const queryClient = new QueryClient();

const Main = () => {
  // const [show, setShow] = useState(true);

  const url = "https://jsonplaceholder.typicode.com/todos"

  const { data, isLoaded, error } = useFetch(url);

  // useFetchで取得したデータ(オブジェクトか配列)をローカルストレージに
  // JSON.stringifyで文字列にしてから格納
  // localStorage.setItem("test", JSON.stringify(data))

  // ローカルストレージから格納したデータを取ってくる
  const testData = localStorage.getItem("test")

  // ローカルストレージから取ってきたデータを配列やオブジェクトに戻す
  const parseData = JSON.parse(testData)

 

  // localStorage.setItem("data", data)
  // localStorage.removeItem('data');

  // ローカルストレージに格納(キー, 値)
  // localStorage.setItem("myCat", "Tom")

  // ローカルストレージから削除(キー)
  // localStorage.removeItem('myCat');

  // ローカルストレージから取得(キー)
  // もし取得できなければnullが帰ってくる
  // var cat = localStorage.getItem('myCat');

  // ローカルストレージの中の値をすべて削除
  // localStorage.clear();

  return (
    // <QueryClientProvider client={queryClient}>
      <div>
        <CodeSelect />
        {}
        {isLoaded && <p>Loading...</p>}
        {error && <p>Error</p>}
        { data && <div>
        {parseData.map((todo) => (
              <div key={todo.id}>{todo.title}</div>
            ))}
          </div>}
        {/* <div>
          <button onClick={() => setShow(!show)}>Toggle</button>
        </div> */}
        {/* { show && <CacheTest /> } */}
    </div>
    // </QueryClientProvider>

  )
}

export default Main