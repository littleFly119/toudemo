// 封装本地存储操作模块

// 存储
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
// 获取
export const getItem = (key) => {
  const data = window.localStorage.getItem(key) || null
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}
// 删除
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
