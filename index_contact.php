<!DOCTYPE html>
   <head>
      <link rel="stylesheet" href="style_contact.css">
      <title>Contactez-nous</title>
   </head>
   <body>
        <img src="capteur.jpg">
        <h1>Ajoute ton message :</h1>
       <section class="message">
           <form action="traitement_contact.php" method="POST">
             <label for="nom">Nom: </label><br>
             <input type="text" id="nom" name="nom" value="" ><br><br>
             <label for="prénom">Prénom: </label><br>
             <input type="text" id="prénom" name="prénom" value=""><br><br>
             <label for="message">Votre message: </label><br>
             <textarea id="message" name="message"> </textarea><br><br>
             <input type="submit" value="Ajoute ton message">
             <input type="reset" value="Réinitialise les champs">
           </form>
       </section>
   </body>
   </html>