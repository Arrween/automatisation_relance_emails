function sendRecurringEmail() {
  // === Personnalisation de l'email ===
  var emailAddress = "destinataire@example.com"; // Adresse du destinataire
  var subject = "Rappel important concernant votre réponse"; // Objet du message

  var body = `
Bonjour,

Je me permets de vous recontacter concernant le message précédemment envoyé.

Je reste dans l'attente d'un retour de votre part à ce sujet.

N'hésitez pas à me faire savoir si vous avez besoin d'informations supplémentaires.

Cordialement,

[Votre Prénom Nom]
[Votre poste ou situation, facultatif]
[Votre email]
[Votre téléphone]
  `;

  // === Envoi de l'email ===
  MailApp.sendEmail({
    to: emailAddress,
    subject: subject,
    body: body
  });
}