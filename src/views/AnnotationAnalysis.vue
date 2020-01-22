<template>
    <v-container class="grey lighten-5">

        <v-row>
                <v-col cols="3" sm="6" md="3">
                    <p style="font-size: 200%; text-align: center; color: grey; font-family: arial; font-style: normal;"> Welcome to the Stemformatics Data Portal </p>
                </v-col>
            </v-row>

        <v-row>

            <br>
            

            <v-col cols="3" sm="6" md="3"/>

                <v-col cols="4" sm="6" md="3">
                    <router-link to="/browse" style="text-decoration: none;">
                        <v-btn color="#6A76AB" tile> 
                            <p style="color: orange; font-family: roboto;">Browse All Data</p>
                        </v-btn>
                    </router-link>
                    <v-text-field
                        style="font-family: roboto;"
                        label="Search"
                    ></v-text-field>
                </v-col>

            <v-col cols="3" sm="6" md="3"/>

    
        
    
<!--       
            <v-col cols="3">
            </v-col>

            <v-col cols="2">
                <a href="#"><v-img
                src="https://jacks-centos7.sfo2.digitaloceanspaces.com/Random/atlas_square_pic.18.46%20pm.png"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="300"
                max-height="300"
                /></a>
            </v-col>

            <v-col cols="2">
                <v-img
                src="https://bad.src/not/valid"
                lazy-src="https://picsum.photos/id/11/100/60"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="300"
                max-height="300"
                />
            </v-col>
            
            <v-col cols="2">
                <v-img
                src="https://bad.src/not/valid"
                lazy-src="https://picsum.photos/id/11/100/60"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="300"
                max-height="300"
                />
            </v-col>

            <v-col cols="3">
            </v-col> -->

        </v-row>
  </v-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>

