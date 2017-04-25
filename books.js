"use strict";

function initialLoad() {
	$('listBooks').onclick = addButtonClicked;
}

function submitRequest() {
	 new Ajax.Request('/booklist.php', {
     	method: 'get',
        onSuccess: handleRequestSuccess,
        onFailure:  handleRequestFailure,
        onException:  handleRequestFailure
     });
}

function handleRequestSuccess(ajax) {
	alert(ajax.responseXML);

}

function handleRequestFailure(ajax, exception) {
	alert("Error making Ajax request: " + "\n\nServer status:\n" + ajax.status + " " + ajax.statusText +
		"\n\nServer response text:\n" + ajax.responseText);
	if(exception) {
		throw exception;
	}

}