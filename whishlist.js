let wishlistobject;
console.log(wishlistitems);
onLoad();
function onLoad(){
    let wish_cnt=document.querySelector('.wish-count');
    wish_cnt.innerHTML=`<b>My Wishlist</b> ${wishlistitems.length} items`;
    loadwishlistitems();
    showwishlistitems();
    showbagcount();
}

function loadwishlistitems(){
    wishlistobject=wishlistitems.map(id =>{
        for(let i=0;i<items.length;i++){
            if(id==items[i].id){
                return items[i];
            }
        }
        
    })
    
}
function showwishlistitems(){
    let innerHTML=``;
    wishlistobject.forEach(item => {
        innerHTML+=`
        <div class="itm-container">
        <img class="img-container" src=${item.image_src} alt="itm-image">
        <div class="brand">${item.brand}</div>
        <div class="itm-detail">${item.detail}</div>
        <div class="pricing">
            <span class="current-price">Rs. ${item.curr_price}</span>
            <span class="actual-price">Rs. ${item.act_price}</span>
            <span class="discount">(${Math.trunc((item.act_price-item.curr_price)/item.act_price*100)}% off)</span>
        </div>
        <button class="but2" onclick="removeitemfromwish(${item.id})"><img class="delete-image" src="images/x-letter.svg" alt=""></button><button class="but1" onclick="additemtobag1(${item.id});">Add to Bag</button>
        </div>
        
      `
    });

    let wishlist_element=document.querySelector('.wishlist-page');
    wishlist_element.innerHTML=innerHTML;
}

function additemtobag1(id){
    console.log(id);
    if(bagitems.indexOf(id)==-1){
        bagitems.push(id);
        localStorage.setItem('bagitems',JSON.stringify(bagitems));
    }
    
   wishlistitems=wishlistitems.filter(wishid => wishid!=id);
   localStorage.setItem('wishlistitems',JSON.stringify(wishlistitems));
   onLoad();
    
}

function removeitemfromwish(id){
    wishlistitems=wishlistitems.filter(wishid => wishid!=id);
    localStorage.setItem('wishlistitems',JSON.stringify(wishlistitems));
    onLoad();
}

