const form = document.querySelector('form');
const uList = document.querySelector('#list');
const removeBtn = document.querySelector('.remove');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	// prevent empty submit
	const taskInput = document.querySelector('#new-task');
	if (!taskInput.value) {
		return;
	}

	//  append new li with removed bullet formatting to ul
	const newLi = document.createElement('li');
	newLi.classList.add('noBullet');
	uList.append(newLi);

	// append checkbox and span with todo text to label
	const label = document.createElement('label');
	const checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	const span = document.createElement('span');
	span.innerText = taskInput.value;
	label.append(checkBox, span);

	// append label to li
	newLi.append(label);
	form.reset();
});

uList.addEventListener('change', function(event) {
	// when click occurs on a checkbox, mark completed
	event.target.nextElementSibling.classList.toggle('completed');
});

removeBtn.addEventListener('click', function() {
	const checked = document.querySelectorAll('input[type="checkbox"]:checked');
	checked.forEach(function(r) {
		r.parentElement.remove();
	});
});
