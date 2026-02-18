# Paddock Media — site statique (GitHub Pages)

## 1) Publier sur GitHub Pages
1. Crée un compte GitHub
2. Crée un dépôt **public** nommé **paddockmedia**
3. Uploade tous ces fichiers à la racine du dépôt
4. Va dans **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / folder **/(root)**
5. Ton site sera accessible via une URL du type:
   - https://<ton_user>.github.io/paddockmedia/

## 2) Mettre ton domaine paddockmedia.be (chez ton registrar)
Dans le registrar du domaine, crée ces DNS:

### Option recommandée (A records vers GitHub Pages)
- A  @  185.199.108.153
- A  @  185.199.109.153
- A  @  185.199.110.153
- A  @  185.199.111.153
- CNAME  www  <ton_user>.github.io

Puis dans GitHub (Settings → Pages):
- Custom domain: **paddockmedia.be**
- coche **Enforce HTTPS**

## 3) Formulaire de contact (optionnel)
GitHub Pages ne gère pas de backend. Pour un formulaire:
- Formspree: https://formspree.io/
- Ou Google Forms

Tu peux aussi rester sur un simple mailto (déjà en place).

## 4) Remplacer tes images
Mets tes images dans `assets/` et renomme-les:
- portfolio-01.jpg ... portfolio-06.jpg
- (ou change les noms directement dans index.html)

## 5) Media Kit
Remplace `assets/media-kit.pdf` par ton PDF (1 page conseillé).
