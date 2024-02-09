let bagitemsobject;
onLoad();
function onLoad(){
    
    loadbagitems();
    showBagItems();
    updatesummary()
}

function loadbagitems(){
    bagitemsobject=bagitems.map(id =>{
        for(let i=0;i<items.length;i++){
            if(id==items[i].id){
                return items[i];
            }
        }
        
    })
    
}
function showBagItems(){
    let innerHTML=``;
    bagitemsobject.forEach(item => {
        innerHTML+=`<div class="bag-item-container">
        <div class="item-left-part">
          <img class="bag-item-img" src=${item.image_src}>
        </div>
        <div class="item-right-part">
          <div class="company">${item.brand}</div>
          <div class="item-name">${item.detail}</div>
          <div class="price-container">
            <span class="current-price">Rs ${item.curr_price}</span>
            <span class="original-price">Rs ${item.act_price}</span>
            <span class="discount">(${Math.trunc((item.act_price-item.curr_price)/item.act_price*100)}% OFF)</span>
          </div>
          <div class="return-period">
            <span class="return-period-days">14 days</span> return available
          </div>
          <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">10 Oct 2023</span>
          </div>
        </div>
    
        <div class="remove-from-cart" onclick="removeitemfrombag(${item.id})";>X</div>
      </div>`
    });

    let bag_element=document.querySelector('.bag-items-container');
    bag_element.innerHTML=innerHTML;
}
function removeitemfrombag(itemId){
    bagitems=bagitems.filter(bagid=> bagid!=itemId);
    localStorage.setItem('bagitems',JSON.stringify(bagitems));
    onLoad();
    showbagcount();

}

function updatesummary(){
    let summaryelement=document.querySelector('.bag-summary');
    
    let element_cnt=bagitemsobject.length;
    let original_price=0;
    let discounted_price=0;
    
    let Convenience_Fee= element_cnt==0 ? 0:99;
    bagitemsobject.forEach(item =>{
        original_price+=item.act_price;
        discounted_price+=item.curr_price;
    })
    summaryelement.innerHTML=`<div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${element_cnt} items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">Rs${original_price}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-Rs${original_price-discounted_price}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">Rs ${Convenience_Fee}</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">Rs ${discounted_price+Convenience_Fee}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>`;
    
}

