import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'


// import elementplus from "element-plus"
// import "element-plus/dist/index.css";

// import './styles/index.css'
// import Button from '../../../src/components/Button.vue'
// import '../../../src/styles/index.css'

export default {
    ...DefaultTheme,
    enhanceApp (ctx) {
        DefaultTheme.enhanceApp(ctx)
        useComponents(ctx.app)
        // ctx.app.use(elementplus)
        // ctx.app.component(Button.name, Button)
    }
}

// import theme from 'vitepress/dist/client/theme-default/index'
// import 'vitepress-theme-demoblock/dist/theme/styles/index.css'


// import demo from "vitepress-theme-demoblock";
// import "element-plus/dist/index.css";
// import elementplus from "element-plus"
// export default {
//     ...theme,
//     enhanceApp: async ({ app, router, siteData }) => {
//         // app is the Vue 3 app instance from `createApp()`. router is VitePress'
//         // custom router. `siteData`` is a `ref`` of current site-level metadata.
//         app.use(elementplus)
//         app.component('demo', demo)
//     },
// };




// export default {
//   enhanceApp({ app }) {
//     app.component('Demo', Demo)
//     app.component('DemoBlock', DemoBlock)
//   }
// }
