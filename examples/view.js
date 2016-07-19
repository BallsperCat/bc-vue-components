define(["vue", "bc/vue/toolbar", "bc/vue/button", "bc/vue/button-set", "bc/vue/search", "bc/vue/grid"], function (Vue) {
	"use strict";
	return new Vue({
		el: document.body,
		data: {
			condition: {
				searchText: "",
				status: "0",
			},
			showBorder: false,
			quickSearch: false
		},
		methods: {
			clickCheck: function () {
				console.log("[inst] 点击查看按钮");
			},
			changeStatus: function (status, old) {
				console.log("[inst] changeStatus: new=%s, old=%s", JSON.stringify(status), JSON.stringify(old));
				this.$refs.grid.reload();
			},
			search: function (text) {
				this.$refs.grid.reload();
			},
			export: function (scope) {
				console.log("[inst] export: scope=%s", scope);
			},
			import: function () {
				console.log("[inst] import");
			}
		},
		ready: function () {
			this.$refs.grid.reload();// 手动加载 grid 数据
		}
	});
});