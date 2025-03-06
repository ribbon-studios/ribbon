declare module '*.module.css' {
  const content: Record<string, string>;
  export = content;
  export default content;
}
