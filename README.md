# 📌 Plateforme de Candidatures - UGB

Cette application **Angular** est une plateforme de gestion et de dépôt de candidatures pour l'Université Gaston Berger (UGB).  
Elle permet aux candidats de postuler en ligne et à l’administration de gérer efficacement les candidatures.

- Page d'acceuil fonctionnelle
---

## 🚀 Fonctionnalités principales
- Dépôt de candidatures en ligne.
- Gestion des informations personnelles et académiques.
- Visualisation et suivi de l’état d’une candidature.
- Interface utilisateur moderne et responsive.

---

## 🖼️ Aperçu de la plateforme
![Aperçu de la plateforme](src/assets/icons/img.png)

---

## ⚙️ Configuration

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/votre-repo/ugb-candidatures.git
cd ugb-candidatures
```

### 2️⃣ Installer les dépendances
```bash
npm install
```

### 3️⃣ Lancer l'application
```bash
ng serve
```

Puis ouvrez http://localhost:4200 dans votre navigateur.

---
## 🔗 Configuration du Backend
L’URL du backend est définie dans le fichier :
`src/app/services/candidatures/candidatures.service.ts`

Par défaut, elle peut pointer vers un serveur de développement.
👉 Pour changer l’API utilisée, remplacez l’URL dans le service par celle de votre backend :
```ts
// Exemple dans candidatures.service.ts
private url = 'http://localhost:8080/api/candidatures'; 
```

---
## 🛠️ Technologies utilisées
- Angular (Framework Frontend)

- TypeScript

- HttpClient
