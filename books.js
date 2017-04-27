"use strict";

function initialLoad() {
	// $('listBooks').onclick = submitRequest;

  	new Ajax.Request ("booklist.php",
        {
            method: "get",
            parameters: {format:document.URL.toQueryParams().format},
            onSuccess: showCategories,
            onFailure: handleRequestFailure,
            onException: handleRequestFailure
        });
}

function requestCategories(){
	

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
		$('bookCatDiv').update('<br/>Books in category ' + "\"" + parsedJSON.books[0].name + "\":");
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
		var category = books[0].getElementsByTagName("category")[0].firstChild.nodeValue;

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

	if(document.URL.toQueryParams().format === "json"){
		var parsedJSON = ajax.responseJSON;
		for (var i = 0; i < parsedJSON.categories.length; i++) {
			var radioButton = document.createElement("input");
	        radioButton.type = "radio";
	        radioButton.name = "bookCategory";
	        radioButton.value = parsedJSON.categories[i].name;

	        if(i == 0){
	        	radioButton.checked = "checked";
	        }
        
	        var radioButtonLabel = document.createElement("label");
	        var textNode = document.createTextNode(parsedJSON.categories[i].name + " ");
	        radioButtonLabel.appendChild(textNode);
	        
	        $("categories").appendChild(radioButton);
	        $("categories").appendChild(radioButtonLabel);
		}
		 
		var submitButton = document.createElement("button");
	    
	    submitButton.id = "listBooks";
	    var textNode = document.createTextNode("List Books");
	    submitButton.appendChild(textNode);
	    $("categories").appendChild(submitButton);

	    $('listBooks').onclick = submitRequest;

	}
	else{
		var categories = ajax.responseXML.getElementsByTagName("category");
		// var category = categories[0].getElementsByTagName("name")[0].firstChild.nodeValue;

		for (var i = 0; i < categories.length; i++) {

			var radioButton = document.createElement("input");
	        radioButton.type = "radio";
	        radioButton.name = "bookCategory";
	        radioButton.value = categories[i].getElementsByTagName("name")[0].firstChild.nodeValue;

	        if(i == 0){
	        	radioButton.checked = "checked";
	        }
        
	        var radioButtonLabel = document.createElement("label");
	        var textNode = document.createTextNode(categories[i].getElementsByTagName("name")[0].firstChild.nodeValue + " ");
	        radioButtonLabel.appendChild(textNode);
	        
	        $("categories").appendChild(radioButton);
	        $("categories").appendChild(radioButtonLabel);

		}
		var submitButton = document.createElement("button");
	    
	    submitButton.id = "listBooks";
	    var textNode = document.createTextNode("List Books");
	    submitButton.appendChild(textNode);
	    $("categories").appendChild(submitButton);

	    $('listBooks').onclick = submitRequest;

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