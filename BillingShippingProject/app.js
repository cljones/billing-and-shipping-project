"use strict";
let useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling() {
   if (useShip.checked) {
      document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
      document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;   
      document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
      document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
      document.getElementById("cityBill").value = document.getElementById("cityShip").value;
      document.getElementById("countryBill").value = document.getElementById("countryShip").value;
      document.getElementById("codeBill").value = document.getElementById("codeShip").value;
      document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;     
   }   
}

