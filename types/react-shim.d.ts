// Temporary shim to satisfy the linter in environments where type resolution fails
declare module 'react' {
  export = React
}
declare namespace React {}

declare module 'react/jsx-runtime' {
  const jsxRuntime: any
  export = jsxRuntime
}

declare module 'react-dom' {
  const ReactDOM: any
  export = ReactDOM
}

