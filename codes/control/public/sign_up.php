<?php
// require "../App/Controllers/Controller.php";

// // $conn = new Connexion();
// // $conn->connect();

// $model = new UserModel();
// echo "<pre>";
// var_dump($model->verify('koladeabd@gmail.com'));
// echo "</pre>";
// $controller = new Controller('koladeabd@gmail.com');
// echo $controller->verifyControl();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire</title>
</head>
<body>
    <form action="../App/Controllers/registercontroller.inc.php" method="post">
        <input type="text" name="fname" placeholder="firstname" value="<?php echo $_GET["firstname"] ?? '' ?>" required>
        <input type="text" name="lname" placeholder="lastname" value="<?php echo $_GET["lastname"] ?? '' ?>" required>
        <input type="email" name="email" placeholder="Email" value="<?php echo $_GET["email"] ?? '' ?>" required>
        <input type="password" name="pwd" placeholder="Password" required>
        <input type="password" name="confirm_pwd" placeholder="Confirm password" required>
        <button type="submit" name="inscription">Valider</button>
        <p>Avez-vous un compte ? <a href="login.php">Connectez-vous!</a></p>
    </form>
</body>
</html>