export const imports = {
  'src/editor/Editor.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-editor-editor" */ 'src/editor/Editor.mdx'
    ),
  'src/toolbar/Toolbar.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-toolbar-toolbar" */ 'src/toolbar/Toolbar.mdx'
    ),
}
