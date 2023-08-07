import React from 'react'
import currencyCode from '../data/currency-code.json'
import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { changeCode } from '../features/codeSlice'
// import Select from "react-select";

const CodeSelect = () => {

  // const test = useSelector((state) => state.paycode.value)

  // const dispatch = useDispatch()

  // 通貨コードの保存keyは code
  const key = "code"
  // 格納されていればその値が、無いならnullが格納される
  // useStateの代入に利用する
  let localCode = ""

  if (!(localStorage.getItem(key))) {
    localStorage.setItem(key, "USD")
    localCode = localStorage.getItem(key)
  } else {
    localCode = localStorage.getItem(key)
  }

  console.log(localCode)

  // 現在選択している通貨コード
  // const [crCode, setCrCode] = useState('USD')
  const [crCode, setCrCode] = useState(localCode)

  // 通貨コードを選択するたびにcrCodeを変える(Redux)
  // const handleChange = (e) => {
    // 引数を.target.valueにしなければ
    // ワンテンポ遅れてしまう
    // setCrCode(e.target.value)
    // dispatch(
      // e.target.valueを引数にすれば
      // 値のズレが無くなる
  //     changeCode(e.target.value)
  //   )
  // }

  const handleChange = (e) => {
    localStorage.setItem(key, e.target.value)
    setCrCode(e.target.value)
  }
  

  return (
    <div>
      <label>
        通貨コードを選んでください
      </label>
      <br />
      <select
        value={crCode}
        onChange={handleChange}
      >
        {
          currencyCode["code"].map(value => (
            <option key={value.id} value={value.value}>{value.label}</option>
          ))
        }

      </select>

      <h1>crCode = {crCode}</h1>
      <br />
      <h1>localStrage =  { localStorage.getItem(key)}</h1>
      {/* <h1>test = {test[0]}</h1> */}
    </div>
  )
}

export default CodeSelect