<template>
    <v-container class="grey lighten-5">
        <v-app>
            <v-row>
                <v-col cols="12" sm="2" style="background-color: white;"/>

                <v-col cols="12" sm="5" style="background-color: white;">
                        <!-- {{titles}} -->
                        <v-text-field
                            color="#6A76AB"
                            style="font-family: roboto;"
                            label="Text Search"
                            v-model="search"
                            :loading="isLoading"
                            @keyup.enter="postSearch()"
                        >
                        
                        </v-text-field>
                </v-col>

                <v-col cols="12" sm="1" style="background-color: white;">
                    <v-autocomplete
                        v-model="search"
                        :items="autoSearchItems"
                        color="#6A76AB"
                        style="font-family: roboto;"
                        label="Filter Options"
                    ></v-autocomplete>
                </v-col>

                <v-col class="d-flex" cols="12" sm="2" style="background-color: white;">
                    
                        <v-select
                            label="Per Page"
                            color="#6A76AB"
                            v-model="perPage"
                            :items="itemsPerPage"
                        >
                        </v-select>
            
                </v-col>

                <v-col cols="12" sm="2" style="background-color: white;"/>

            </v-row>

            <!-- <v-row>
                <v-col cols="12" sm="2"/>
                    <v-col cols="12" sm="6" v-for="(item, index) in searchTerms" :key="index">
                        <v-row justify="center" align="center">
                            <v-chip :ripple="false">{{item}}</v-chip>
                        </v-row>
                    </v-col>
                <v-col cols="12" sm="2"/>
                <v-col cols="12" sm="2"/>
            </v-row> -->
    
            <v-row no-gutters>
                
                <v-col cols="12" sm="2" style="background-color: white;">
                    <v-navigation-drawer permanent>
                    <v-list>
                        <!-- <v-list-item>
                            <v-row justify="center">
                                <v-expansion-panels :flat="flat" :tile="tile">
                                    <v-expansion-panel>
                                        <v-expansion-panel-header style="color: black; font-family: roboto;">Filters</v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                    <v-row>
                                                        <v-col cols="2">
                                                        </v-col>
                                                        <v-col cols="10">
                                                            <v-checkbox color="orange" v-model="selected" label="Human" value="Human" style="color: black; font-family: roboto;"></v-checkbox>
                                                            <v-checkbox color="orange" v-model="selected" label="Mouse" value="Mouse" style="color: black; font-family: roboto;"></v-checkbox>
                                                        </v-col>
                                                    </v-row>
                                            </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-row>
                        </v-list-item> -->
                        <!-- <v-list-item>
                            <v-row justify="center">
                                <v-expansion-panels :flat="flat" :tile="tile">
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
                                <v-expansion-panels :flat="flat" :tile="tile">
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
                        </v-list-item> -->
                    </v-list>

                    </v-navigation-drawer>
                </v-col>
                <!-- {{lists}} -->
                <v-col cols="12" sm="8" style="background-color: white;">
                    
                            <!-- <v-card> -->
                                <div v-for="(item, index) in lists" :key="index" :per-page="perPage" :current-page="currentPage" :items="titles" color="#ffffff">
                                    <v-row>
                                        
                                        <v-col cols="12" sm="2">

                                            <v-row>
                                                <v-col cols="12" sm="2">
                                                </v-col>
                                                <v-col cols="12" sm="5">
                                                    <img src="https://images.pexels.com/photos/45239/white-blood-cell-cell-blood-cell-blood-45239.jpeg?cs=srgb&dl=cell-human-science-45239.jpg&fm=jpg" class="card-img" style="height:200px; width:150px;" alt="...">
                                                </v-col>
                                                <v-col cols="12" sm="5">
                                                </v-col>
                                            </v-row>

                                        </v-col>

                                        <v-col cols="8" sm="8" md="8">
                                        </v-col>
                                        <v-col cols="2" sm="2" md="2">
                                            <v-row>
                                                <v-col cols="12" sm="2">
                                                </v-col>
                                                <v-col cols="12" sm="8">
                                                    <v-card-title sm="12">
                                                        <!-- <p style="color: orange; font-family: roboto;">{{item.dataset_id }}</p> -->
                                                    </v-card-title>
                                                </v-col>
                                                <v-col cols="12" sm="2">
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>

                                    <v-card-title style="color: orange; font-family: roboto; font-size: 150%;">Title: </v-card-title>
                                    <v-card-subtitle style="color: black; font-family: roboto; font-size: 100%;"><p>{{item.title}}</p></v-card-subtitle>
                                    <v-card-title style="color: orange; font-family: roboto; font-size: 150%;">Authors: </v-card-title>
                                    <v-card-subtitle style="color: black; font-family: roboto; font-size: 100%;">{{item.authors}}</v-card-subtitle>

                                    <v-card-actions>
                                    <v-expansion-panels :flat="flat" :tile="tile">
                                        <v-expansion-panel tile>
                                        <v-expansion-panel-header style="color: orange; font-family: roboto; font-size: 110%;">More</v-expansion-panel-header>
                                        <v-expansion-panel-content >
                                            <v-tabs fixed-tabs color="#6A76AB">
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
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    </v-card-actions>
                                    <hr style="color: #6A76AB;">

                                </div>
                                
                            <!-- </v-card> -->

                            <div class="text-center" @click="scrollToTop()">
                                <v-pagination
                                    color="#6A76AB"
                                    circle
                                    prev-icon="mdi-menu-left"
                                    next-icon="mdi-menu-right"
                                    v-model="currentPage"
                                    :length="90"
                                    :total-visible="perPage"
                                ></v-pagination>
                            </div>
                </v-col>

                <v-col cols="12" sm="2" style="background-color: white;">
                    <go-top bg-color="#6A76AB"></go-top>
                </v-col>
            </v-row>
        </v-app>
    </v-container>
</template>

<script>
import axios from 'axios'
import GoTop from '@inotom/vue-go-top';

// import Multiselect from 'vue-multiselect'

  export default {
    components: {
        GoTop,
    },
    data () {
      return {
        autoSearchItems: ['human', 'mouse', 'brain', 'skin'],
        autoSearchValues: ['foo', 'bar'],
        autoSearchValue: null,

        isLoading: false,
        
        tile: true, // For the expansion panels
        flat: true, // For the expansion panels
        itemsPerPage: [5, 10, 20, 50, 100],
        perPage: 5,
        count: this.count,
        currentPage: 1,
        page: 1,
        checkbox1: true,
        checkbox2: false,
        titles: [],
        dialog: false,
        search: '',
        searchChip: false,
        searchTerms: [],
        submitSearch: null,
        overlay: true,
        totalVisible: 10,
      }
    },
    watch: {
        // overlay (val) {
        //     val && setTimeout(() => {
        //         this.overlay = false
        //     }, 3000)
        // },
        count: function() {
            return 5;
        }
    },
    computed: {
        lists: function() {
            const items = this.titles
            // Return just page of items needed
            return items.slice(
                (this.currentPage - 1) * this.perPage,
                this.currentPage * this.perPage
            )
        },
        totalRows: function() {
			return this.titles.length;
        },
        itemPerPage: function() {
            // var i;
            // for(i=0; i<this.items.length; i++){
            //     var list = this.items[i];
            // }
            return [5, 10, 15];
        },
    },
    methods: {
        postSearch: function(){
          
            axios.post("https://jack.stemformatics.org/api/summary_table_search",
            {
                headers: {
                "Access-Control-Allow-Origin": "* ",
                "Content-Type": 'application/json;charset=UTF-8',
                },
                data: {
                    "searchTerm": this.search,
                }
            })
            .then(result => this.titles = result.data.data.map(results => {
                
                var i;
    
                for (i=0; i<results.length; i++){
                return {
                    dataset_id: results[0], 
                    title: results[1],
                    authors: results[2], 
                    description: results[3]}
                }
            }))            
        },
        scrollToTop() { // Scroll to the top of the screen on pagination click. 
            // window.scrollTo(0,0);
            window.scrollTo({
                top: 200,
                behavior: 'smooth',
            })
        },
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

<style>

</style>