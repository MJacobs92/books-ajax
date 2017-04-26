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
		// alert(ajax.responseText);
		
		var parsedJSON = JSON.parse(ajax.responseText);
		$('bookCatDiv').update('<br/>Books in category ' + "\"" + parsedJSON.books[0].category + "\":");
		//clear div
		$('booksDiv').update();
		$('booksDiv').insert("<ul>");
        for (var i=0;i<parsedJSON.books.length;i++) {
        	$('booksDiv').insert("<li>" + parsedJSON.books[i].title + ", by " + parsedJSON.books[i].author + "(" + parsedJSON.books[i].year + ") - " + parsedJSON.books[i].price + "</li>");
        }
        $('booksDiv').insert("</ul>");
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