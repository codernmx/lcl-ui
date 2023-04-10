# Message 消息提示

常用的操作按钮。

## 基础用法

全局消息提示，借鉴Ant Design 风格


:::demo 
```vue
<template>
    <messageDemo/>
</template>
```
```vue
<script setup>
import Message from 'lcl-test-ui'
import { onMounted } from "vue";
const openMessage = (type) => {
    Message({ type, str: `this is a ${type} message !` })
}
</script>
<template>
    <div style="display: flex;justify-content: space-between;">
        <lcl-button type="success" @click="openMessage('success')">success消息</lcl-button>
        <lcl-button type="warning" @click="openMessage('warning')">warning消息</lcl-button>
        <lcl-button type="success" @click="openMessage('error')">error消息</lcl-button>
        <lcl-button type="success" @click="openMessage('info')">info消息</lcl-button>
    </div>
</template>
```

:::



## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| type    | 消息类型   | string  | success / warning  / error / info  |  |
| str    | 消息文字   |   |    |  |

