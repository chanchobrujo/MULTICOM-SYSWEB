import * as net from "../../data/index.js";

export default {
	data() {
		return {
			email: "",
			passw: "",
			loading: false,

			viewalert: false,
			viewcolor: "red",
			viewicon: "mdi-alert",
			showpassword: false,
			message: "",
		};
	},
	validators: {
		email(value) {
			return this.$validator
				.value(value)
				.required()
				.email();
		},
		passw(value) {
			return this.$validator
				.value(value)
				.required()
				.minLength(6);
		},
	},
	methods: {
		async login() {
			const _await = await this.$validate();
			if (!_await) return;
			this.loading = true;

			try {
				const res = await this.axios.post("/auth/users", {
					email: this.email,
					password: this.passw,
				});
				net.addVarLS("token", res.data.token);
				net.addVarLS("user", res.data.userDetails);

				net.navigationPage("");
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
