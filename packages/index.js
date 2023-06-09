import lclButton from './button/index.vue'
import lclInput from './input/index.vue'
import lclDivider from './divider/index.vue'
import Message from './Message/index.js'


const components = [
	lclButton,
	lclInput,
	lclDivider,
	Message
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
	// 遍历注册全局组件
	components.forEach(component => {
		Vue.component(component.name, component)
	})

	Vue.config.globalProperties.$lclMessage = Message

	// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
	if (typeof window !== 'undefined' && window.Vue) {
		install(window.Vue)
	}

}

const lclUi = {
	install
}
export {
	install,
	lclInput,
	lclButton,
	lclDivider,
	Message
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default lclUi