<template>
    <div class="lcl-message" :style="style[type]" v-show="visible">
        <!-- success -->
        <svg v-if="type === 'success'" focusable="false" class="" data-icon="check-circle" width="1em" height="1em"
            fill="currentColor" aria-hidden="true" viewBox="64 64 896 896">
            <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z">
            </path>
        </svg>
        <!-- warning -->
        <svg v-if="type === 'warning'" focusable="false" class="" data-icon="exclamation-circle" width="1em" height="1em"
            fill="currentColor" aria-hidden="true" viewBox="64 64 896 896">
            <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z">
            </path>
        </svg>
        <!-- error -->
        <svg v-if="type === 'error'" focusable="false" class="" data-icon="close-circle" width="1em" height="1em"
            fill="currentColor" aria-hidden="true" viewBox="64 64 896 896">
            <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z">
            </path>
        </svg>
        <!-- info -->
        <svg v-if="type === 'info'" focusable="false" class="" data-icon="info-circle" width="1em" height="1em"
            fill="currentColor" aria-hidden="true" viewBox="64 64 896 896">
            <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z">
            </path>
        </svg>
        <span class="text">{{ str }}</span>
    </div>
</template>
<script>
import { onMounted, ref } from "vue";
export default {
    name: "lclMessage",
    //	这个是传值方法，通过父级组件传入提示状态以及提示文本
    //	可以根据不同业务自定义更多的状态
    props: {
        type: {
            type: String,
            //	success 成功
            //	warn 警告
            //	error 错误
            default: "success",
        },
        str: {
            type: String,
            default: "登陆成功",
        },
    },
    setup () {
        //	定义一个对象，包含三种情况的样式，对象key就是类型字符串
        //	icon图标这一部分省略了，有需要的可以自己加入
        const style = {
            warning: {
                color: "#faad14",
            },
            error: {
                color: "#F56C6C",
            },
            success: {
                color: "#52c41a",
            },
            info: {
                color: "#1890ff",
            },
        };
        const visible = ref(false);
        onMounted(() => {
            visible.value = true;
        });
        return { style, visible };
    },
};
</script>

<style scoped lang="scss">
//	css样式部分可以根据需求自定义
.lcl-message {
    display: inline-block;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: all;
    padding: 10px 16px;
    position: fixed;
    z-index: 9999;
    left: 50%;
    top: 50px;
    margin-left: -150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e4e4e4;
    background: #fff;

    .text {
        color: rgba(0, 0, 0, 0.85);
        font-size: 14px;
        padding-left: 5px;
    }

    //	以下是过渡动画，如不需要可删去亦可改进
    animation: move 0.38s linear forwards;

    @keyframes move {
        0% {
            transform: translate3d(0, -75px, 0);
            opacity: 0.16;
        }

        50% {
            opacity: 0.68;
        }

        100% {
            transform: none;
            opacity: 1;
        }
    }
}</style>