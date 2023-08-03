import React from 'react'
import currencyCode from '../data/currency-code.json'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCode } from '../features/codeSlice'
// import Select from "react-select";

const CodeSelect = () => {

  const test = useSelector((state) => state.paycode.value)

  const dispatch = useDispatch()

  // 現在選択している通貨コード
  const [crCode, setCrCode] = useState('USD')
  // const [crCode, setCrCode] = useState()

  // 通貨コードを選択するたびにcrCodeを変える
  const handleChange = (e) => {
    // 機能していない
    // ワンテンポ遅れてしまう
    setCrCode(e.target.value)
    console.log("crCode = ")
    console.log(crCode)
    dispatch(
      // changeCode(crCode) ← では無く
      // 引数はe.target.valueにすれば良い
      changeCode(e.target.value)
    )
    console.log("test = ")
    console.log(test)
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
      <h1>test = {test[0]}</h1>
      {/* <h1>test = {test}</h1> */}
    </div>
  )
}

export default CodeSelect