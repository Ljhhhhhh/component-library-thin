import type { Meta, StoryObj } from '@storybook/vue3';
import MainMenuButton from './index.vue';

// MainMenuButton 组件的 Storybook 配置
const meta = {
  title: 'Common/MainMenuButton',
  component: MainMenuButton,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number', description: '按钮宽度（像素）' },
    height: { control: 'number', description: '按钮高度（像素）' },
    text: { control: 'text', description: '按钮文本' },
    icon: { control: 'text', description: '按钮图标（Iconify 图标名称）' },
    backgroundColor: { control: 'color', description: '按钮背景颜色' },
    color: { control: 'color', description: '按钮文本颜色' },
    disabled: { control: 'boolean', description: '是否禁用按钮' },
  },
  args: {
    text: 'Overview',
    icon: 'mdi:monitor',
  },
  parameters: {
    docs: {
      description: {
        component:
          'MainMenuButton 是一个工业风格的按钮组件，支持图标和文本的垂直排列，可用于主菜单、控制面板等场景。',
      },
    },
  },
} satisfies Meta<typeof MainMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础示例
export const Default: Story = {
  name: '基础示例',
  args: {},
};

// 只有文本
export const TextOnly: Story = {
  name: '仅文本',
  args: {
    icon: 'icon-button',
    text: '文本按钮',
  },
};

// 带图标
export const WithIcon: Story = {
  name: '带图标',
  args: {
    icon: 'mdi:power',
    text: '电源',
  },
};

// 禁用状态
export const Disabled: Story = {
  name: '禁用状态',
  args: {
    disabled: true,
    text: '禁用',
    icon: 'mdi:lock',
  },
};

// 不同尺寸
export const DifferentSizes: Story = {
  name: '不同尺寸',
  render: (args) => ({
    components: { MainMenuButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 20px; align-items: flex-start;">
        <div>
          <MainMenuButton v-bind="args" :width="80" :height="80" text="小" />
          <div style="text-align: center; margin-top: 10px;">80x80px</div>
        </div>
        <div>
          <MainMenuButton v-bind="args" :width="100" :height="100" text="中" />
          <div style="text-align: center; margin-top: 10px;">100x100px</div>
        </div>
        <div>
          <MainMenuButton v-bind="args" :width="120" :height="120" text="大" />
          <div style="text-align: center; margin-top: 10px;">120x120px</div>
        </div>
        <div>
          <MainMenuButton v-bind="args" :width="150" :height="150" text="特大" />
          <div style="text-align: center; margin-top: 10px;">150x150px</div>
        </div>
      </div>
    `,
  }),
};

// 不同颜色
export const DifferentColors: Story = {
  name: '不同颜色',
  render: (args) => ({
    components: { MainMenuButton },
    setup() {
      const colors = [
        { name: '默认', bg: '#333333', text: '#ffffff' },
        { name: '蓝色', bg: '#1677ff', text: '#ffffff' },
        { name: '绿色', bg: '#52c41a', text: '#ffffff' },
        { name: '红色', bg: '#f5222d', text: '#ffffff' },
        { name: '橙色', bg: '#fa8c16', text: '#ffffff' },
        { name: '紫色', bg: '#722ed1', text: '#ffffff' },
      ];

      return { args, colors };
    },
    template: `
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div v-for="color in colors" :key="color.bg" style="text-align: center;">
          <MainMenuButton 
            v-bind="args" 
            :backgroundColor="color.bg" 
            :color="color.text" 
            :text="color.name"
            icon="mdi:palette"
          />
          <div style="margin-top: 10px;">{{ color.name }}</div>
        </div>
      </div>
    `,
  }),
};

// 常用图标
export const CommonIcons: Story = {
  name: '常用图标',
  render: (args) => ({
    components: { MainMenuButton },
    setup() {
      const icons = [
        { name: 'Overview', icon: 'mdi:monitor' },
        { name: 'Settings', icon: 'mdi:cog' },
        { name: 'Job', icon: 'mynaui:edit-one' },
        { name: 'Recipe', icon: 'ant-design:experiment-twotone' },
        { name: 'Equipment', icon: 'lucide:hard-drive' },
        { name: 'Log', icon: 'pajamas:log' },
        { name: 'Tools', icon: 'la:tools' },
        { name: 'Parameter', icon: 'carbon:parameter' },
      ];

      return { args, icons };
    },
    template: `
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div v-for="item in icons" :key="item.icon" style="text-align: center;">
          <MainMenuButton 
            v-bind="args" 
            :icon="item.icon" 
            :text="item.name"
          />
          <div style="margin-top: 10px;">{{ item.name }}</div>
        </div>
      </div>
    `,
  }),
};

// 工业控制面板
export const ControlPanel: Story = {
  name: '工业控制面板',
  render: (args) => ({
    components: { MainMenuButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; max-width: 350px; background-color: #2c2c2c; padding: 20px; border-radius: 8px;">
        <MainMenuButton 
          :width="100" 
          :height="100" 
          text="监控" 
          icon="mdi:monitor-dashboard"
          backgroundColor="#3a3a3a"
          color="#ffffff"
        />
        <MainMenuButton 
          :width="100" 
          :height="100" 
          text="设备" 
          icon="mdi:factory"
          backgroundColor="#3a3a3a"
          color="#ffffff"
        />
        <MainMenuButton 
          :width="100" 
          :height="100" 
          text="报警" 
          icon="mdi:bell-ring"
          backgroundColor="#d32f2f"
          color="#ffffff"
        />
        <MainMenuButton 
          :width="100" 
          :height="100" 
          text="数据" 
          icon="mdi:chart-line"
          backgroundColor="#3a3a3a"
          color="#ffffff"
        />
        <MainMenuButton 
          :width="100" 
          :height="100" 
          text="设置" 
          icon="mdi:cog"
          backgroundColor="#3a3a3a"
          color="#ffffff"
        />
        <MainMenuButton 
          :width="100" 
          :height="100" 
          text="电源" 
          icon="mdi:power"
          backgroundColor="#388e3c"
          color="#ffffff"
        />
      </div>
    `,
  }),
};
