import React from 'react'
import CodeSelect from './CodeSelect'
// import CacheTest from './CacheTest'
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import "/node_modules/flag-icons/css/flag-icons.min.css";
// import useLocal from '../functions/useLocal';
import Example from './Example';

// const queryClient = new QueryClient();

const Main = () => {
  // const [show, setShow] = useState(true);

  const key = "api-data"

  // const { data, isLoaded, error } = localStorage.getItem(key) ? useLocal(key) : useFetch(`${process.env.REACT_APP_API_URL}`, key);
  const { data, isLoaded, error } = useFetch(`${process.env.REACT_APP_API_URL}`, key);


  // useFetchで取得したデータ(オブジェクトか配列)をローカルストレージに
  // JSON.stringifyで文字列にしてから格納
  // localStorage.setItem("test", JSON.stringify(data))

  // ローカルストレージから格納したデータを取ってくる
  // const testData = localStorage.getItem("test")

  // ローカルストレージから取ってきたデータを配列やオブジェクトに戻す
  // const parseData = JSON.parse(testData)

 

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
      <div className='
      bg-gray-100
      '>
        <span className="fi fi-jp"></span>
        <CodeSelect />
        <Example payCode={localStorage.getItem("code")} />
        {isLoaded && <p>Loading...</p>}
        {error && <p>Error</p>}
        { data && <div>
        {data.map((todo) => (
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