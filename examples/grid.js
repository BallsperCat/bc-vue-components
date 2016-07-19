define(["vue", "bc/vue/grid"], function (Vue) {
	"use strict";
	$.getJSON("grid.json").then(function (j) {
		console.log(j);
		return new Vue({
			el: document.body,
			data: {
				// 表头
				columns: j.columns,
				// 数据行
				rows: j.rows,
				singleChoice: false,
				searchText: "test"
			},
			ready: function () {
			},
			methods: {
				dblclickRow: function (row, index) {
					console.log("dblclickRow: index=%d, row=%s", index, JSON.stringify(row));
				},
				search: function (text) {
					console.log("search: text=%s", text);
					this.$refs.grid.reload();
				}
			}
		});
	});
});