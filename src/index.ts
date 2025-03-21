import type { App } from 'vue';
import * as components from './components';
import './styles/index.scss';

// 导出所有组件
export * from './components';

// 导出 Vue 插件
export const install = (app: App) => {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
  });
};

// 默认导出
export default {
  install,
  ...components, // 将所有组件也包含在默认导出中
};
