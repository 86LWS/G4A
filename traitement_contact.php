<?php 

if ($_POST['nom']=='')
    {
    Header('location:index_contact.php');
    echo "Remplis ton nom! "; 
    }

    elseif ($_POST['prénom']=='') {
    Header('location:index.php');
    echo "Remplis ton prénom !"; 
    }

    elseif ($_POST['message']=='') 
    {
    Header('location:index.php');
    echo "Que veux tu nous dire? Remplis la case message"; 
    }
    
    else 
    {

    $nom = $_POST['nom'];
    $prénom = $_POST['prénom'];
    $message = $_POST['message'];

        echo "Bonjour $prénom $nom, ton message a bien été envoyé. En attendant notre réponse, consultez notre foire aux questions."; 
    
    }


$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "contact";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) 
    {
      die("Connection failed: " . $conn->connect_error);
    }
$sql="INSERT INTO nom (nom) VALUES ('$_POST[nom]')";
$sql="INSERT INTO prénom (prénom) VALUES ('$_POST[prénom]')";
$sql="INSERT INTO message (message) VALUES ('$_POST[messsage]')";
$conn->query($sql);
if ($conn->query($sql) == TRUE) 
    {
        $message1 = "Ta blague est tordante, merci !";
        $message2 = "Ajoute une autre blague";
    }
$conn->close();
include ('index.php');    


?>

