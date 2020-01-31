(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{231:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h2",{attrs:{id:"application-died-in-status-loading-source-code-you-need-to-export-the-functional-lifecycles-in-xxx-entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-died-in-status-loading-source-code-you-need-to-export-the-functional-lifecycles-in-xxx-entry"}},[t._v("#")]),t._v(" "),s("code",[t._v("Application died in status LOADING_SOURCE_CODE: You need to export the functional lifecycles in xxx entry")])]),t._v(" "),s("p",[t._v("qiankun 抛出这个错误是因为无法从子应用的 entry js 中识别出其导出的生命周期钩子。")]),t._v(" "),s("p",[t._v("可以通过以下几个步骤解决这个问题：")]),t._v(" "),s("ol",[s("li",[t._v("检查子应用是否已经导出相应的生命周期钩子，参考"),s("RouterLink",{attrs:{to:"/zh/guide/getting-started.html#子应用导出相应的生命周期钩子"}},[t._v("文档")]),t._v("。")],1),t._v(" "),s("li",[t._v("检查子应用的 webpack 是否增加了指定的配置，参考"),s("RouterLink",{attrs:{to:"/zh/guide/getting-started.html#配置子应用的打包工具"}},[t._v("文档")]),t._v("。")],1),t._v(" "),s("li",[t._v("检查子应用的 "),s("code",[t._v("package.json")]),t._v(" 中的 "),s("code",[t._v("name")]),t._v(" 字段是否是子应用中唯一的。")])]),t._v(" "),s("p",[t._v("如果在上述步骤完成后仍有问题，可以尝试 "),s("strong",[t._v("将有问题的子应用的 "),s("code",[t._v("package.json")]),t._v(" 中的 "),s("code",[t._v("name")]),t._v(" 字段设置成跟主应用中注册的对应子应用的 "),s("code",[t._v("name")]),t._v(" 字段一致")]),t._v("，如：")]),t._v(" "),s("p",[t._v("假如子应用的 "),s("code",[t._v("package.json")]),t._v(" 是这样的：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"brokenSubApp"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("则将主应用中的 name 配置设置成一致的即可：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主应用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerMicroApps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里配置成跟子应用的 package.json 的 name 字段一致即可。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果你的 webpack 开启了分包策略(即打出了 1 个以上的 js)，这里则需要配置为 `brokenSubApp-[name]` 的形式，[name] 指代的你的 entry chunk 的名字，通常会是 main，那么这里就是 'brokenSubApp-main'。")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'brokenSubApp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//localhost:7100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    activeRule"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("genActiveRule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"为什么子应用加载的资源会-404？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么子应用加载的资源会-404？"}},[t._v("#")]),t._v(" 为什么子应用加载的资源会 404？")]),t._v(" "),s("p",[t._v("原因是 webpack 加载资源时未使用正确的 "),s("code",[t._v("publicPath")]),t._v("。")]),t._v(" "),s("p",[t._v("可以通过以下两个方式解决这个问题：")]),t._v(" "),s("h3",{attrs:{id:"a-使用-webpack-运行时-publicpath-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-使用-webpack-运行时-publicpath-配置"}},[t._v("#")]),t._v(" a. 使用 webpack 运行时 publicPath 配置")]),t._v(" "),s("p",[t._v("qiankun 将会在子应用 bootstrap 之前注入一个运行时的 publicPath 变量，你需要做的是在你的 entry js 的顶部添加如下代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("__webpack_public_path__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__INJECTED_PUBLIC_PATH_BY_QIANKUN__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("关于运行时 publicPath 的技术细节，可以参考 "),s("a",{attrs:{href:"https://webpack.js.org/guides/public-path/#on-the-fly",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack 文档"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"b-使用-webpack-静态-publicpath-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-使用-webpack-静态-publicpath-配置"}},[t._v("#")]),t._v(" b. 使用 webpack 静态 publicPath 配置")]),t._v(" "),s("p",[t._v("你需要将你的 webpack "),s("code",[t._v("publicPath")]),t._v(" 配置设置成一个绝对地址的 url，比如在开发环境可能是：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("//localhost:")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"子应用静态资源一定要支持跨域吗？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子应用静态资源一定要支持跨域吗？"}},[t._v("#")]),t._v(" 子应用静态资源一定要支持跨域吗？")]),t._v(" "),s("p",[t._v("是的。")]),t._v(" "),s("p",[t._v("由于 qiankun 是通过 fetch 去获取子应用的引入的静态资源的，所以必须要求这些静态资源支持"),s("a",{attrs:{href:"https://developer.mozilla.org/zh/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨域"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://segmentfault.com/a/1190000012550346",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx 跨域配置"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"如何确保主应用跟子应用之间的样式隔离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何确保主应用跟子应用之间的样式隔离"}},[t._v("#")]),t._v(" 如何确保主应用跟子应用之间的样式隔离")]),t._v(" "),s("p",[t._v("qiankun 将会自动隔离子应用之间的样式（开启沙箱的情况下），你可以通过手动的方式确保主应用与子应用之间的样式隔离。比如给主应用的所有样式添加一个前缀，或者假如你使用了 "),s("a",{attrs:{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer"}},[t._v("ant-design"),s("OutboundLink")],1),t._v(" 这样的组件库，你可以通过"),s("a",{attrs:{href:"https://ant.design/docs/react/customize-theme",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文档"),s("OutboundLink")],1),t._v("中的配置方式给主应用样式自动添加指定的前缀。")]),t._v(" "),s("h2",{attrs:{id:"如何独立运行子应用？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何独立运行子应用？"}},[t._v("#")]),t._v(" 如何独立运行子应用？")]),t._v(" "),s("p",[t._v("有些时候我们希望直接启动子应用从而更方便的开发调试，你可以使用这个全局变量来区分当前是否运行在 qiankun 的主应用的上下文中：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__POWERED_BY_QIANKUN__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"如何同时激活两个子应用？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何同时激活两个子应用？"}},[t._v("#")]),t._v(" 如何同时激活两个子应用？")]),t._v(" "),s("p",[t._v("子应用何时被激活完全取决于你的 "),s("code",[t._v("activeRule")]),t._v(" 配置，比如你可以这样配置 "),s("code",[t._v("activeRule")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerMicroApps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reactApp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//localhost:7100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("activeRule")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isReactApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react15App'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//localhost:7102'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("activeRule")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isReactApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vueApp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//localhost:7101'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("activeRule")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isVueApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("reactApp")]),t._v(" 和 "),s("code",[t._v("react15App")]),t._v(" 在 "),s("code",[t._v("activeRule")]),t._v(" 将会在 "),s("code",[t._v("isReactApp()")]),t._v(" 返回 "),s("code",[t._v("true")]),t._v(" 时同时展示。")]),t._v(" "),s("p",[t._v("请注意，页面上不能同时显示多个依赖于路由的子应用，因为浏览器只有一个 url，如果有多个依赖路由的子应用同时被激活，那么必定会导致其中一个 404。")]),t._v(" "),s("h2",{attrs:{id:"如何提取出公共的依赖库？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何提取出公共的依赖库？"}},[t._v("#")]),t._v(" 如何提取出公共的依赖库？")]),t._v(" "),s("blockquote",[s("p",[t._v("不要共享运行时，即便所有的团队都是用同一个框架。- "),s("a",{attrs:{href:"https://micro-frontends.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("微前端"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("虽然共享依赖并不建议，但如果你真的有这个需求，你可以在子应用中将公共依赖配置成 "),s("code",[t._v("external")]),t._v("，然后在主应用中导入这些公共依赖。")]),t._v(" "),s("p",[t._v("qiankun 2.0 版本将提供一种更智能的方式使其自动化。")]),t._v(" "),s("h2",{attrs:{id:"qiankun-能兼容-ie-吗？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qiankun-能兼容-ie-吗？"}},[t._v("#")]),t._v(" qiankun 能兼容 ie 吗？")]),t._v(" "),s("p",[t._v("目前不兼容，如果有足够多的用户有"),s("a",{attrs:{href:"https://github.com/umijs/qiankun/issues/182",target:"_blank",rel:"noopener noreferrer"}},[t._v("诉求"),s("OutboundLink")],1),t._v("，我们会考虑加入这个特性。")]),t._v(" "),s("p",[t._v("如果你现在就需要 ie 支持，你可以尝试关掉 "),s("code",[t._v("jsSandbox")]),t._v(" 配置来让你的应用可以跑在 ie 下（但要承担关掉沙箱后子应用之间可能造成冲突的风险）。")])])}),[],!1,null,null,null);a.default=e.exports}}]);