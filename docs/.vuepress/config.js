module.exports = {
    title: 'lcl-ui',
    description: 'lcl-ui',
    themeConfig: {
        // 顶部导航栏
        nav: [
            {
                text: "起步",
                link: "/",
            },
            {
                text: "指南",
                link: "/guide/",
                target: "_blank", //_blank打开一个新窗口 _self在内部打开
            },
            {
                text: "组件",
                link: "/components",
            },
        ],
        sidebarDepth: 0, //0读取1级标题 1读取1级和2级标题 2读取1级、2级、3级标题
        // 侧边栏
        // sidebar: [
        //   "/components/alert",//会根据/components/alert.md中配置的(#标题)自动生成(侧边栏title),读取的标题层级由sidebarDepth决定
        //   ["/components/button","手动设置侧标了title"] 作用于分组内部的实验
        // ],
        // 分组排列
        sidebar: [
            {
                path: "/components/alert", //分组默认地址
                title: "基本组件", //分组标题
                sidebarDepth: 1,//作用在项内部的层级，优先级比外部的更高
                children: [
                    "components/alert", //分组内部项
                    ["components/button", "手动设置侧标了title"],
                ],
            },
        ],
    }
}