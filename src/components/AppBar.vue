<template>
  <v-card style="width: 100%;">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      prominent
      src="https://jacks-centos7.sfo2.digitaloceanspaces.com/Random/Screen%20Shot%202020-01-20%20at%204.07.51%20pm.png"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

        <v-col>
            <v-img src="https://jacks-centos7.sfo2.digitaloceanspaces.com/Random/stemformatics_logo.59.51%20am.png" style="height: 30%; width: 30%; opacity: 0.7    "/> 
            <br>
            <v-toolbar-title style="color: white; font-family: roboto;">
            <!-- <p style="color: orange; font-family: roboto;">Data Portal</p> -->
            </v-toolbar-title>
        </v-col>
   
      <v-spacer></v-spacer>

	<template v-slot:extension>
		<v-tabs background-color="transparent">
			<v-tab to="/home"><p style="color: orange; font-family: roboto;">Home</p></v-tab>
			<v-tab to="/"><p style="color: orange; font-family: roboto;">About</p></v-tab>
			<v-tab to="/aa"><p style="color: orange; font-family: roboto;">Annotation | Analysis</p></v-tab>
			<v-tab to="/browse"><p style="color: orange; font-family: roboto;">Browse</p></v-tab>
			<v-tab to="/download"><p style="color: orange; font-family: roboto;">Download</p></v-tab>

		</v-tabs>
	</template>

    </v-app-bar>	
	</v-card>
  
</template>

<script>
export default {
	
}
</script>

<style scoped>
p {
  font-family: "Times New Roman", Times, serif;
}
</style>