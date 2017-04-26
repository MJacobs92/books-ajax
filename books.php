<!DOCTYPE html>
<html>
<head>
	<title>AJAX Book Search</title>
	<script src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.3.0/prototype.js" type="text/javascript"></script>
	<script src="books.js" type="text/javascript"></script>
</head>
<body>
	<div>
		<input type = "radio" name = "bookCategory" id = "children" value = "Children" />
		<label for = "children">Children</label>
		<input type = "radio" name = "bookCategory" id = "computers" value = "Computers" />
		<label for = "computers">Computers</label>
		<input type = "radio" name = "bookCategory" id = "finance" value = "Finance" />
		<label for = "finance">Finance</label>
		<button id="listBooks">List Books</button>
	</div>
	<div id="bookCatDiv">
	</div>
	<div id="booksDiv">
	</div>
</body>
</html>