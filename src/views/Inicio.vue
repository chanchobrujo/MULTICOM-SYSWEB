<template>
	<v-parallax dark src="../assets/Lateness-pana.png">
		<v-container>
			<v-row align="center" justify="center">
				<v-col class="text-center" cols="12">
					<h1
						class="text-h1 font-weight-thin mb-4 secondary--text"
					>
						BIENVENIDO
					</h1>
					<v-btn text color="gray" v-if="$global.isrender">
						<h3>{{ $global.user.nombre }}</h3>
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-parallax>
</template>
