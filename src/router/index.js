import Vue from "vue";
import VueRouter from "vue-router";

import Inicio from "../views/Inicio.vue";

import Login from "../views/Login/Login.vue";
import Recovery from "../views/Login/Recovery.vue";

import Profile from "../views/Profile/Perfil.vue";

import Clientes from "../views/Clientes/Clientes.vue";
import CreateClientes from "../views/Clientes/Create.vue";
import EditarClientes from "../views/Clientes/Editar.vue";

import CrearCitas from "../views/Citas/CrearCitas.vue";
import MisCitas from "../views/Citas/MisCitas.vue";
import citaDetails from "../views/Citas/citaDetails.vue";

import Usuarios from "../views/Usuarios/Usuarios.vue";
import CreateUsuarios from "../views/Usuarios/Create.vue";

import error404 from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Inicio",
		component: Inicio,
	},
	{
		path: "/Login",
		name: "Login",
		component: Login,
	},
	{
		path: "/Recuperar/Contrasena",
		name: "Recovery",
		component: Recovery,
	},
	{
		path: "/Perfil",
		name: "Profile",
		component: Profile,
	},
	{
		path: "/Clientes",
		name: "Clientes",
		component: Clientes,
	},
	{
		path: "/Clientes/Registrar",
		name: "CreateClientes",
		component: CreateClientes,
	},
	{
		path: "/Clientes/Editar/:id",
		name: "EditarClientes",
		component: EditarClientes,
	},
	{
		path: "/CrearCitas",
		name: "CrearCitas",
		component: CrearCitas,
	},
	{
		path: "/MisCitas",
		name: "MisCitas",
		component: MisCitas,
	},
	{
		path: "/Usuarios",
		name: "Usuarios",
		component: Usuarios,
	},
	{
		path: "/Usuarios/Registrar",
		name: "CreateUsuarios",
		component: CreateUsuarios,
	},
	{
		path: "/MisCitas/Detalle/:id",
		name: "citaDetails",
		component: citaDetails,
	},
	{
		path: "*",
		name: "error404",
		component: error404,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
