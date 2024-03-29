import * as net from "../../data/index";

export default {
	data() {
		return {
			itemsPerPageArray: [3, 6],
			search: "",
			filter: {},
			page: 1,
			itemsPerPage: 4,
			sortBy: "name",
			keys: ["Nombre", "Apellido", "Numero", "Email"],
			items: [],

			_id: "",
			showMsg: false,
			message: "",
		};
	},
	computed: {
		numberOfPages() {
			return Math.ceil(this.items.length / this.itemsPerPage);
		},
		filteredKeys() {
			return this.keys.filter((key) => key !== "Name");
		},
	},
	created: function() {
		if (this.$global.norender) net.navigationPage("Login");
		else this._list();
	},
	methods: {
		nextPage() {
			if (this.page + 1 <= this.numberOfPages) this.page += 1;
		},
		formerPage() {
			if (this.page - 1 >= 1) this.page -= 1;
		},
		updateItemsPerPage(number) {
			this.itemsPerPage = number;
		},
		async _list() {
			try {
				const res = await this.axios.get(
					"/Users/Excep/" + this.$global.user.id,
				);
				this.items = res.data;
			} catch (error) {
				this.message = error.response.data.mensaje;
			}
		},
		async _ChangeState(id) {
			try {
				const res = await this.axios.put("/Users/State/" + id);
				this.message = res.data.mensaje;
			} catch (error) {
				this.message = error.response.data.mensaje;
			} finally {
				this._list();
				this.showMsg = true;
			}
		},
	},
};
