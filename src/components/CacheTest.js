// もう要らないけど一応残しておく

import React from 'react'
import { useQuery } from 'react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // エラー用
  // const res = await fetch('https://jsonplaceholder.typicode.co');
  return res.json();
};

const CacheTest = () => {
  // const result = useQuery('users', fetchUsers);
  // console.log(result);

  // 公式ドキュメントを見たらこの定数はデフォルトで使えるようになってるっぽい
  // どのAPIでも適用できるかどうかは不明
  const { data, isLoading, isError, error, status } = useQuery(
    'users',
    fetchUsers, {
    // データを取得できなかった時のリトライ回数
    // retry: 5,
    // Window Focus Refetching 機能をoffにできる(デフォだとtrue)
    refetchOnWindowFocus: false,
    // キャッシュ機関の設定
    // cacheTime: 1000000000,
    // リフェッチの間隔の設定
    // refetchInterval: 1000,
    // fetchしてきたdataが古くなったとみなされる時間
    staleTime: 100000,
  });
  console.log(status)
  

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h2>CacheTest</h2>
      <div>
        {data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  )
}

export default CacheTest