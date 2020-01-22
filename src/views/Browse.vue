<template>
    <v-container class="grey lighten-5">
        
        <v-row>
            <v-col cols="1">
            </v-col>

            <v-col cols="2">
                {{search}}
                <v-navigation-drawer permanent>
                <v-list>
                    <v-list-item>
                        <v-row justify="center">
                            <v-expansion-panels accordion>
                                <v-expansion-panel>
                                    <v-expansion-panel-header style="color: black; font-family: roboto;">Organism</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                                <v-row>
                                                    <v-col cols="2">
                                                    </v-col>
                                                    <v-col cols="10">
                                                        <v-checkbox v-model="selected" label="Human" value="Human" style="color: black; font-family: roboto;"></v-checkbox>
                                                        <v-checkbox v-model="selected" label="Mouse" value="Mouse" style="color: black; font-family: roboto;"></v-checkbox>
                                                    </v-col>
                                                </v-row>
                                        </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row>
                    </v-list-item>
                    <v-list-item>
                        <v-row justify="center">
                            <v-expansion-panels accordion>
                                <v-expansion-panel>
                                    <v-expansion-panel-header style="color: black; font-family: roboto;">Datasets</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                                <v-row>
                                                    <v-col cols="2">
                                                    </v-col>
                                                    <v-col cols="10">
                                                        <v-checkbox v-model="selected" label="Public" value="Public" style="color: black; font-family: roboto;"></v-checkbox>
                                                        <v-checkbox v-model="selected" label="Private" value="Private" style="color: black; font-family: roboto;"></v-checkbox>
                                                    </v-col>
                                                </v-row>
                                        </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row>
                    </v-list-item>
                    <v-list-item>
                        <v-row justify="center">
                            <v-expansion-panels accordion>
                                <v-expansion-panel>
                                    <v-expansion-panel-header style="color: black; font-family: roboto;">Categories</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                                <v-row>
                                                    <v-col cols="2">
                                                    </v-col>
                                                    <v-col cols="10">
                                                        <v-checkbox v-model="selected" label="Singe Cell" value="Single Cell" style="color: black; font-family: roboto;"></v-checkbox>
                                                        <v-checkbox v-model="selected" label="Multi Cell" value="Multi Cell" style="color: black; font-family: roboto;"></v-checkbox>
                                                    </v-col>
                                                </v-row>
                                        </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row>
                    </v-list-item>
                </v-list>

                </v-navigation-drawer>
            </v-col>

            <v-col cols="8" style="max-height: 100px" class="scroll-y">

                <v-text-field
                    
                    style="font-family: roboto;"
                    label="Search"
                    single-line
                    solo
                    @keyup.enter="searchBox()"
                ></v-text-field>
                
                <div v-for="(item, index) in titles" :key="index" 
                    color="#ffffff">
                    
                    <v-row>

                        <v-col cols="2">
                            <v-row>
                                <v-col cols="2">
                                </v-col>
                                <v-col cols="5">
                                    <img src="https://images.pexels.com/photos/45239/white-blood-cell-cell-blood-cell-blood-45239.jpeg?cs=srgb&dl=cell-human-science-45239.jpg&fm=jpg" class="card-img" style="height:200px; width:150px;" alt="...">
                                </v-col>
                                <v-col cols="5">
                                </v-col>
                            </v-row>
                        </v-col>

                        <v-col cols="8">
                        </v-col>

                        <v-col cols="2">
                            <v-card-title>
                            <p style="color: orange; font-family: roboto;">{{item.dataset_id }}</p>&nbsp;
                            </v-card-title>
                        </v-col>

                    </v-row>

                    <v-card-title class="headline" style="color: black; font-family: roboto;">Title: {{item.title}}</v-card-title>
                    <br>
                    <v-card-subtitle style="color: black; font-family: roboto;"><strong style="color: black; font-family: roboto;">Authors:</strong>
                    {{item.authors}}
                    </v-card-subtitle>

                    <v-card-actions>
                    

                    <v-expansion-panels>
                        <v-expansion-panel tile>
                        <v-expansion-panel-header style="color: orange; font-family: roboto;">More</v-expansion-panel-header>
                        <v-expansion-panel-content>

                            <v-tabs fixed-tabs>

                                <v-tab>
                                Description
                                </v-tab>
                                <v-tab-item>
                                    <br>
                                    {{item.description}}
                                </v-tab-item>

                            </v-tabs>

                            <br>

                            <br>
                            
                        </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                    </v-card-actions>
                    
                </div>
                
                
            </v-col>
            
            <v-col cols="1">
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'

  export default {
    data () {
      return {
        checkbox1: true,
        checkbox2: false,
        titles: [],
        dialog: false,
        search: null,
      }
    },
    methods: {
        searchBox: function(){
            alert(this.search)
        }
    },
    mounted: function(){

        axios.post("https://jack.stemformatics.org/api/summary_table",
        {
            headers: {
            "Access-Control-Allow-Origin": "* ",
            "Content-Type": 'application/json;charset=UTF-8',
            },
        })
        .then(result => this.titles = result.data.data.map(results => {
            var i;

            for (i=0; i<results.length; i++){
            return {dataset_id: results[0], title: results[1], authors: results[2], description: results[3]}
            }
        }))
    
    },
  }
</script>