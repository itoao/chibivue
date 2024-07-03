export type Options = {
  render: () => string
}

export type App = {
  mount: (selector: string) => void
}

export const createApp = (options: Options): App => {
  return {
    mount: selector => {
      const root = document.querySelector(selector) // selectorには'#app'を受け取る想定
      if (root) {
        root.innerHTML = options.render()
      }
    }
  }
}