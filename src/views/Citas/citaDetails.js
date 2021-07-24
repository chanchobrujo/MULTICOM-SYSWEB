//id: this.$route.params.id,
import * as net from "../../data/index";

export default {
	data() {
		return {
			id: this.$route.params.id,

			citadata: {
				fecha: "",
				horaFin: "",
				horaInicio: "",
				proposito: "",
				estado: "",
				clientes: [],
				usuario: "",

				reclamo: "",
			},
		};
	},
	created: function() {
		if (this.$global.norender) net.navigationPage("Login");
		else this.extrData();
	},
	methods: {
		async extrData() {
			try {
				const res = await this.axios.get(
					"/Reservation/viewReservation/" + this.id,
				);
				this.citadata.clientes = res.data.clientes;
				this.citadata.estado = res.data.estado;
				this.citadata.fecha = res.data.fecha;
				this.citadata.horaFin = res.data.horaFin;
				this.citadata.horaInicio = res.data.horaInicio;
				this.citadata.proposito = res.data.proposito;
				this.citadata.reclamo = res.data.reclamo;
				this.citadata.usuario = res.data.usuario;
			} catch (error) {
				console.log(error.response.data.mensaje);
				net.navigationPage("/MisCitas");
			}
		},
	},
};
