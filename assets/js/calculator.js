
function calculateTotal() {
var regularMenuPrice = 20;
var enhancedMenuPrice = 30;
var kidsMenuPrice = 20;
var vegetarianMenuPrice = 25;
var sushiMenuPrice = 35;

var regularMenuQty = parseInt(document.getElementById('regularmenu').value) || 0;
var enhancedMenuQty = parseInt(document.getElementById('enhancedmenu').value) || 0;
var kidsMenuQty = parseInt(document.getElementById('kidsmenu').value) || 0;
var vegetarianMenuQty = parseInt(document.getElementById('vegetarianmenu').value) || 0;
var sushiMenuQty = parseInt(document.getElementById('sushimenu').value) || 0;

var totalCost = (regularMenuPrice * regularMenuQty) + (enhancedMenuPrice * enhancedMenuQty) + (kidsMenuPrice * kidsMenuQty) + (vegetarianMenuPrice * vegetarianMenuQty) + (sushiMenuPrice * sushiMenuQty);

document.getElementById('total').value = '£' + totalCost.toFixed(2);
}

function populateTextField() {
var form = document.getElementById('contact-form');
var textArea = document.getElementById('order-details');
var formData = new FormData(form);

var orderDetails = '';
orderDetails += '**Total Order:**\n';
orderDetails += 'Regular Menu Quantity: ' + document.getElementById('regularmenu').value + '\n';
orderDetails += 'Enhanced Menu Quantity: ' + document.getElementById('enhancedmenu').value + '\n';
orderDetails += 'Kids Menu Quantity: ' + document.getElementById('kidsmenu').value + '\n';
orderDetails += 'Vegetarian Menu Quantity: ' + document.getElementById('vegetarianmenu').value + '\n';
orderDetails += 'Sushi Menu Quantity: ' + document.getElementById('sushimenu').value + '\n\n';
orderDetails += '**Total Cost:**' + document.getElementById('total').value + '\n';

textArea.value = orderDetails;

// Adjusting textarea height
textArea.style.height = "auto";
textArea.style.height = (textArea.scrollHeight + 30) + "px";
}
