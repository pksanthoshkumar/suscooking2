
<template>
    <div id="content" class="main-area">
        <div  class="panel-body" >
            <div class="row" >      
                <div class="col-sm-8">   

                    <nav class="navbar navbar-custom ">
                      <div class="container-fluid">
                        <div class="navbar-header" >
                          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                          </button>

                        </div>
                          <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav">
                              <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#veg#');">Veg</a></li>
                            </ul>
                            <ul class="nav navbar-nav">
                              <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#non-veg#');">Non. Veg</a></li>
                            </ul>
                            <ul class="nav navbar-nav">
                              <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#starter#');">Starters</a></li>
                            </ul>
                            <ul class="nav navbar-nav">
                              <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#Desserts#');">Desserts</a></li>
                            </ul>
                            <ul class="nav navbar-nav">
                              <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#drinks#');">Drinks</a></li>
                            </ul>
                            <ul class="nav navbar-nav">
                              <li><a class="page-scroll" href="About.html" >About</a></li>
                            </ul>      
                          </div>
                      </div>
                    </nav>

                    <div id="mainReceipe" class="singlePageRecipe">
                      <table>
                        <tr>
                        <td><a title="Facebook" href="https://www.facebook.com/suscooking/"><img src="./fb.png" style="width:40px;height:40px;" alt="" /></a></td>
                        <td><a title="Instagram" href="https://www.instagram.com/suscooking/"><img src="./instagram.png" style="margin: 5px 5px 5px 5px;width:40px;height:40px;" alt="" /></a></td>
                        <td><a title="Pinterest" href="https://www.pinterest.com/suscooking/"><img src="./pinterest.png" style="width:40px;height:40px;" alt="" /></a></td>
                        <td><a title="Twitter" href="https://twitter.com/surekhath"><img src="./Twitter.png" style="margin: 5px 5px 5px 5px;width:40px;height:40px;" alt="" /></a></td>
                        </tr>
                    </table>
                        <!-- Your Recipe Title starts  here  -->
                                     <h1 style="text-align: center;"><span style="color: #ff9900;"><strong>Mango Cheesecake</strong></span></h1>
                                    <p><span style="color: #ff9900;"><strong><img src="builds/MangoCheesecake.jpg" alt="" /></strong></span></p>
                                
                                    <span style="color: #0000ff;"><strong>Ingredients&nbsp;</strong><strong>For crust:</strong></span>
                                    <ul>
                                    <li>Graham crackers 10 &ndash; 12</li>
                                    <li>Brown sugar 2 tsp</li>
                                    <li>Butter melted 4 tbsp</li>
                                    </ul>
                                    <span style="color: #0000ff;"><strong>For cake batter:</strong></span>
                                    <ul>
                                    <li>Philadelphia cream cheese 2 pack (8 oz each)</li>
                                    <li>Butter 4 tbsp</li>
                                    <li>Sour cream 4 tbsp</li>
                                    <li>White sugar 4 tbsp</li>
                                    <li>All-purpose flour 2 tbsp</li>
                                    <li>Corn starch 2 tbsp</li>
                                    <li>Vanilla essence 1 or 2 tsp</li>
                                    <li>Eggs 2</li>
                                    </ul>
                                    <span style="color: #0000ff;"><strong>For cake topping:</strong></span>
                                    <ul>
                                    <li>Mango pulp 1 cup</li>
                                    <li>Sour cream 2 tbsp</li>
                                    <li>White sugar 1tbsp</li>
                                    </ul>

                                    <span style="color: #0000ff;"><strong>Method:</strong></span>
                                    <p><span style="color: #0000ff;"><strong>The Crust:</strong></span><br />Place 10 - 12 graham crackers in a Ziploc and crush it. Transfer it to a bowl. Add brown sugar and melted butter. Mix well till crackers are moist.<br />Line the bottom of a 7" Springform cake pan with parchment paper and grease with butter.<br />Spread and press the crushed cracker mixture on the bottom and 2/3 of the way up the sides of the pan. Place the pan with cracker mixture in freezer for 20 minutes for the crust to get set.</p>
                                    <span style="color: #0000ff;"><strong>The Batter:</strong></span>Bring the cream cheese and butter to room temperature. In an electric mixer, beat cream cheese, butter, sour cream, white sugar, all-purpose flour, corn starch and vanilla. Finally add the eggs and beat again.<br/>
                                    <span style="color: #0000ff;"><strong>The cake:</strong></span>
                                    <span style="color: #993300;"><strong>Instant Pot Method:</strong></span>Remove cake pan with crust from freezer and pour cream cheese batter into it. Spread it evenly with a spatula.
                                    <p>In the instant pot, pour 1 cup water and place the trivet. Gently lower the cake pan and place it on the trivet. Close lid with vent on seal position. Use cake option and bake for about 25 minutes.
                                    
                                    <!--
                                    When done, use quick release, open lid, take out the cake pan and towel off any moisture formed on top of the cake. Let it cool.</P>
                                    <span style="color: #993300;"><strong>Oven Method:</strong></span>
                                    <p>Preheat oven to 450&deg;F. Place a large oven safe pan filled with 1/2 inch water in oven. Place Cheesecake pan into the preheated water bath. Bake for 15 minutes; turn oven to 350&deg;F and bake until top of Cheesecake turns golden, about 50 minutes. Remove cake and let it cool.</p>
                                    <span style="color: #0000ff;"><strong>Topping:</strong></span>
                                    <p>In a bowl, whisk mango pulp, sour cream and white sugar. When the cake cools down, slowly spread the mango and sour cream mixture on the cake. Refrigerate the cake for 4 to 6 hours.</br>
                                    Serve with whipped cream and enjoy!!
                                    -->
                                    <table width="25%">
                                        <tr>
                                        <td><a title="Facebook" href="https://www.facebook.com/suscooking/"><img src="./fb.png" style="width:40px;height:40px;" alt="" /></a></td>
                                        <td><a title="Instagram" href="https://www.instagram.com/suscooking/"><img src="./instagram.png" style="margin: 5px 5px 5px 5px;width:40px;height:40px;" alt="" /></a></td>
                                        <td><a title="Pinterest" href="https://www.pinterest.com/suscooking/"><img src="./pinterest.png" style="width:40px;height:40px;" alt="" /></a></td>
                                        <td><a title="Twitter" href="https://twitter.com/surekhath"><img src="./Twitter.png" style="margin: 5px 5px 5px 5px;width:40px;height:40px;" alt="" /></a></td>
                                        </tr>
                                    </table>  

                        <!-- Your Recipe content ends  here  -->
                        <div style="display: flex;flex-direction: column;align-content: flex-end;">
                            <div class="fb-like" href="http://suscooking.com/GrilledTrout.html" data-layout="standard" data-action="like" data-size="small"
                                data-show-faces="true" data-share="true"></div>
                            <div class="fb-comments" data-href="http://suscooking.com/GrilledTrout.html" data-numposts="5"></div>
                        </div>

                    </div>  <!-- End of mainReceipe page -->
                </div>    

                <div class="col-sm-4 columnRecipeCards" >  <!-- columnRecipeCards  style="background-color:#bbb;" -->
                    <div id="recipeList" :class="{ hide: hideRecipeListpanel }">
                        <ul class="cards" >
                            <li v-for="(aReceipe, i) in getLastFewRecipes(allRecipes, 5)" :key="i"  class= "card-item" >
                                <div  v-bind:id="getRecipeIndex ()"  >

                                    <a href="#" :name=aReceipe.recipeImage @click="redirectURL(`/${aReceipe.recipeImage}`);">
                                        <figure class="card">
                                            <img class="lazyload" :src="require(`/${aReceipe.recipeImage}`)">
                                            <figcaption class="caption">
                                                <h3 class="caption-title" :style = "getFontColor36Px()" >{{aReceipe.recipeName}}</h3>
                                                <p v-html="`${aReceipe.recipeDescShort}`"></p>
                                                
                                            </figcaption>
                                        </figure>
                                    </a> 
                                </div>
                            </li>
                        </ul>
                    </div>          <!-- recipeList -->
                </div>  
            </div>              <!-- end of row -->   

            <div class="rowRecipeThumpNail" id="recipeFilter" >
                <!-- <div class= "card-item" >
                    <iframe src='//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ez&f=ifr&linkID=735d9c463328be15715dca1ee948aea3&t=suscooking-20&tracking_id=suscooking-20' width='300' height='250' scrolling='no' border='0' marginwidth='0' style='border:none;' frameborder='0'></iframe>
                </div>
                 -->
        
                <div v-for="(aReceipe, i) in getRecipesShuffled(allRecipes, 20)" :key="i"  class= "card-item" >
                    <div class="columnRecipeThumpNail">
                        <a href="#" @click="redirectURL(`/${aReceipe.recipeImage}`);">
                            <figure class="card">
                                <img class="img-thumbnail lazyload" :src="require(`/${aReceipe.recipeImage}`)"><br>
                                <div  :style = "getFontColor()" >{{aReceipe.recipeName}}</div>
                            </figure>
                        </a> 
                    </div>
                </div>
            </div>
        </div>          <!-- panel-body -->

      <!-- Start Footer bottom Area -->
        <footer>
          <br><br><br>
          <div class="footer-area-bottom">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="copyright text-center">
                    <p>
                      &copy; Copyright <strong>SusCooking.com</strong>. All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

    </div>      <!-- end of content -->

</template>

<script>

var recipeCount = 0;
import recipeList from "./recipes.json";

export default {
  name: "Recipes",
  props: ["allRecipes"],
  data() {
    return {
      recipeList,
      selectedRecipeName: "",
      selectedRecipeDescShort: "",
      selectedRecipeDescLong: "",
      selectedRecipeImage: "GreekSalad.jpg",
      hideRecipeDetailpanel: true,
      hideRecipeListpanel: false
    }; //return
  }, //Data

  methods: {
    getRecipeType: function (recipeType){
      const input = document.querySelector('#SearchApts')
      input.value = recipeType ;
      const event = new Event('input', {
                        cancelable: true,
                        bubbles: true
                     });
      input.dispatchEvent(event);
    },
    requestDetailRecipe: function(aReceipe) {
      console.log("details Requested" + aReceipe.recipeName);
      this.hideRecipeDetailpanel = false;
      this.hideRecipeListpanel = true;
      this.selectedRecipeName = aReceipe.recipeName;
      this.selectedRecipeDescShort = aReceipe.recipeDescShort;
      this.selectedRecipeDescLong = aReceipe.recipeDescLong;
      this.selectedRecipeImage = aReceipe.recipeImage;
    },
    requestHome: function() {
      this.hideRecipeDetailpanel = true;
      this.hideRecipeListpanel = false;
    },
    redirectURL: function(recipeImage) {
      window.location = recipeImage.replace(".jpg", "") + ".html";
    },
    shuffleArray: function(anArray) {
      for (var i = anArray.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = anArray[randomIndex];

        anArray[randomIndex] = anArray[i];
        anArray[i] = itemAtIndex;
      }

      return anArray;
    },
    getLastFewRecipes: function(allMyRecipes, maxNum) {
      var myNewRecipes = recipeList.reverse();
      return myNewRecipes.slice(0, maxNum);
    },
    getRecipesShuffled: function(allMyRecipes, maxNum) {
      if (allMyRecipes.length < 4) return allMyRecipes;

      if (maxNum == "ALL") {
        maxNum = allMyRecipes.length;
      }

      var recipeScrampleArray = this.shuffleArray (allMyRecipes);

      return recipeScrampleArray.slice(0, maxNum);
    },
    getFontColor: function() {
      var colorArray = [
        "#42b983",
        "#0000FF",
        "#800000",
        "#d84194",
        "#4897cc",
        "#53cc48",
        "#dda652",
        "#db6f31",
        "#7951e6"
      ];
      var random = colorArray[Math.floor(Math.random() * colorArray.length)];
      //console.log("color: " + colorArray[random]);
      return " color: " + random;
    },
    getFontColor36Px: function() {
      var colorArray = [
        "#42b983",
        "#0000FF",
        "#800000",
        "#d84194",
        "#4897cc",
        "#53cc48",
        "#dda652",
        "#db6f31",
        "#7951e6"
      ];
      var random = colorArray[Math.floor(Math.random() * colorArray.length)];
      //console.log("color: " + colorArray[random]);
      return "font-weight: bold;font-size: 24px; color: " + random;

    }, getRecipeIndex : function () {
      recipeCount = recipeCount + 1;
      return "recipe-" + recipeCount;
    }

  } // methods
};
</script>
