var form = document.getElementById('addForm');
var itemLists = document.querySelector('#items');


form.addEventListener('submit', addItem);
itemLists.addEventListener('click', removeItem)
function addItem(e){
    e.preventDefault();
    var newItem =document.getElementById('item').value;
    var li = document.createElement('li');
li.className = 'list-group-item';
li.appendChild(document.createTextNode(newItem));
var button =document.createElement('button')
button.className ='btn btn-danger btn-sm float-right delete';
button.appendChild(document.createTextNode('X'));
li.appendChild(button);
itemLists.appendChild(li);
}
function removeItem(e){
    if(e.target.classList.contains('delete')){

        if(confirm('Are you sure?')){
          
            var li = e.target.parentElement;
            itemLists.removeChild(li);
        
       }
    }

}

var filter = document.getElementById('filter')

filter.addEventListener('keyup', filterItems);
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemLists.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent; 
    console.log(itemName);
  });
}
