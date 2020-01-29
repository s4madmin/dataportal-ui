<template>
    <v-container class="grey lighten-5">
        <v-app>
            <v-row>
                <v-col cols="12" sm="2" style="background-color: white;">
                    <v-autocomplete
                        v-model="search"
                        :items="autoSearchItems"
                        color="#6A76AB"
                        style="font-family: roboto;"
                        label="Filter Options"
                    ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="8" style="background-color: white;">
                        <v-card-text>
                            <!-- @change="dsdialog = true"  turn this on to direct straight to the dataset expand/explore modal. -->
                            <v-autocomplete
                                v-model="model"
                                :items="items"
                                :loading="isLoading"
                                :search-input.sync="search"
                                color="white"
                                hide-no-data
                                hide-selected
                                item-text="Description"
                                item-value="API"
                                label="API"
                                placeholder="Search datasets"
                                prepend-icon="mdi-database-search"
                                return-object
                            ></v-autocomplete>
                        </v-card-text>
                        <v-expand-transition>
                            <v-list v-if="model" >
                                <v-list-item
                                v-for="(field, i) in fields"
                                :key="i"
                                >
                                <v-list-item-content>
                                    <v-list-item-title v-text="field.value"></v-list-item-title>
                                    <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
                                    
                                </v-list-item-content>
                                </v-list-item>
                                <v-container fluid>
                                    <v-row>
                                        <v-col cols="12" sm="9"/>

                                        <v-col cols="12" sm="1">
                                            <v-btn
                                                color="#6A76AB"
                                                @click.stop="dsdialog.show = true, dsdialog.data = model"
                                                @click="setDialogData()"
                                            >
                                                Explore
                                                <v-icon right>mdi-close-circle</v-icon>
                                            </v-btn>
                                        </v-col>
                                        <v-col cols="12" sm="1"/>
                                        <v-col cols="12" sm="1">
                                            <v-btn
                                                :disabled="!model"
                                                color="orange"
                                                @click="model = null"
                                            >
                                                Clear
                                                <v-icon right>mdi-close-circle</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-list>
                        </v-expand-transition>
                        <v-card-actions>
                            <v-row>
                                <v-col cols="12" sm="10"/>
                                <v-col cols="12" sm="1">
                                    <v-dialog
                                    fullscreen 
                                    hide-overlay 
                                    transition="dialog-bottom-transition"
                                    v-model="dsdialog.show"
                                    max-width="290"
                                    >
                                        <v-card>
                                            <v-toolbar dark color="#6A76AB">
                                                <v-spacer></v-spacer>
                                                <v-btn right icon dark color="orange" @click="dsdialog.show = false">
                                                    <v-icon>mdi-close</v-icon>
                                                </v-btn>
                                            </v-toolbar>

                                            <p>{{dsdialog.data.Title}}</p>
                                            <p>{{dsdialog.data.Dataset_id}}</p>
                                            <p>{{dsdialog.data.Authors}}</p>
                                            <p>{{dsdialog.data.Description}}</p>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
                            </v-row>
                        </v-card-actions>
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
            </v-row>
            <v-row no-gutters>   
                <v-col cols="12" sm="2" style="background-color: white;">
                </v-col>
                <v-col cols="12" sm="8" style="background-color: white;">
                    <div v-for="(item, index) in lists" :key="index" :per-page="perPage" :current-page="currentPage" :items="titles" color="#ffffff">
                        <v-row>
                            <v-col cols="12" sm="2">
                                <v-row>
                                    <v-col cols="12" sm="2">
                                    </v-col>
                                    <v-col cols="12" sm="5">
                                        <img src="https://images.pexels.com/photos/45239/white-blood-cell-cell-blood-cell-blood-45239.jpeg?cs=srgb&dl=cell-human-science-45239.jpg&fm=jpg" class="card-img" fluid style="height:200px; width:150px;" alt="...">
                                    </v-col>
                                    <v-col cols="12" sm="5">
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" sm="10">
                                <v-card-title style="color: orange; font-family: roboto; font-size: 150%;">Title: </v-card-title>
                                <v-card-subtitle style="color: black; font-family: roboto; font-size: 100%;"><p>{{item.Title}}</p></v-card-subtitle>
                                <v-card-title style="color: orange; font-family: roboto; font-size: 150%;">Authors: </v-card-title>
                                <v-card-subtitle style="color: black; font-family: roboto; font-size: 100%;">{{item.Authors}}</v-card-subtitle>
                                <v-card-actions>
                                <v-expansion-panels :flat="flat" :tile="tile">
                                    <v-expansion-panel tile>
                                    <v-expansion-panel-header style="color: orange; font-family: roboto; font-size: 110%;">Description</v-expansion-panel-header>
                                    <v-expansion-panel-content >
                                        {{item.Description}}
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
                            </v-col>
                        </v-row>
                    </div>
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

        descriptionLimit: 60,
        entries: [],
        isLoading: false,
        model: null,
        search: null,
        dsdialog: {
            "show": false,
            "data": this.$session.get("dialogData"),
        },
        autoSearchItems: ['human', 'mouse', 'brain', 'skin'],
        autoSearchValues: ['foo', 'bar'],
        autoSearchValue: null,
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
        // search: '',
        searchChip: false,
        searchTerms: [],
        submitSearch: null,
        overlay: true,
        totalVisible: 10,
      }
    },
    watch: {

        search () {
            // Items have already been loaded
            if (this.items.length > 0) return

            // Items have already been requested
            if (this.isLoading) return

            this.isLoading = true

            // Lazily load input items
            fetch('https://jack.stemformatics.org/api/summary_table')
            .then(res => res.json())
            .then(res => {
                const { count, entries } = res
                this.count = count
                this.entries = entries
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => (this.isLoading = false))
        },


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

        fields: function () {
            if (!this.model) return []

            return Object.keys(this.model).map(key => {
                return {
                    key,
                    value: this.model[key] || 'n/a',
                }
            })
        },

        items () {
            return this.entries.map(entry => {
            const Description = entry.Description.length > this.descriptionLimit
                ? entry.Description.slice(0, this.descriptionLimit) + '...'
                : entry.Description

            return Object.assign({}, entry, { Description })
            })
        },

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
        setDialogData: function(){
            this.$session.set("dialogData",this.model)
        }, 
        expandDataset: function(){
            
        },
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
            .then(result => this.titles = result) //.str.replace(/\\/g, "")) //.map(results => {
      
        },
        scrollToTop() { // Scroll to the top of the screen on pagination click. 
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
        .then(result => this.titles = result.data.entries) //.data.data)//.str.replace(/\\/g, "")) //.map(results => {
            
        //     var i;
 
        //     for (i=0; i<results.length; i++){
        //     return {dataset_id: results[0], title: results[1], authors: results[2], description: results[3]}
        //     }
        // }))


    },
  }
</script>

<style>

</style>