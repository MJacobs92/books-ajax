"use strict";

function initialLoad() {
	$('listBooks').onclick = submitRequest;
}

function submitRequest() {
	 new Ajax.Request('/booklist.php', {
     	method: 'get',
     	parameters: {format:document.URL.toQueryParams().format, category: $$('input:checked[name="bookCategory"]')[0].value},
        onSuccess: handleRequestSuccess,
        onFailure:  handleRequestFailure,
        onException:  handleRequestFailure
     });
}

function handleRequestSuccess(ajax) {

	if(document.URL.toQueryParams().format === "json"){
		alert(ajax.responseText);
	}
	else{
		alert(ajax.responseText);
	}
	

}

function handleRequestFailure(ajax, exception) {
	alert("Error making Ajax request: " + "\n\nServer status:\n" + ajax.status + " " + ajax.statusText +
		"\n\nServer response text:\n" + ajax.responseText);
	if(exception) {
		throw exception;
	}

}

window.onload = initialLoad;