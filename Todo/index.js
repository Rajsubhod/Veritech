let counter = 0;

document.getElementById('form').addEventListener('submit', function (e) {
	e.preventDefault();

	const taskInput = document.getElementById('task');

	const todo = taskInput.value;
	taskInput.value = '';
	const ul = document.getElementById('list');
	const li = document.createElement('li');
	const box = document.createElement('div');
	box.setAttribute('class', 'w-[70%]');
	li.appendChild(box);

	// li.value = counter++;
	li.setAttribute('id', counter);
	li.setAttribute(
		'class',
		'bg-orange-400 p-5 w-[97%] rounded-md ml-2 flex gap-4 justify-around flex justify-between items-center mb-2'
	);
	// Text box
	box.appendChild(document.createTextNode(todo));

	// Delete Button
	const deleteBtn = document.createElement('button');
	deleteBtn.value = counter;
	deleteBtn.setAttribute('id', 'deleteBtn');
	deleteBtn.setAttribute(
		'class',
		'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-red-600 text-white shadow hover:bg-red-500/90 ml-5 h-9 px-6 py-2'
	);
	deleteBtn.appendChild(document.createTextNode('Delete'));

	// Done Button
	const doneBtn = document.createElement('button');
	doneBtn.setAttribute('id', 'doneBtn');
	doneBtn.setAttribute(
		'class',
		'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white shadow hover:bg-green-500/90 ml-5 h-9 px-6 py-2'
	);
	doneBtn.appendChild(document.createTextNode('Done'));

	li.appendChild(deleteBtn);
	li.appendChild(doneBtn);
	ul.appendChild(li);
	counter++;

	document.getElementById('deleteBtn').addEventListener('click', function (e) {
		if (e.target) {
			const liCount = e.target.value;
			const ul = e.target.parentElement.parentElement;
			console.log(ul.children);

			for (let i = 0; i <= ul.children.length; i++) {
				if (ul.children[i].id == liCount) {
					ul.children[i].remove();
					break;
				}
			}
			console.log(ul.children);

			// li.remove();
		}
	});

	document.getElementById('doneBtn').addEventListener('click', function (e) {
		const attributes = e.target.parentElement.getAttribute('class');
		if (!attributes.includes('!bg-green-500')) {
			e.target.parentElement.setAttribute(
				'class',
				`${attributes} !bg-green-500`
			);
			return;
		} else {
			e.target.parentElement.setAttribute(
				'class',
				`bg-orange-400 p-5 w-[97%] rounded-md ml-2 flex gap-4 justify-around flex justify-between items-center mb-2`
			);
		}
	});
});
