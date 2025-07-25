# Argent Bank - Backend

Ce dépôt contient le code source du backend de l’application bancaire **Argent Bank**.  
Il fournit les routes API nécessaires à l’authentification des utilisateurs et à la consultation de leur profil.  
Certaines routes liées à la gestion des transactions ont également été implémentées, en plus de la documentation Swagger fournie à titre de spécification.

---

## Contexte

Ce backend a été conçu pour fonctionner en tandem avec le frontend développé dans le cadre du parcours OpenClassrooms **Intégrateur Web**.  
Une fois lancé, il permet de tester localement l’application web, y compris l’authentification, la gestion du profil utilisateur et les transactions.

🔗 Dépôt GitHub du frontend :  
[https://github.com/Valerie2a/argent-bank-frontend](https://github.com/Valerie2a/argent-bank-frontend)

---

## Prérequis

- [Node.js v18+](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Vérifiez que Node.js et MongoDB sont bien installés :

```bash
node --version
mongo --version
```

---

## Installation

### Cloner ce dépôt

```bash
git clone https://github.com/Valerie2a/ArgentBank-Backend.git
cd ArgentBank-Backend
```

### Installer les dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev:server
```

Le backend sera accessible à l’adresse :  
[http://localhost:3001](http://localhost:3001)

### Remplir la base de données avec deux utilisateurs de test

```bash
npm run populate-db
```

---

## Comptes de test

Ces identifiants peuvent être utilisés pour se connecter à l’application via le frontend :

| Prénom | Nom    | Email             | Mot de passe   |
|--------|--------|-------------------|----------------|
| Tony   | Stark  | tony@stark.com    | password123    |
| Steve  | Rogers | steve@rogers.com  | password456    |

---

## Documentation de l’API

Une fois le serveur lancé, la documentation Swagger est disponible à cette adresse :  
[http://localhost:3001/api-docs](http://localhost:3001/api-docs)

---

## Spécification Swagger des transactions

Dans le cadre de la phase 2 du projet, une **documentation Swagger** a été rédigée pour proposer des routes destinées à la gestion des transactions (lecture, édition, etc.).  
Ces routes sont décrites dans un fichier YAML au format Swagger 2.0.

Bien que seule la documentation ait été demandée, **certaines de ces routes ont été effectivement implémentées dans le backend**, afin de permettre leur utilisation via l’interface frontend.

---



