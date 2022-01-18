<?php
include ('config.php'); // On se connecte à la bdd grace au fichier config.php crée juste avant

$_COOKIE['hybrid'] = bin2hex(openssl_random_pseudo_bytes(64)); //On va juste creer un cookie
$_SESSION['hybrid'] = $_COOKIE['hybrid'];
setcookie('hybrid', '', time()-3600);
session_destroy();
$NAME = $_GET['NAME'];

// Il faut que les variables existent bien et ne soient pas vides
if(!empty($_POST['pseudo']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['password_retype']))
{
    $pseudoErr = $emailErr = $passwordErr = $password_retypeErr = ''; //Mise en place des erreurs (on les retrouve en bas)

    // Utilisation de fonctions spéciales afin de lutter contre faille XSS (comme vu en cours)
    $pseudo = htmlspecialchars($_POST['pseudo']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $password_retype = htmlspecialchars($_POST['password_retype']);

    // En premier on va verifier si l'utilisateur est deja inscrit (pour ne pas avoir de doublons)
    $check = $bdd->prepare('SELECT pseudo, email, password FROM utilisateurs WHERE email = ?');
    $check->execute(array($email));
    $data = $check->fetch();
    $row = $check->rowCount();

    $email = strtolower($email); // on va transformer toute les lettres majuscules en minuscules pour eviter les erreurs dans les adresses mails

    // Si requete = 0 , alors l'utilisateur n'existe pas, on poursuit l'inscription
    if(strlen($pseudo) <= 100){ // On verifie que la longueur du pseudo <= 100
        if(strlen($email) <= 100){ // On verifie que la longueur du mail <= 100
            if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // Si l'email est de la bonne forme
                if($password === $password_retype){ // si les deux passwords saisis sont bien les memes

                    // On hash le mot de passe avec Bcrypt
                    $cost = ['cost' => 12];
                    $password = password_hash($password, PASSWORD_BCRYPT, $cost);

                    // On stock l'adresse IP
                    $ip = $_SERVER['REMOTE_ADDR'];

                    // On insère ensuite toutes les nouvelles données dans la bdd
                    $insert = $bdd->prepare('INSERT INTO utilisateurs(pseudo, email, password, ip, token) VALUES(:pseudo, :email, :password, :ip, :token)');
                    $insert->execute(array(
                        'pseudo' => $pseudo,
                        'email' => $email,
                        'password' => $password,
                        'ip' => $ip,
                        'token' => bin2hex(openssl_random_pseudo_bytes(64))
                    ));


                    // Affiche un message de succès : puis redirection de l'utilisateur
                    header('Location:inscription.php?reg_err=success');
                    die();
                }else{ $password_retypeErr = 'Les deux mots de passes ne sont pas identiques';}
            }else{ $emailErr = 'Adresse email non conforme';}
        }else{ $emailErr = 'Email trop long';}
    }else{ $pseudoErr = 'Pseudo trop long';}
}
?>