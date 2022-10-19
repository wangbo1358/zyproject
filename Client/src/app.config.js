export default defineAppConfig({
  pages: [
    'pages/work/index',
    'pages/assistant/index',
    'pages/common/index',
    'pages/analysis/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "color": "#88c000",
    "selectedColor": "#272a3b",
    "borderStyle": "white",
    "list": [
      { "pagePath": "pages/work/index" },
      { "pagePath": "pages/assistant/index" },
      { "pagePath": "pages/common/index" },
      { "pagePath": "pages/analysis/index" },
      { "pagePath": 'pages/user/index' }
    ]
  }
})
