let ulist = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", buttonClicked);

function buttonClicked(){
	if (input.value === "") return;
	let boxvalue = input.value;
	input.value = "";
	const list = document.createElement("li");
	const span = document.createElement("span");
	const butt = document.createElement("button");
	list.appendChild(span);
	list.appendChild(butt);
	span.textContent = boxvalue;
	butt.textContent = "Delete";
	ulist.appendChild(list);
	// Add a click event listener to the delete button
	butt.addEventListener("click", function() {
		DeleteClicked(list);
	});
}

function DeleteClicked(list){
	list.remove();
}