import type { Preview } from '@storybook/vue3';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [],
      },
      brandTitle: '你的项目名称', // 这里修改为你想要的标题
      brandUrl: 'https://你的网站.com', // 可选：点击标题时跳转的链接
      brandImage: '/logo.png', // 自定义 logo 的路径，相对于 staticDirs 中配置的目录
      // 或者使用 SVG 内联方式
      // brandImage: undefined,
      // brandTarget: '_self',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
