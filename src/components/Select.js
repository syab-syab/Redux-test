import React from 'react'
import currencyCode from '../data/currency-code.json'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCode } from '../features/codeSlice'

const Select = () => {

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
    console.log(crCode)
    dispatch(
      changeCode(crCode)
    )
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
            <option key={value.id} value={value.value}>{value.name}</option>
          ))
        }

      </select>
      {/* <h1>{crCode}</h1> */}
      <br />
      {/* <h1>{test[0]}</h1> */}
      <h1>{test}</h1>
    </div>
  )
}

export default Select