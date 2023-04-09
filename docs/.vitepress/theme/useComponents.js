// Don't remove this file, because it registers the demo components.
import lclButton from '../../../packages/Button.vue'
import lclInput from '../../../packages/Input.vue'
import lclConfirmDialog from '../../../packages/ConfirmDialog.vue'


import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export function useComponents (app) {
    app.component('lclButton', lclButton)
    app.component('lclInput', lclInput)
    app.component('lclConfirmDialog', lclConfirmDialog)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
}