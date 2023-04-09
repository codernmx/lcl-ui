<!--
 * @Date: 2023-03-28 14:08:45
 * @LastEditTime: 2023-03-28 15:12:56
-->
<template>
    <el-dialog v-model="visible" width="417px" :before-close="handleClose" :modal="false" style="border-radius: 16px;"
        top="30vh">
        <h3>{{ title }}</h3>
        <div style="padding: 0 12px;">
            <slot></slot>
        </div>
        <template #footer>
            <div style="display: flex;justify-content: center;">
                <el-button @click="visible = false" color="#D5D9E2" class="btn">取消</el-button>
                <el-button @click="submit" color="#3F50F2" class="btn">{{ confirmText }}</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script>
export default {
    name: "lclConfirmDialog"
}
</script>

<script setup>
import { ref, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const props = defineProps({
    confirmText: {
        type: String,
        default: '确定',
    },
    title: {
        type: String,
        default: '是否确认删除？',
    },
    sda: String,
    strData: String,
    arrFor: Array
})
const visible = ref(true)
const handleClose = (done) => {
    proxy.$emit('close')
}
const submit = (done) => {
    proxy.$emit('submit')
}
</script>
<style scoped>
h3 {
    font-size: 22px;
    font-family: PingFang SC-Semibold, PingFang SC;
    font-weight: 600;
    color: #111111;
    text-align: center;
}

.btn {
    width: 128px;
    height: 56px;
    border-radius: 8px;
    opacity: 1;
}
</style>