(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{675:function(t,a,s){"use strict";s.r(a);var n=s(38),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"语法规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法规范")]),t._v(" "),s("p",[t._v("Mock.js 的语法规范包括两部分：")]),t._v(" "),s("ol",[s("li",[t._v("数据模板定义规范（Data Template Definition，DTD）")]),t._v(" "),s("li",[t._v("数据占位符定义规范（Data Placeholder Definition，DPD）")])]),t._v(" "),s("h2",{attrs:{id:"数据模板定义规范-dtd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据模板定义规范-dtd","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据模板定义规范 DTD")]),t._v(" "),s("p",[s("strong",[t._v("数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 属性名   name")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成规则 rule")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 属性值   value")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name|rule'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value\n")])])]),s("p",[s("strong",[t._v("注意：")])]),t._v(" "),s("ul",[s("li",[s("em",[t._v("属性名")]),t._v(" 和 "),s("em",[t._v("生成规则")]),t._v(" 之间用竖线 "),s("code",[t._v("|")]),t._v(" 分隔。")]),t._v(" "),s("li",[s("em",[t._v("生成规则")]),t._v(" 是可选的。")]),t._v(" "),s("li",[s("em",[t._v("生成规则")]),t._v(" 有 7 种格式：\n"),s("ol",[s("li",[s("code",[t._v("'name|min-max': value")])]),t._v(" "),s("li",[s("code",[t._v("'name|count': value")])]),t._v(" "),s("li",[s("code",[t._v("'name|min-max.dmin-dmax': value")])]),t._v(" "),s("li",[s("code",[t._v("'name|min-max.dcount': value")])]),t._v(" "),s("li",[s("code",[t._v("'name|count.dmin-dmax': value")])]),t._v(" "),s("li",[s("code",[t._v("'name|count.dcount': value")])]),t._v(" "),s("li",[s("code",[t._v("'name|+step': value")])])])]),t._v(" "),s("li",[s("strong",[s("em",[t._v("生成规则")]),t._v(" 的 含义 需要依赖 "),s("em",[t._v("属性值的类型")]),t._v(" 才能确定。")])]),t._v(" "),s("li",[s("em",[t._v("属性值")]),t._v(" 中可以含有 "),s("code",[t._v("@占位符")]),t._v("。")]),t._v(" "),s("li",[s("em",[t._v("属性值")]),t._v(" 还指定了最终值的初始值和类型。")])]),t._v(" "),s("p",[s("strong",[t._v("生成规则和示例：")])]),t._v(" "),s("h3",{attrs:{id:"_1-属性值是字符串-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-属性值是字符串-string","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 属性值是字符串 "),s("strong",[t._v("String")])]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("'name|min-max': string")])]),t._v(" "),s("p",[t._v("通过重复 "),s("code",[t._v("string")]),t._v(" 生成一个字符串，重复次数大于等于 "),s("code",[t._v("min")]),t._v("，小于等于 "),s("code",[t._v("max")]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("'name|count': string")])]),t._v(" "),s("p",[t._v("通过重复 "),s("code",[t._v("string")]),t._v(" 生成一个字符串，重复次数等于 "),s("code",[t._v("count")]),t._v("。")])])]),t._v(" "),s("h3",{attrs:{id:"_2-属性值是数字-number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-属性值是数字-number","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 属性值是数字 "),s("strong",[t._v("Number")])]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("'name|+1': number")])]),t._v(" "),s("p",[t._v("属性值自动加 1，初始值为 "),s("code",[t._v("number")]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("'name|min-max': number")])]),t._v(" "),s("p",[t._v("生成一个大于等于 "),s("code",[t._v("min")]),t._v("、小于等于 "),s("code",[t._v("max")]),t._v(" 的整数，属性值 "),s("code",[t._v("number")]),t._v(" 只是用来确定类型。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("'name|min-max.dmin-dmax': number")])]),t._v(" "),s("p",[t._v("生成一个浮点数，整数部分大于等于 "),s("code",[t._v("min")]),t._v("、小于等于 "),s("code",[t._v("max")]),t._v("，小数部分保留 "),s("code",[t._v("dmin")]),t._v(" 到 "),s("code",[t._v("dmax")]),t._v(" 位。")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Mock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number1|1-100.1-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number2|123.1-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number3|123.3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number4|123.10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// =>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.92")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.51")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.777")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.1231091814")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-属性值是布尔型-boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-属性值是布尔型-boolean","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 属性值是布尔型 "),s("strong",[t._v("Boolean")])]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("'name|1': boolean")])]),t._v(" "),s("p",[t._v("随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("'name|min-max': value")])]),t._v(" "),s("p",[t._v("随机生成一个布尔值，值为 "),s("code",[t._v("value")]),t._v(" 的概率是 "),s("code",[t._v("min / (min + max)")]),t._v("，值为 "),s("code",[t._v("!value")]),t._v(" 的概率是 "),s("code",[t._v("max / (min + max)")]),t._v("。")])])]),t._v(" "),s("h3",{attrs:{id:"_4-属性值是对象-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-属性值是对象-object","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 属性值是对象 "),s("strong",[t._v("Object")])]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("'name|count': object")])]),t._v(" "),s("p",[t._v("从属性值 "),s("code",[t._v("object")]),t._v(" 中随机选取 "),s("code",[t._v("count")]),t._v(" 个属性。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("'name|min-max': object")])]),t._v(" "),s("p",[t._v("从属性值 "),s("code",[t._v("object")]),t._v(" 中随机选取 "),s("code",[t._v("min")]),t._v(" 到 "),s("code",[t._v("max")]),t._v(" 个属性。")])])]),t._v(" "),s("h3",{attrs:{id:"_5-属性值是数组-array"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-属性值是数组-array","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. 属性值是数组 "),s("strong",[t._v("Array")])]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("'name|1': array")])]),t._v(" "),s("p",[t._v("从属性值 "),s("code",[t._v("array")]),t._v(" 中随机选取 1 个元素，作为最终值。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("'name|+1': array")])]),t._v(" "),s("p",[t._v("从属性值 "),s("code",[t._v("array")]),t._v(" 中顺序选取 1 个元素，作为最终值。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("'name|min-max': array")])]),t._v(" "),s("p",[t._v("通过重复属性值 "),s("code",[t._v("array")]),t._v(" 生成一个新数组，重复次数大于等于 "),s("code",[t._v("min")]),t._v("，小于等于 "),s("code",[t._v("max")]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("'name|count': array")])]),t._v(" "),s("p",[t._v("通过重复属性值 "),s("code",[t._v("array")]),t._v(" 生成一个新数组，重复次数为 "),s("code",[t._v("count")]),t._v("。")])])]),t._v(" "),s("h3",{attrs:{id:"_6-属性值是函数-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-属性值是函数-function","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. 属性值是函数 "),s("strong",[t._v("Function")])]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("'name': function")])]),t._v(" "),s("p",[t._v("执行函数 "),s("code",[t._v("function")]),t._v("，取其返回值作为最终的属性值，函数的上下文为属性 "),s("code",[t._v("'name'")]),t._v(" 所在的对象。")])])]),t._v(" "),s("h3",{attrs:{id:"_7-属性值是正则表达式-regexp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-属性值是正则表达式-regexp","aria-hidden":"true"}},[t._v("#")]),t._v(" 7. 属性值是正则表达式 "),s("strong",[t._v("RegExp")])]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("'name': regexp")])]),t._v(" "),s("p",[t._v("根据正则表达式 "),s("code",[t._v("regexp")]),t._v(" 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Mock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'regexp1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[a-z][A-Z][0-9]/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'regexp2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\w\\W\\s\\S\\d\\D/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'regexp3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d{5,10}/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// =>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"regexp1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pJ7"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"regexp2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"F)\\fp1G"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"regexp3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"561659409"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"数据占位符定义规范-dpd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据占位符定义规范-dpd","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据占位符定义规范 DPD")]),t._v(" "),s("p",[s("em",[t._v("占位符")]),t._v(" 只是在属性值字符串中占个位置，并不出现在最终的属性值中。")]),t._v(" "),s("p",[s("em",[t._v("占位符")]),t._v(" 的格式为：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@占位符\n@占位符(参数 [, 参数])\n")])])]),s("p",[s("strong",[t._v("注意：")])]),t._v(" "),s("ul",[s("li",[t._v("用 "),s("code",[t._v("@")]),t._v(" 来标识其后的字符串是 "),s("em",[t._v("占位符")]),t._v("。")]),t._v(" "),s("li",[s("em",[t._v("占位符")]),t._v(" 引用的是 "),s("code",[t._v("Mock.Random")]),t._v(" 中的方法。")]),t._v(" "),s("li",[s("em",[t._v("占位符")]),t._v(" 也可以引用 "),s("em",[t._v("数据模板")]),t._v(" 中的属性。")]),t._v(" "),s("li",[s("em",[t._v("占位符")]),t._v(" 会优先引用 "),s("em",[t._v("数据模板")]),t._v(" 中的属性。")]),t._v(" "),s("li",[s("em",[t._v("占位符")]),t._v(" 支持 "),s("em",[t._v("相对路径")]),t._v(" 和 "),s("em",[t._v("绝对路径")]),t._v("。")]),t._v(" "),s("li",[t._v("可以使用 "),s("code",[t._v("\\\\")]),t._v(" 来转义 "),s("code",[t._v("@")]),t._v(" 符号。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Mock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@FIRST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    middle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@FIRST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@LAST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example\\\\@gmail.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    full"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@first @middle @last'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// =>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Charles"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"middle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Brenda"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lopez"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example@gmail.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"full"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Charles Brenda Lopez"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);