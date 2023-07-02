let form = document.querySelector('#item-form');
let input = document.querySelector('#item-input');
let ul = document.querySelector('#item-list');




function additem(e){
  e.preventDefault();
   
  let newItem = input.value;
  if(newItem === ''){
    alert('Please fill the form field');
     return;
}
     const li = document.createElement('li');
     li.appendChild(document.createTextNode(newItem));

     const button  = CreateButton('remove-item btn-link text-red');
     console.log(button);
     li.appendChild(button);
     ul.appendChild(li);
}

function CreateButton(classes){
    const button = document.createElement('button');
    button.className = classes;

    const icon = CreateIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function CreateIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


form.addEventListener('submit' , additem);





// const itemform =document.querySelector('#item-form');

// const iteminput = document.querySelector('.form-input');
// const ul = document.querySelector('#item-list');

// function addItem(e){
//     e.preventDefault();
//     const items = iteminput.value;

//     //validate input
//     if(iteminput.value === ""){         
//         alert('please enter the details');
//     }
//     console.log("successful");

//     //add items
//     const li = document.createElement('li');
//  li.appendChild(document.createTextNode(items));

//  const btn = createButton('remove-item btn-link text-red');
 
//  li.appendChild(btn);
// ul.appendChild(li);
 

// }

// function createButton(classes){
//     const button = document.createElement('button');
//     button.className = classes;

//     const icon = createIcon('fa-solid fa-xmark');
//     button.appendChild(icon);
//     return button;
// }

// function createIcon(classes){
//     const i = document.createElement('i');
//   i.className = classes;
//   return i;
// }

// itemform.addEventListener('submit', addItem)
