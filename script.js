let bagitems;
let wishlistitems;
onLoad();
function onLoad(){
    
    let bagitemstring=localStorage.getItem('bagitems');
     bagitems= bagitemstring ? JSON.parse(bagitemstring) : [];

     let wishlistitemsstring=localStorage.getItem('wishlistitems');
     wishlistitems= wishlistitemsstring ? JSON.parse(wishlistitemsstring) : [];

    displayitems();
    showbagcount();
}

function displayitems(){
    let main_element=document.querySelector('.main-container');
    if(!main_element){
        return ;
    }
    let innerHTML=``;
    items.forEach(item => {
        innerHTML+=`<div class="itm-container">
        <img class="img-container" src=${item.image_src} alt="itm-image">
        <div class="rating">
            ${item.rating.star} ⭐| ${item.rating.count}
        </div>
        <div class="brand">${item.brand}</div>
        <div class="itm-detail">${item.detail}</div>
        <div class="pricing">
            <span class="current-price">Rs. ${item.curr_price}</span>
            <span class="actual-price">Rs. ${item.act_price}</span>
            <span class="discount">(${Math.trunc((item.act_price-item.curr_price)/item.act_price*100)}% off)</span>
        </div>
        
        <button class="but2" onclick="additemtowish(${item.id})"><img class="wishlist-image" src="images/heart.png" alt=""></button><button class="but1" onclick="additemtobag(${item.id});">Add to Bag</button>
        
        
        
        </div>`
    }
    
);

main_element.innerHTML=innerHTML;
}


function additemtobag(id){
    if(bagitems.indexOf(id)==-1){
        bagitems.push(id);
        localStorage.setItem('bagitems',JSON.stringify(bagitems));
        showbagcount();
    }
    
    
}

function showbagcount(){
    let bagcntelement=document.querySelector('.bagitemCount');
    if(bagitems.length>0){
        bagcntelement.style.visibility= 'visible';
        bagcntelement.innerText=bagitems.length;
    }
    else{
        bagcntelement.style.visibility= 'hidden';
    } 
}

function additemtowish(id){
    if(wishlistitems.indexOf(id)==-1){
        wishlistitems.push(id);
        localStorage.setItem('wishlistitems',JSON.stringify(wishlistitems)); 
    }
       
}