const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	//Panel boczny
		burger.addEventListener('click', ()=> {

		nav.classList.toggle('nav-active');

		//Animacja panelu bocznego
		navLinks.forEach((link, index) => {

			link.style.animation = `navLinkFade 0.5 ease forwards ${index/5 + 3}s`;

			});
		//Animacja 'X'

		burger.classList.toggle('toggle');

		});

}

navSlide();

(function () {
	'use strict';
	var createNote,
		addButtonEl,
		init,
		testLocalStorage,
		saveNote,
		deleteNote,
		getNoteObject,
		loadNotes,
		chooseEl,
		Start;

		Start = function (ev) {
			var boundingClientRect;
			if (ev.target.className.indexOf('div') === -1) {
			  return;
			}

			chooseEl = this;


		  };

		getNoteObject = function (el) {
			var textarea = el.querySelector('textarea');
			return {

			  content: textarea.value,
			  id: el.id,
			  textarea: {
				width: textarea.style.width,
				height: textarea.style.height,
			  }
			};
		  };


	createNote = function() {

		let noteEl = document.createElement('div'),
		//titleEl = document.createElement('textarea');
	   //titleEl.className = 'title';

		saveButtonEl = document.createElement('button'),
		deleteButtonEl = document.createElement('button'),
		textareaEl = document.createElement('textarea');
		var saveN, deleteN;


		saveN = function () {
			saveNote(
			getNoteObject(noteEl)
			);
		};

		deleteN = function () {
			deleteNote(
			getNoteObject(noteEl)
			);

			row.removeChild(noteEl);
		};


		noteEl.classList.add('note');

		saveButtonEl.classList.add('saveButton');
		saveButtonEl.addEventListener('click', saveN, false);

		deleteButtonEl.classList.add('deleteButton');
		deleteButtonEl.addEventListener('click', deleteN, false);

		//noteEl.appendChild(titleEl);

		noteEl.appendChild(saveButtonEl);
		noteEl.appendChild(deleteButtonEl);
		noteEl.appendChild(textareaEl);


		let row = document.getElementById("1");

		noteEl.addEventListener('mousedown', Start, false);

		row.appendChild(noteEl)
		//document.body.appendChild(noteEl);


	};


	testLocalStorage = function () {
		var foo = 'foo';
		try {
		  localStorage.setItem(foo, foo);
		  localStorage.removeItem(foo);
		  return true;
		} catch (e) {
		  return false;
		}
	  };

	  init = function () {

		if (!testLocalStorage) {
		  var message = "We are sorry but you cannot use localStorage";
		  saveNote = function () {
			console.warn(message);
		  };

		  deleteNote = function () {
			console.warn(message);
		  };
		} else {
		  saveNote = function (note) {
			localStorage.setItem(note.id, JSON.stringify(note));
		  };

		  deleteNote = function (note) {
			localStorage.removeItem(note.id);
		  };

		  loadNotes = function () {
			for(var i = 0; i < localStorage.length; i++) {
			  var noteObject = JSON.parse(
				localStorage.getItem(
				  localStorage.key(i)
				)
			  );
			  createNote(noteObject);
			};
		  };
		  loadNotes();
		}

		addButtonEl= document.querySelector('.addButton');
		addButtonEl.addEventListener('click', createNote,false);


	};


	init();
	//createNote();


})();

