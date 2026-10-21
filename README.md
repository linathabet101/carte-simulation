# CARTE — Propositions Multirisques Dommages

Un **client** a plusieurs **propositions**, comparables et imprimables (une seule, ou toutes avec un comparatif).

## Mise en ligne (GitHub Pages)
1. Déposer à la racine du dépôt : `index.html`, `sw.js`, `manifest.webmanifest`, `icon-180.png`, `icon-192.png`, `icon-512.png`.
2. *Settings* → *Pages* → *Deploy from a branch* → `main` / `(root)`.
3. Partager le lien `https://<utilisateur>.github.io/<depot>/`.

## Utilisation sans internet
Ouvrir le lien **une seule fois avec internet** (Wi-Fi ou données mobiles). Ensuite l'application fonctionne sans connexion.
- **Android (Chrome)** : bouton « Installer l'application », ou menu ⋮ → *Ajouter à l'écran d'accueil*.
- **iPhone (Safari)** : *Partager* → *Sur l'écran d'accueil* (à faire dans Safari).
- **PC (Chrome / Edge)** : icône d'installation dans la barre d'adresse.

Sans internet du tout et sans avoir ouvert le lien : envoyer le seul fichier `index.html` (fonctionne, mais moins fiable sur téléphone).
En local sur Windows : `py run_app.py`, puis `http://localhost:8000`.

## Données
Chaque appareil garde **ses propres données** dans son navigateur : rien n'est envoyé sur GitHub ni partagé entre utilisateurs. Utiliser **Sauvegarder (JSON)** / **Restaurer** pour changer d'appareil.

## Mises à jour
Après avoir remplacé les fichiers sur GitHub, chaque appareil se met à jour à sa prochaine ouverture avec internet (parfois au deuxième lancement).

## Confidentialité
GitHub Pages gratuit exige un dépôt public : les taux et les listes d'activités sont visibles dans le code.

## Calcul
Prime au taux = base × taux ‰ / 1 000. Garanties à valeur fixe : la valeur fixe est la prime.
Prime totale = (prime nette annuelle + frais fixes) × multiplicateur + ajout final.
Taux non précisés = 0 : à confirmer avant émission, de même que l'éligibilité RC.
