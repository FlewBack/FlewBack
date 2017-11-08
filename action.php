<!DOCTYPE HTML>

<head>
<meta charset="utf-8">
<link href="./style.css" rel="stylesheet">
<title> My website </title>
</head>

<body>
	<h1>Hello, <strong> <?php echo htmlspecialchars($_POST['name']); ?> </strong>.<h1>
	<h2>You are <?php echo (int)$_POST['age']; ?> years old.<h2>
</body>