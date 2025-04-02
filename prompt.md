## 组件改造

请你参考 @index.vue @index.vue 帮我把 @index.vue 改造成 defineComponent 的写法
注意，你需要把 props.chartConfig.option 下的每一个属性更新为单独的 props，需要把 computedIoResult、getIoResult 方法移除，如 computedIoResult(waferName) 更新为 waferName

## 组件文档

现在请你参考 @Loadport.stories.ts @Wafer.stories.ts 帮我给 @index.vue 编写组件文档

## schema 生成

> OpenTiny 组件 Schema 规范：@file:doc/设计器中引入第三方组件库.md

给 @file:src/components/MainMenuButton/index.vue 生成符合 OpenTiny 规范的组件 Schema，请按照以下详细步骤执行:

# 预习

通过了解 @componentSchema/TinyButton.json @componentSchema/TinyCheckbox.json 的数据，了解组件的 schema 格式规范

# 第一步：全局信息提取

1. 组件基本信息

   - id: 1
   - version: 从 package.json 中提取
   - component: 从 defineComponent 的 name 属性提取组件名称
   - 根据组件功能，生成符合规范的中文名称及描述
   - 根据组件类型，选择适当的 icon & group & category

2. 配置 npm 相关信息

   - package: 从 package.json 中提取 name
   - exportName: 使用组件名
   - version: 从 package.json 中提取 version
   - script: http://localhost:4874/@dcp/component-library@0.0.1/dist/componet-library.mjs
   - destructuring: 是否需要解构
   - npmrc: @dcp:registry=http://localhost:4873

3. 配置 configure 节点
   - 设置 loop、condition、styles 等基础配置项(通常都为 true)
   - 根据组件特性设置 isContainer、isModal、isPopper 等值
   - 定义快捷属性(shortcuts.properties)，选择 3-5 个最重要的属性

# 第二步：props 属性分析

1. 遍历组件的所有 props 定义

   - 提取每个 prop 的名称、类型、默认值和验证规则
   - 识别 prop 是否具有 required 属性
   - 分析 prop 的用途(根据名称和组件逻辑)

2. 属性分类

   - 将属性按功能分组：基础属性、样式属性、高级属性等
   - 为每个分组创建合适的中文标签和描述

3. 详细属性映射
   对每个属性生成规范的 schema 描述:
   - property: 属性名
   - label: 中文显示名称
   - description: 详细功能描述
   - type: 数据类型(string, number, boolean, object 等)
   - defaultValue: 默认值
   - widget: 基于属性类型选择适当的组件
     - 字符串类型 → InputConfigurator
     - 数字类型 → NumberConfigurator (添加 min/max/step 参数)
     - 布尔类型 → SwitchConfigurator
     - 颜色值 → ColorConfigurator
     - 下拉选项 → SelectConfigurator
     - 复杂对象/数组 → CodeConfigurator (JSON 编辑器)

# 第三步：事件分析

1. 识别组件中的所有事件(emit)调用

   - 提取事件名称、参数信息
   - 分析事件触发条件和上下文

2. 为每个事件创建规范的事件描述
   - 生成事件名称(通常以"on"开头，如 onClick)
   - 创建中文标签和描述
   - 定义 functionInfo，包括 params(参数定义)和 returns

# 第四步：插槽分析(如果有)

1. 识别组件模板中的<slot>标签

   - 记录插槽名称、默认内容和使用场景
   - 确定是否为具名插槽、作用域插槽

2. 在 schema 中添加对应的插槽配置(如需要)

# 第五步：snippets 示例代码生成

1. 创建多个有代表性的使用示例

   - 默认配置示例
   - 不同功能组合的典型示例(2-3 个)
   - 特殊场景示例(如有)

2. 为每个示例定义:
   - name: 中文名称
   - icon: 图标
   - snippetName: 使用唯一标识符
   - schema.props: 设置属性值

# 第六步：校验与优化

1. 确保生成的 schema 符合 OpenTiny 协议规范

   - 检查必填字段是否完整
   - 验证结构是否符合规范要求

2. 对属性分组进行优化

   - 确保分组逻辑清晰
   - 属性配置符合用户习惯

3. 完善描述文本
   - 确保描述准确表达属性功能
   - 添加使用提示和最佳实践建议

# 第七步：最终输出

生成完整的 JSON 结构，包含:

- id 和 version 信息
- name、component 和描述信息
- npm 配置
- group/category 分类
- configure 配置
- schema 定义(properties 和 events)
- snippets 示例代码

# 校验

与现有的其他组件 schema 进行三次交叉比对，校验生成的 schema，确保其完整性、准确性、规范性

# 输出

将生成的 schema 文件输出到 componentSchema 目录下
