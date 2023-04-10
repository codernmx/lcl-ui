<template>
    <div :class="mycClass">
        <button class="my-button">
            <slot></slot>
        </button>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'lclButton',
});
</script>
<script setup>
import { computed } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'default'
    }
})

const mycClass = computed(() => {
    return ['lcl-button', `lcl-button-${props.type}`]
})

</script>
<style lang="scss" scoped>
button {
    outline: none;
    border: 0;
    background: none;
    cursor: pointer;
}

.lcl-button {
    display: inline-block;

    button {
        padding: 12px 24px;
        border-radius: 4px;
        border: 1px solid #b4b0b0;
        color: #ffffff;

        &:hover,
        &:focus {
            opacity: 0.8;
        }
    }
}

.lcl-button-default {
    button {
        background: #b4b0b0;
    }
}

.lcl-button-primary {
    button {
        background: #409EFF;
    }
}

.lcl-button-success {
    button {
        background: #67C23A;
    }
}

.lcl-button-warning {
    button {
        background: #E6A23C;
    }
}

.lcl-button-danger {
    button {
        background: #F56C6C;
    }
}
</style>