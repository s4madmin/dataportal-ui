<template>
    <v-container class="grey lighten-5">

        <v-row>
            <v-col cols="12">
                <p style="font-size: 200%; text-align: center; color: grey; font-family: arial; font-style: normal;"> Welcome to the Stemformatics Data Portal </p>
            </v-col>
        </v-row>

        <br>

        <v-row>
            <v-col cols="12" sm="4"/>

            <v-col cols="12" sm="2">
                <router-link to="/browse" style="text-decoration: none;">
                    <v-btn color="#6A76AB" class="text-center" tile x-large> 
                        <p style="width: auto; color: orange; font-family: roboto;">Browse All Datasets</p>
                    </v-btn>
                </router-link>
            </v-col>

            <v-col cols="12" sm="2">
                <v-text-field
                    style="font-family: roboto;"
                    label="Search"
                    single-line
                    solo
                ></v-text-field>
            </v-col>

            <v-col cols="12" sm="4"/>

        </v-row>
    
        <br>
        <br>
        <br>
        <br>

        <v-row>
            <v-col cols="12" sm="3"/>

            <v-col cols="12" sm="2">
                <v-tooltip left>
                    <template v-slot:activator="{ on }">
                        <a href="www.stemformatics.org/atlas" v-on="on"><v-img
                        src="https://dataportal-ui-github.s3-ap-southeast-2.amazonaws.com/static/atlas.png"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        max-width="100%"
                        max-height="100%"
                        /></a>
                    </template>
                    <span>Tooltip</span>
                </v-tooltip>
            </v-col>

            <v-col cols="12" sm="2">
                <a href="#"><v-img
                src="https://dataportal-ui-github.s3-ap-southeast-2.amazonaws.com/static/msc.png"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="100%"
                max-height="100%"
                /></a>
            </v-col>

            <v-col cols="12" sm="2">
                <a href="#"><v-img
                src="https://dataportal-ui-github.s3-ap-southeast-2.amazonaws.com/static/yugene.png"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="100%"
                max-height="100%"
                /></a>
            </v-col>

            <v-col cols="12" sm="3"/>
        </v-row>    

        <br>
        <br>
        <br>
        <br>

        <v-row>
            <v-col cols="12" sm="3"/>

            <v-col cols="12" sm="2">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <a href="www.stemformatics.org/atlas" v-on="on"><v-img
                        src="https://dataportal-ui-github.s3-ap-southeast-2.amazonaws.com/static/atlas.png"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        max-width="100%"
                        max-height="100%"
                        /></a>
                    </template>
                    <span>Tooltip</span>
                </v-tooltip>
            </v-col>

            <v-col cols="12" sm="2">
                <a href="www.stemformatics.org/atlas"><v-img
                src="https://dataportal-ui-github.s3-ap-southeast-2.amazonaws.com/static/msc.png"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="100%"
                max-height="100%"
                /></a>
            </v-col>

            <v-col cols="12" sm="2">
                <a href="www.stemformatics.org/atlas"><v-img
                src="https://dataportal-ui-github.s3-ap-southeast-2.amazonaws.com/static/yugene.png"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="100%"
                max-height="100%"
                /></a>
            </v-col>

            <v-col cols="12" sm="3"/>
        </v-row>    
        
  </v-container>
</template>

<script>
export default {
    data: function(){
        return {
    
        }
    }
}
</script>

<style scoped>

</style>

