import * as net from "../../data/index.js";

export default {
	data() {
		return {
			email: "",
			message: "",
			loading: false,

			viewalert: false,
			viewcolor: "red",
			viewicon: "mdi-alert",
		};
	},
	validators: {
		email(value) {
			return this.$validator
				.value(value)
				.required()
				.email();
		},
	},
	methods: {
		async recovery() {
			const _await = await this.$validate();
			if (!_await) return;
			this.loading = true;

			try {
				const res = await this.axios.post(
					"/recovery/password",
					{ email: this.email },
				);

				this.viewcolor = "green";
				this.viewicon = "mdi-email-check ";
				this.message = res.data.mensaje;
				this.viewalert = true;
			} catch (error) {
				this.message = error.response.data.mensaje;
				this.viewalert = true;
			} finally {
				this.loading = false;
			}
		},
	},
	created: function() {
		if (this.$global.isrender) net.navigationPage("");
		if (this.$global.norender) return;
	},
};
