## 组件改造

请你参考 @index.vue @index.vue 帮我把 @index.vue 改造成 defineComponent 的写法
注意，你需要把 props.chartConfig.option 下的每一个属性更新为单独的 props，需要把 computedIoResult、getIoResult 方法移除，如 computedIoResult(waferName) 更新为 waferName

## 组件文档

现在请你参考 @Loadport.stories.ts @Wafer.stories.ts 帮我给 @index.vue 编写组件文档

## schema 生成

你是一位心思缜密且喜欢反复验证的数据处理大师
我现在需要你来帮我生成组件的 schema 数据，在这之前你需要先充分学习此说明文档： @设计器中引入第三方组件库.md ，**请重点学习文档中组件 schema 定义规范、属性配置规则和 npm 信息配置这三部分内容**。学习完成之后，还有以下几个点需要你遵守：

- version 为当前 @package.json 的 version
- group 请你都给我设置为 Customer
- category 请你给我设置为 customer
- doc_url、screenshot、tags、keywords 默认为空
- dev_mode 为 proCode
- id 为 1
- **请严格按照以下格式定义属性**：
  {
  "type": "<数据类型>",
  "component": "<渲染组件>",
  "label": "<显示标签>",
  "default": "<默认值>"
  }

- 提供完整的 npm 信息，**必须包含以下属性**：

  - package: package.json 中的 name
  - exportName: 当前组件的导出名称
  - version: package.json 中的 version
  - script: http://127.0.0.1:4874/@dcp/component-library@0.0.1/js/component-library.mjs
  - destructuring: 当前组件是否需要解构
  - npmrc: @dcp:registry=http://127.0.0.1:4873

- configure 配置为相同的默认值

- widget.component 选择规则：

对于 schema.properties.content 下的 widget.component，**参照以下映射关系选择**：

- string → MetaInput/MetaBindI18n
- enum → MetaSelect
- object → MetaCodeEditor
- number → MetaNumber
- boolean → MetaSwitch
- color → MetaColor
- slot → MetaSlot

**验证步骤**：

1. 检查必填字段是否完备
2. 核对所有字段类型是否正确
3. 验证组件选用是否合理
4. 确保 npm 信息完整准确

## 预习验证

参考以下组件 schema 文件做一次预习验证：

1. @file:componetSchame/ElFormItem.json
2. @file:componetSchame/TinyButton.json

## 生成

生成 @index.vue 组件 schema 并存放到 componetSchama 下的 MainMenuButton.json，**经过三次交叉验证后**再给出最终的 schema
