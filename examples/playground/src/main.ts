import { createApp } from "chibivue";

// レンダリングする内容を定義
const app = createApp({
  render() {
    return 'Hello world.'
  }
})

// DOMにマウントする
app.mount('#app')