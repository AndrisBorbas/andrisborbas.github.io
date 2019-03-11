var isEqual = true;
var isRequiredMore = false;
var isIngredientMore = false;

function CalculateText(RatioMulti) {
   if (isIngredientMore == true) {
      return (RatioMulti + " times more crafting machines creating the <strong>product</strong>.");
   }
   if (isRequiredMore == true) {
      return (RatioMulti + " times more crafting machines creating the <strong>ingredient</strong>.");
   }
   if (isEqual == true) {
      return "an <strong>equal</strong> amount of crafting machines creating the ingredient and the product.";
   }
}

function CalculateRatio() {
   isRequiredMore = false;
   isIngredientMore = false;
   isEqual = false;
   var TimeToCreateInSecIngredient = document.getElementById("IngredientTime").value;
   var ItemsProduced = document.getElementById("IngredientNumber").value;
   var CraftingSpeedIngredient = document.getElementById("IngredientSpeed").value;
   var TimeToCreateInSecProduct = document.getElementById("ProductTime").value;
   var ItemsRequired = document.getElementById("ProductNumber").value;
   var CraftingSpeedProduct = document.getElementById("ProductSpeed").value;
   console.log("wasd");
   if (TimeToCreateInSecIngredient !== TimeToCreateInSecIngredient) {
      console.log("wasd");
      return 0;
   }
   //console.log(TimeToCreateInSecIngredient, ItemsProduced, CraftingSpeedIngredient, TimeToCreateInSecProduct, ItemsRequired, CraftingSpeedProduct);

   var IngredientTimePerRecipeInSec = TimeToCreateInSecIngredient / CraftingSpeedIngredient;
   var RequiredTimePerRecipeInSec = TimeToCreateInSecProduct / CraftingSpeedProduct;
   var IngredientTimesPerMinute = 60 / IngredientTimePerRecipeInSec;
   var RequiredTimesPerMinute = 60 / RequiredTimePerRecipeInSec;
   var IngredientPerMinute = IngredientTimesPerMinute * ItemsProduced;
   var RequiredPerMinute = RequiredTimesPerMinute * ItemsRequired;
   var PerSI = IngredientPerMinute / 60;
   var PerSR = RequiredPerMinute / 60;

   document.getElementById("ipm").innerHTML = "Ingredients produced per <strong>minute</strong> by one crafting machine: " + IngredientPerMinute;
   document.getElementById("rpm").innerHTML = "Required ingredients per <strong>minute</strong> for one crafting machine: " + RequiredPerMinute;
   document.getElementById("psi").innerHTML = "Ingredients produced per <strong>second</strong> by one crafting machine: " + PerSI;
   document.getElementById("psr").innerHTML = "Required ingredients per <strong>second</strong> for one crafting machine: " + PerSR;

   var RatioMulti;

   if (IngredientPerMinute > RequiredPerMinute && IngredientPerMinute != RequiredPerMinute) {
      RatioMulti = (IngredientPerMinute / RequiredPerMinute);
      isIngredientMore = true;
   }
   if (IngredientPerMinute < RequiredPerMinute && IngredientPerMinute != RequiredPerMinute) {
      RatioMulti = (RequiredPerMinute / IngredientPerMinute);
      isRequiredMore = true;
   }
   if (IngredientPerMinute == RequiredPerMinute) {
      RatioMulti = (RequiredPerMinute / RequiredPerMinute);
      isEqual = true;
   }

   //console.log("RatioMulti: ", RatioMulti);

   document.getElementById("ratiomulti").innerHTML = "RatioMultiplier: " + "<strong>" + RatioMulti + "</strong>";
   document.getElementById("need").innerHTML = "Which means you need " + CalculateText(RatioMulti);

   var max = (IngredientPerMinute > RequiredPerMinute) ? IngredientPerMinute : RequiredPerMinute;
   //console.log(max);
   while (true) {
      if (max % IngredientPerMinute == 0 && max % RequiredPerMinute == 0) {
         break;
      } else ++max;
   }
   var IngredientRatio = max / IngredientPerMinute;
   var ProductRatio = max / RequiredPerMinute;
   //console.log(ProductRatio);
   document.getElementById("ratio").innerHTML = ("Ratio: " + IngredientRatio + ":" + ProductRatio);
}