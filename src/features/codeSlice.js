// そこまで大きいアプリでは無ければLocalStrageの方が容易かもしれない
import { createSlice } from "@reduxjs/toolkit"

export const codeSlice = createSlice({
  name: "paycode",
  initialState: { value: ["USD"]},
  reducers: {
    changeCode: (state, action) => {
      state.value.push(action.payload)
      state.value.shift()
    }
  }
})

export const { changeCode } = codeSlice.actions
export default codeSlice.reducer