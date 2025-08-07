# Générateur et Lecteur de Code-Barres 📦📷

Ce projet permet de générer et/ou lire des **codes-barres** via une interface ou en ligne de commande.

## 🧰 Fonctionnalités
- 📤 Génération de codes-barres (EAN-13, Code128, QR Code…)
- 📷 Lecture de codes-barres via webcam ou image
- 🖨️ Sauvegarde en image (PNG, JPG, etc.)

## 🧪 Technologies utilisées
- Python
- Bibliothèques :
  - `python-barcode`
  - `opencv-python`
  - `Pillow`
  - `pyzbar`
  - `qrcode` *(si QR inclus)*

## 📦 Installation

```bash
git clone https://github.com/Eliott-kat/code-barre.git
cd code-barre
pip install -r requirements.txt
python app.py
