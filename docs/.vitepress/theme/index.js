import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'

import lclUi from '../../../packages/index'
export default {
    ...DefaultTheme,
    enhanceApp (ctx) {
        DefaultTheme.enhanceApp(ctx)
        useComponents(ctx.app)
        ctx.app.use(lclUi)
    }
}
