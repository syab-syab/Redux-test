  // ローカルにある値をstateに代入

  // Main.jsのdataに値が格納されたとき
  // isLoaded は false
  // error は null
  const useLocal = (key) => {
    const tmp = localStorage.getItem(key)
    // ローカルストレージにあるデータは文字列化しているから
    // JSON.parseで配列(オブジェクトに戻す)
    const data = JSON.parse(tmp)
    const isLoaded = false
    const error = null
    return { data, isLoaded, error }
  }

export default useLocal