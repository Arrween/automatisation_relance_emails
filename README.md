# automatisation_relance_emails

# 📬 Automatisation de relance par Gmail

Ce projet vise à automatiser l'envoi récurrent d'un email de relance à une administration (dans ce cas, une sous-préfecture), dans le cadre d’un dossier de titre de séjour en attente de traitement.

## 🎯 Objectif

Automatiser l'envoi d'un email tous les 2 jours via **Google Apps Script** pour relancer la préfecture sur un dossier resté sans réponse.

## 🛠️ Technologies utilisées

- **Google Apps Script**
- **Gmail API (`MailApp`)**
- **Déclencheurs planifiés (Triggers)**

## 📦 Contenu du dépôt

- `sendRecurringEmail.gs` : script principal à coller dans votre éditeur Google Apps Script.
- `email_template.txt` : exemple de contenu d'email.
- `rapport.pdf` : court rapport détaillant le projet.

## 📌 Remarques

- Vous pouvez modifier l’adresse email cible, l’objet ou le message dans le script.
- Veillez à ne pas abuser de cette automatisation pour éviter d’être considéré comme spammeur.
- Respectez les délais raisonnables d’attente entre chaque relance selon le contexte administratif.
