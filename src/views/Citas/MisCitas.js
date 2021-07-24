import * as net from "../../data/index";

export default {
	data() {
		return {
			reservations: [],
			links: [
				{
					text: "Mis citas",
					link: "/MisCitas",
				},
				{
					text: "Citas espiradadas",
					link: "/MisCitas/Expiradas",
				},
				{
					text: "Citas de clientes",
					link: "/MisCitas/CLientes",
				},
			],
		};
	},
	created: function() {
		if (this.$global.norender) net.navigationPage("Login");
		else this.listReservation();
	},
	methods: {
		async listReservation() {
			try {
				const res = await this.axios.get("/Reservation/");
				this.reservations = res.data;
			} catch (error) {
				console.log(error.response.data);
			}
		},
	},
};
