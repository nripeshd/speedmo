/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

  document.addEventListener('variant:changed', function(event) {
   var variant = event.detail.variant; // Gives you access to the whole variant details
   
    if(variant.inventory_quantity <= -300){
    document.getElementById("ordernote").value='Sold out';
    
    }
    else{
        
  if(variant.inventory_quantity > 0){

     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

// Start DATE Calculation
   const today_date1 = new Date();
        const start_day= today_date1.getDate() + 7;
		today_date1.setDate(start_day);    	
		 const year1=String(today_date1.getFullYear());
    	 const start_month1 = monthNames[ today_date1.getMonth()];
    	 const date1 = String(today_date1.getDate()).padStart(2, '0');
		 const start_date = start_month1  + ' '+ date1+', '+year1;
    
// End DATE Calculation
    	const today_date2 = new Date();
        const end_day= today_date2.getDate() + 12;
		today_date2.setDate(end_day);
    	//     	 const end_month = today_date2.getMonth();
    	 const end_month1 = monthNames[ today_date2.getMonth()];
    	 const date = String(today_date2.getDate()).padStart(2, '0');
         const year2=String(today_date2.getFullYear());
    	 const end_date = end_month1  + ' '+ date+', '+year2+'.';  
	document.getElementById("ordernote").value='In Stock: Ships by '+ start_date + ' to ' +end_date;

  }
  
   else {
    
      	
             const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
			const qty= Math.abs(variant.inventory_quantity);
        // Start DATE Calculation
           const today_date1 = new Date();
                const start_day= today_date1.getDate() + 7 + qty;
                today_date1.setDate(start_day);    	
                //     	 const end_month = today_date2.getMonth();
                 const start_month1 = monthNames[ today_date1.getMonth()];
                 const date1 = String(today_date1.getDate()).padStart(2, '0');
      			 const year1=String(today_date1.getFullYear());
      
                 const start_date = start_month1  + ' '+ date1+', '+year1;

        // End DATE Calculation
                const today_date2 = new Date();
                const end_day= today_date2.getDate() + 12 + qty;
                today_date2.setDate(end_day);
                //     	 const end_month = today_date2.getMonth();
                 const end_month1 = monthNames[ today_date2.getMonth()];
                 const date = String(today_date2.getDate()).padStart(2, '0');
     		     const year2=String(today_date2.getFullYear());
                 const end_date = end_month1  + ' '+ date+', '+year2+'.';
            document.getElementById("ordernote").value='Ships by '+ start_date + ' to ' +end_date;

     
    }
    
    
    
    
    }
    
    
    
//     
    
    if(variant.price>= 10000)
    {
 
       var free_qty= document.getElementById("free_shipping_info").value;
     
            
// document.getElementsByTagName("free_shipping_info").removeAttribute("display");

       document.getElementById("free_shipping_info").style.display = "block";
       document.getElementById("free_shipping_info").textContent="Free Shipping";
    
    
    }
    else{
     
       document.getElementById("free_shipping_info").style.display = "none";
    
    }
//     
      
  });
