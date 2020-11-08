<template>
  <div id="app">

    <ToolBar       
        :myKey = "filterKey"
        :myDir = "filterDir"
        @searchRecords='searchRecipe'  />
   <Recipes :allRecipes = searchedRecipe />
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue"; 
import Recipes from "./components/Recipes.vue";
import axios from 'axios';

export default {
  name: 'App',
  components: {
    ToolBar, 
    Recipes
  },
  data() {
    return {
      theRecipes: [],
      searchTerms: '',
      filterKey: 'petName',
      filterDir: 'asc'
    }; //return
  }, //data
  created: function() {
    axios.get("recipes.json").then(info => {
      this.theRecipes = info.data;
    }); //getJSON
  }, //created

   methods : {
    searchRecipe: function(terms) {
      this.searchTerms = terms;
    }, //searchRecipe
    searchedRecipe: function (){
      return ""
    }
  } // methods
}
</script>

<style src="./assets/sus-style.css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
