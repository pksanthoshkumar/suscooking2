<template>
    <div class="row toolbar">
      <div align="left" class="col-sm-6"><h1>Sus Cooking</h1></div>
      <div align="right" class="col-sm-6">
        <search-recipes @searchRecords='searchRecipe' />
      </div>
    </div> <!--row -->
</template>

<script>
  import SearchRecipe from "./SearchRecipe.vue";
  export default {
    name: "ToolBar",
    components: {
      "search-recipes": SearchRecipe
    },
    methods : {
      searchRecipe: function(terms) {
        //this.searchTerms = terms;
        this.$emit('searchRecords', terms);
      } //searchRecipe
    }
  };
</script>


