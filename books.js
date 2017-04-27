"use strict";

function initialLoad() {
	$('listBooks').onclick = submitRequest;

	 var catCall = new Ajax.Request ("booklist.php",
        {
            method: "get",
            onSuccess: showCategories,
            onFailure: handleRequestFailure,
            onException: handleRequestFailure
        });
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
		
		var parsedJSON = ajax.responseJSON;
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
		var books = ajax.responseXML.getElementsByTagName("book");
		var category = books[0].getElementsByTagName("name")[0].firstChild.nodeValue;

		$('bookCatDiv').update('<br/>Books in category ' + "\"" + category + "\":");

		$('booksDiv').update();
		$('booksDiv').insert("<ul>");

		for (var i = 0; i < books.length; i++) {
			var title = books[i].getElementsByTagName("title")[0].firstChild.nodeValue;
			var author = books[i].getElementsByTagName("author")[0].firstChild.nodeValue;
			var year = books[i].getElementsByTagName("year")[0].firstChild.nodeValue;
			var price = books[i].getElementsByTagName("price")[0].firstChild.nodeValue;

			$('booksDiv').insert("<li>" + title + ", by " + author + "(" + year + ") - " + price + "</li>");
		}
		$('booksDiv').insert("</ul>");
	}
}

function showCategories(ajax) {

	
}

function handleRequestFailure(ajax, exception) {
	alert("Error making Ajax request: " + "\n\nServer status:\n" + ajax.status + " " + ajax.statusText +
		"\n\nServer response text:\n" + ajax.responseText);
	if(exception) {
		throw exception;
	}

}

window.onload = initialLoad;