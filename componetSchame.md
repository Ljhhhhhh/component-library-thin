## 组件改造

请你参考 @index.vue @index.vue 帮我把 @index.vue 改造成 defineComponent 的写法
注意，你需要把 props.chartConfig.option 下的每一个属性更新为单独的 props，需要把 computedIoResult、getIoResult 方法移除，如 computedIoResult(waferName) 更新为 waferName

## 组件文档

现在请你参考 @Loadport.stories.ts @Wafer.stories.ts 帮我给 @index.vue 编写组件文档

## schema 生成

你是一位心思缜密且喜欢反复验证的数据处理大师
我现在需要你来帮我生成组件的 schema 数据，在这之前你需要先充分学习此说明文档：@引入第三方组件库，再你学习完成之后，还有以下几个点需要你遵守：

- version 为当前@package.json 的 version
- group 请你都给我设置为 DCP
- doc_url、screenshot、tags、keywords 默认为空
- dev_mode 为 proCode
- id 为 1
- npm 配置除 exportName 外为默认值
- configure 配置为相同的默认值
- 仔细思考并验证后再输出 schema
- 仔细思考并验证后再输出 snippets

### widget.component

对于 schema.properties.content 下的 widget.component（配置属性的渲染组件）说明如下：
一般可以通过属性的类型判断选用哪个组件，string 类型一般选择 MetaInput 或 MetaBindI18n、enum 类型一般选择 MetaSelect、object 类型一般选择 MetaCodeEditor，具体可用的有如下组件：

- MetaInput
- MetaBindI18n
- MetaBindVariable
- MetaCodeEditor
- MetaNumber
- MetaRadio
- MetaSelect
- MetaSlider
- MetaSwitch
- MetaColor
- MetaDatePicker
- MetaJsSlot
- MetaSlot

请你根据组件属性来合理选择 component

## 预习验证

现在请你参考以下组件和对应的 schema 文件做一次预习验证

1. @index.vue 以及他对应的 schema 文件 @SixAxisRobot.json
2. @Index.vue 以及他对应的 schema 文件 @DcpStatus.json
3. @index.vue 以及他对应的 schema 文件 @MainMenuButton.json

## 生成

现在请你帮我生成 @index.vue 组件的 schema，不要急于给出最终的 schema，而是充分验证后给出准确的 schema
