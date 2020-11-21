
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

                      

                          <!--div class="collapse navbar-collapse" id="myNavbar"-->
                          <div class="collapse navbar-collapse" id="sus-menu-drop-down">
                            <ul class="nav navbar-nav">
                              <!-- <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#veg#');">Veg</a></li> -->
                              <li>
                                <div class="dropdown"> 
                                      <button class="page-scroll"> 
                                          Vegitarian 
                                      </button> 
                                        
                                      <div class="dropdown-content"> 

                                        <li v-for="(aReceipe, i) in getVegRecipes()" :key="i"  class= "card-item" >
                                            <div  v-bind:id="getRecipeIndex ()"  >

                                                <a href="#" :name=aReceipe.recipeImage @click="redirectURL(`/${aReceipe.recipeImage}`);">
                                                    <figure class="menucard">
                                                        <img class="lazyload" :src="require(`/${aReceipe.recipeImage}`)">
                                                        <figcaption class="menuCaption">
                                                            <h6 class="menu-caption-title" :style = "getFontColor16Px()" >{{aReceipe.recipeName}}</h6>
                                                            <!-- <p v-html="`${aReceipe.recipeDescShort}`"></p> -->
                                                            
                                                        </figcaption>
                                                    </figure>
                                                </a> 
                                            </div>
                                        </li>


                                      </div> 
                                </div> 
                              </li>
                            </ul>


                            <ul class="nav navbar-nav">
                              <!-- <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#non-veg#');">Non. Veg</a></li> -->
                              <li>
                                <div class="dropdown"> 
                                      <button class="page-scroll"> 
                                          Non. Veg 
                                      </button> 
                                        
                                      <div class="dropdown-content"> 

                                        <li v-for="(aReceipe, i) in getNonVegRecipes()" :key="i"  class= "card-item" >
                                            <div  v-bind:id="getRecipeIndex ()"  >

                                                <a href="#" :name=aReceipe.recipeImage @click="redirectURL(`/${aReceipe.recipeImage}`);">
                                                    <figure class="menucard">
                                                        <img class="lazyload" :src="require(`/${aReceipe.recipeImage}`)">
                                                        <figcaption class="menuCaption">
                                                            <h6 class="menu-caption-title" :style = "getFontColor16Px()" >{{aReceipe.recipeName}}</h6>
                                                            <!-- <p v-html="`${aReceipe.recipeDescShort}`"></p> -->
                                                            
                                                        </figcaption>
                                                    </figure>
                                                </a> 
                                            </div>
                                        </li>
                                      </div> 
                                </div> 
                              </li>                              
                            </ul>


                            <ul class="nav navbar-nav">
                              <!-- <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#starter#');">Starters</a></li> -->

                              <li>
                                <div class="dropdown"> 
                                      <button class="page-scroll"> 
                                          Starters 
                                      </button> 
                                        
                                      <div class="dropdown-content"> 

                                        <li v-for="(aReceipe, i) in getStartRecipes()" :key="i"  class= "card-item" >
                                            <div  v-bind:id="getRecipeIndex ()"  >

                                                <a href="#" :name=aReceipe.recipeImage @click="redirectURL(`/${aReceipe.recipeImage}`);">
                                                    <figure class="menucard">
                                                        <img class="lazyload" :src="require(`/${aReceipe.recipeImage}`)">
                                                        <figcaption class="menuCaption">
                                                            <h6 class="menu-caption-title" :style = "getFontColor16Px()" >{{aReceipe.recipeName}}</h6>
                                                        </figcaption>
                                                    </figure>
                                                </a> 
                                            </div>
                                        </li>
                                      </div> 
                                </div> 
                              </li>  
                            </ul>


                            <ul class="nav navbar-nav">
                              <!-- <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#Desserts#');">Desserts</a></li> -->
                              <li>
                                <div class="dropdown"> 
                                      <button class="page-scroll"> 
                                          Desserts 
                                      </button> 
                                        
                                      <div class="dropdown-content"> 

                                        <li v-for="(aReceipe, i) in getDesertRecipes()" :key="i"  class= "card-item" >
                                            <div  v-bind:id="getRecipeIndex ()"  >

                                                <a href="#" :name=aReceipe.recipeImage @click="redirectURL(`/${aReceipe.recipeImage}`);">
                                                    <figure class="menucard">
                                                        <img class="lazyload" :src="require(`/${aReceipe.recipeImage}`)">
                                                        <figcaption class="menuCaption">
                                                            <h6 class="menu-caption-title" :style = "getFontColor16Px()" >{{aReceipe.recipeName}}</h6>
                                                        </figcaption>
                                                    </figure>
                                                </a> 
                                            </div>
                                        </li>
                                      </div> 
                                </div> 
                              </li> 

                            </ul>


                            <ul class="nav navbar-nav">
                              <!-- <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#drinks#');">Drinks</a></li> -->
                              <li>
                                <div class="dropdown"> 
                                      <button class="page-scroll"> 
                                          Drinks 
                                      </button> 
                                        
                                      <div class="dropdown-content"> 

                                        <li v-for="(aReceipe, i) in getDrinksRecipes()" :key="i"  class= "card-item" >
                                            <div  v-bind:id="getRecipeIndex ()"  >

                                                <a href="#" :name=aReceipe.recipeImage @click="redirectURL(`/${aReceipe.recipeImage}`);">
                                                    <figure class="menucard">
                                                        <img class="lazyload" :src="require(`/${aReceipe.recipeImage}`)">
                                                        <figcaption class="menuCaption">
                                                            <h6 class="menu-caption-title" :style = "getFontColor16Px()" >{{aReceipe.recipeName}}</h6>
                                                        </figcaption>
                                                    </figure>
                                                </a> 
                                            </div>
                                        </li>
                                      </div> 
                                </div> 
                              </li>                               
                            </ul>


                            <ul class="nav navbar-nav" >
                              <!-- <li><a class="page-scroll" href="About.html" >About</a></li> -->
                              <a class="page-scroll" href="About.html" >
                                <button class="page-scroll"> 
                                    About 
                                </button>                               
                              </a>
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

                        <div class="kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q">

                            <div dir="auto">&nbsp;</div>
                            <div dir="auto">&nbsp;</div>
                            <div dir="auto">&nbsp;<a href="https://www.amazon.com/dp/B08L1XNVPZ/ref=rdr_kindle_ext_tmb"><h2 dir="auto"><img src="http://suscooking.com/book.png" alt="" /></h2></a></div>
                            <div dir="auto">&nbsp;</div>


                            <div dir="auto">&nbsp;</div>
                            <div dir="auto">For 3 years now you all have been followers of&nbsp;<a class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl py34i1dx gpro0wi8" tabindex="0" role="link" href="http://suscooking.com/?fbclid=IwAR1vzIpB0lcSoL0eqLBtCI84QngF7dEdW-qT6qsAvwopNV1MKJBZsBr30uk" target="_blank" rel="nofollow noopener">suscooking.com.</a> Well, your unstinting support, your appreciation and encouragement have persuaded me to take my interest in food and cooking to the next level.</div>
                            <div dir="auto">&nbsp;</div>
                            <div dir="auto">I am delighted to share with my readers that I have now published my first cookbook!!</div>
                            <div dir="auto"><span style="color: #ff6600;">"An Ounce of Flavor - A Culinary Journey Across the Oceans"</span>. It is now available on Amazon as a Kindle version and paperback. This book is literally the story of my journey across the seas, told in recipes - my travels and experiences in different countries and cities and towns. Of family and heritage and friendships.</div>
                            <div dir="auto">&nbsp;</div>
                            </div>
                            <div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q">
                            <div dir="auto">I would be honored if each of you would buy a copy of the book. Share my journey and enjoy the beautiful recipes that I have tried and tested and curated with care for you.</div>
                            </div>
                            <div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q">
                            <div dir="auto">And once you've read it, I would greatly appreciate it if you could take few minutes of your time to please review and rate the book. Please share this post or amazon link with your networks and help spread the world. Join me for An Ounce of Flavor!!</div>
                            <div dir="auto">&nbsp;</div>
                            </div>

                            <!--div dir="auto">&nbsp;<a href="https://www.amazon.com/dp/B08L1XNVPZ/ref=rdr_kindle_ext_tmb"><h2 dir="auto"><img src="Amazon.png" alt="" /></h2></a></div-->


                        <!-- Your Recipe content ends  here  -->
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

          
            <!--div class="rowRecipeThumpNail" id="recipeFilter" >
    
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
            </div-->
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
// import DropdownMenu from '@innologica/vue-dropdown-menu';

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
      return recipeList.slice(0, maxNum);
    },
    getVegRecipes: function() {
      return recipeList.reverse().filter (r=> r.keyWords === '#veg#');
    },
    getNonVegRecipes: function() {
      return recipeList.reverse().filter (r=> r.keyWords === '#non-veg#');
    },
    getStartRecipes: function() {
      return recipeList.reverse().filter (r=> r.keyWords === '#starter#');
    },
    getDesertRecipes: function() {
      return recipeList.reverse().filter (r=> r.keyWords === '#Desserts#');
    },
    getDrinksRecipes: function() {
      return recipeList.reverse().filter (r=> r.keyWords === '#drinks#');
    },        
    getRecipesShuffled: function(allMyRecipes, maxNum) {
      var recipeScrampleArray = this.shuffleArray (recipeList);

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

    },
     getFontColor16Px: function() {
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
      return "font-weight: bold;font-size: 16px; color: " + random;

    }
    , getRecipeIndex : function () {
      recipeCount = recipeCount + 1;
      return "recipe-" + recipeCount;
    }

  } // methods
};
</script>
