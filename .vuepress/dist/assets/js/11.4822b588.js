(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{66:function(t,e,r){"use strict";r.r(e);var s=r(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),r("p",[t._v("框架的更新列表参见 "),r("router-link",{attrs:{to:"/UPDATE_LOG.html"}},[t._v("大事记、更新与发布")]),t._v(";框架jar包发布在"),r("a",{attrs:{href:"http://central.maven.org/maven2/com/centit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven Central")]),t._v("库中。")],1),r("p",[t._v("开源项目介绍"),r("router-link",{attrs:{to:"/"}},[t._v("参见项目列表")]),t._v("。")],1),t._m(3),r("p",[t._v("南大先腾框架平台并尤其说是一个技术框架平台不如说它是一个业务框架平台。我们说框架是一个高层设计，所以框架必须有一个目标，**先腾框架平台的目标就是为行业应用软件开发节约成本。**框架的适用范围定位在企业、学校、医院、政府等机构内部的办公系统。框架的核心思想包括：")]),t._m(4),t._m(5),r("p",[t._v("因为框架本身的不成熟且迭代比较快，所以框架的版本一直在更新，框架的版本号有一下约定。")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"南大先腾开源计划"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#南大先腾开源计划","aria-hidden":"true"}},[this._v("#")]),this._v(" 南大先腾开源计划")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"http://www.centit.com/",target:"_blank",rel:"noopener noreferrer"}},[this._v("南大先腾")]),this._v("一直注重在技术领域的研发投入，公司2008年成立基础研发部（现改名为技术管理中心），公司目前有300人，其中研发人员200余人，技术管理中心有30多人，占研发团队的15%。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("“诚信、敬业、高效、共享”是南大先腾的企业文化。“共享”不仅仅是企业内部共享经营成果，还表示南大先腾愿意与技术领域的同仁共享技术研发成果。技术管理中心从2016年启动了开源计划，将公司技术应用经验、基础研发平台、研发工具等等从行业业务中剥离出来，并在"),e("a",{attrs:{href:"https://www.github.com/ndxt",target:"_blank",rel:"noopener noreferrer"}},[this._v("https://www.github.com/ndxt")]),this._v("上开源，文档参见"),e("a",{attrs:{href:"https://codefan.gitbooks.io/opensourceplan/content/",target:"_blank",rel:"noopener noreferrer"}},[this._v(" https://codefan.gitbooks.io/opensourceplan/content/")]),this._v("。 任何个人或企业都可以免费使用。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"先腾框架平台的目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先腾框架平台的目标","aria-hidden":"true"}},[this._v("#")]),this._v(" 先腾框架平台的目标")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[t._v("**通过确定技术选型来营造一个共同的学习氛围，增进开发人员交流同事也减小团体人员变动的成本。**框架选择的技术都是非常知名的开源平台，比如spring mvc，spring security 等等。同时为了兼顾开发人员的习惯，框架并没有绑定到一个具体的技术，比如持久化可以选择spring jdbc，MyBaits或者hibernate都是主流的框架，框架只是做了建议使用jdbc，因为框架对jdbc做了jpa的封装，这样用起来跟灵活也大大减少了编码量。")]),r("li",[t._v("框架的一个最有重要的工作就是定义了前后端的通讯数据格式、Session中的数据格式、组织机构和权限管理的框架。"),r("strong",[t._v("这个是框架唯一强行要求遵循的规范")]),t._v("，这个规范使用接口的形式规定的，并没有绑定到持久化的数据结构；框架对这个接口有多种实现，有json格式、关系数据库和远程调用框架中集成平台服务的，开发人员也可以用和业务更贴切的方式自行实现。"),r("strong",[t._v("遵循这个规范开发的项目可以非常容易（零开发，一般只要简单的配置）的和框架中其他服务、组件进行集成")]),t._v("。")]),r("li",[r("strong",[t._v("框架")]),t._v("中的commons工程，通过将我们开发过程中经常用到的算法进行封装来减少开发。注意：我们强力推荐使用Apache 的commons中的算法，只是在找不到现成的算法才在我们的commons中查找或者添加，"),r("strong",[t._v("不建议在业务系统中编写任何和业务无关的算法")]),t._v("。")]),r("li",[r("strong",[t._v("框架将组织机构、功能权限、数据范围权限、数据服务、操作日志等等通用的功能抽象出来，让开发人员只关心业务实现。")])]),r("li",[r("strong",[t._v("框架")]),t._v("开发的一个"),r("strong",[t._v("重点工作就是开发各种小的功能服务程序")]),t._v("，比如：文件服务、即时通讯服务、统计报表服务、工作流服务等等。这些可以任务一个粒度更大的功能封装，这样可以为业务开发节省大量的时间。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"版本说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 版本说明")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("版本号格式为 （主版本号）.（次版本号）(-SNAPSHOT 或者 .修订号）。比如 1.1-snapshot ， 1.1.1710。")]),e("li",[this._v("主版本号如果有变化表示前后不兼容，就是无法用脚本、程序进行自动的升级。如果需要升级必须要大量的人工操作，比如将底层struts2换成了spring mvc、jsp换成完全前后端分离的方式。")]),e("li",[this._v("次版本号的变更（主版本号相同），适用于可以使用脚本进行升级，或者只要少量的规则性人工操作就可以完成版本迁移（升级）。")]),e("li",[this._v("修订号，主要是修改一些bug或者添加一些新特性。修订号为年月，如1801表示18年1月。")]),e("li",[this._v("框架开发过程中都使用snapshot版本。")]),e("li",[this._v("项目开发过程中可引用框架的snapshot版本也可以引用发行版本，但是项目一旦在正式环境部署后一定要使用发行版本。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"版权说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版权说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 版权说明")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("南大先腾所有开源项目采用"),e("a",{attrs:{href:"http://www.apache.org/licenses/LICENSE-2.0.txt",target:"_blank",rel:"noopener noreferrer"}},[this._v("The Apache License, Version 2.0")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"交流与服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交流与服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 交流与服务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("发现框架有bug或者对框架有建议可以直接在github的项目中以issue的方式提交，比如 "),e("a",{attrs:{href:"https://github.com/ndxt/centit-framework-system/issues",target:"_blank",rel:"noopener noreferrer"}},[this._v("https://github.com/ndxt/centit-framework-system/issues")]),this._v(" 。")]),e("li",[this._v("先腾提供框架交流群，这个群是先腾提供的一个交流平台，不是服务平台，所以我们不承诺一定会回复您的问题。加群验证词为：“我对先腾框架很有兴趣希望加群交流”；群号：344548623，二维码：\n"),e("img",{attrs:{src:"/assets/qq_qun.png",alt:""}}),this._v("。")]),e("li",[this._v("如果您所在企业想使用先腾框架（使用框架是免费的，但是要遵循Apache License 2.0）并且希望得到专有的服务请联系框架交流群的群管理员。")])])}],!1,null,null,null);e.default=n.exports}}]);