# CARTE — Multirisques Dommages proposal simulator

A single-file web app for preparing, comparing and printing Multirisques Dommages (multi-risk property damage) insurance proposals. Each client can have several proposals. No server and no account: everything runs in the browser, including without internet.

The interface and the printed sheets are in French. Button names below are given as they appear on screen, with an English gloss.

> This is a simulation tool. Rates, insured amounts and RC eligibility must be confirmed before any policy is issued.

## Features
- **Clients**: name, phone, note, and a search box for the client list. Each client has their own proposals.
- **Proposals**: create, duplicate and delete them (a client always keeps at least one). A **Comparatif** (comparison) tab appears as soon as a client has two.
- **29 coverages (garanties) in 5 families**: I Fire (Incendie), II Theft (Vol), III Accidental water leakage (Fuite accidentelle des eaux), IV Glass breakage (Bris de glaces), VI Public liability, operations (Responsabilité civile exploitation). By default only the chosen coverages are shown; **Toutes les garanties** (all coverages) shows the rest.
- **Settings per proposal**: activity (155 suggested activities: 118 with RC, 37 without RC), RC eligibility, and for each coverage the insured amount/base, and a rate in ‰ or a fixed value. Choosing "Sans RC" switches off family VI.
- **Printing**: **Imprimer** prints one proposal. **Imprimer tout** prints the comparison (if there are several proposals) followed by one page per proposal. For a PDF, choose "Save as PDF" in the print window. The printed sheet also shows the fixed fees, the multiplier and the final addition.
- **Encrypted backup / restore** (JSON file protected by a password) and an optional **password lock** for the data stored on the device.
- **Works offline** and can be installed on the home screen (PWA).

## Calculation
Amounts are in DT, with 3 decimals.

- Rate-based coverage: `base × rate ‰ / 1,000`.
- Fixed-value coverage (II-9, VI-1, VI-2, VI-3): the premium is the fixed value entered; the insured amount is informational.
- **Total premium = (annual net premium + fixed fees) × multiplier + final addition**.

Defaults for a new proposal (all editable): fixed fees 20 DT, multiplier 1.12, final addition 3 DT.
Default rates: I-1 and I-6 0.35 ‰; I-10 0.1 ‰; I-16 3 ‰; I-24 0.4 ‰; I-26 3 ‰; II-1 2 ‰; II-7 4 ‰; III-1 1.5 ‰; IV-1 15 ‰; II-9 5 DT fixed; VI-1 40 DT fixed. All other rates are 0. The insured amounts of I-1 and I-6 start at 0: enter them to get a premium.

## Usage
**With the GitHub Pages link (recommended)**: open the link **once with internet** (Wi-Fi or mobile data), then install the app. After that it opens without a connection.
- Android (Chrome): the "Installer l'application" (install) button in the sidebar, or the ⋮ menu → *Add to Home screen* / *Install app*.
- iPhone (Safari): *Share* → *Add to Home Screen*.
- PC (Chrome or Edge): the install icon in the address bar.

**Without the link**: double-clicking `index.html` (or sending it on its own) works without internet but cannot be installed. This is reliable on a PC; on a phone, prefer the link.

A recent browser is required (Chrome, Edge, Safari or Firefox).

## Data and backup
- Data is stored **in the browser of the device** (local storage). Nothing is sent over the internet and nothing is shared between users or devices.
- Clearing browser data, switching browser or losing the device deletes the clients. Use **Sauvegarder (JSON)** (back up) regularly and **Restaurer une sauvegarde** (restore) to recover or transfer them. Restoring replaces the current data after confirmation.
- On iPhone, Safari may erase the data of a site left unused for a long time if the app is not installed on the home screen.
- If proposals from the first version of the tool exist in the browser, they are moved into a client named "Client (anciennes propositions)".

## Privacy and protection
- The app never sends client data anywhere. The GitHub repository contains only the app code, never client data.
- **Backups are always encrypted** (AES-256-GCM, key derived from your password with PBKDF2, minimum 8 characters). The file is named `carte_clients_<date>.chiffre.json`. Without the password it cannot be opened, so keep the password separate from the file. Older unencrypted backups can still be restored.
- **Password lock (optional)**: the **Protéger par mot de passe** button encrypts the clients stored on the device. The password is asked at every launch, and **Verrouiller maintenant** locks the app immediately.
- **There is no password recovery.** If the password is forgotten, the locked data and the encrypted backups cannot be recovered.
- Not protected: data on screen while the app is unlocked (there is no automatic lock after inactivity), and printed sheets or PDFs.
- Encryption needs a secure context (the https link, or the file opened directly). It is unavailable on plain `http://` addresses.
- Never commit backup files to GitHub, encrypted or not.

## Publishing (GitHub Pages)
1. Put the files listed below at the **root** of a public repository.
2. *Settings* → *Pages* → *Deploy from a branch* → `main` / `(root)` → *Save*.
3. After 1 to 2 minutes the link `https://<username>.github.io/<repository>/` is live.

To update, replace the changed files in the repository. Each device picks up the new version the next time it is opened with internet (sometimes on the second launch) and keeps its data.

Free GitHub Pages requires a public repository, so the rates and the activity list are readable in the code.

## Files
| File | Purpose |
|---|---|
| `index.html` | The complete app (no external resources) |
| `sw.js` | Caching for offline use |
| `manifest.webmanifest` | Name and icon of the installed app |
| `icon-180.png`, `icon-192.png`, `icon-512.png` | Icons |
| `README.md` | This document |

## Limitations
- No synchronization between devices or between agents.
- Rates, bases and activity lists come from the information supplied with the project; they do not replace the official tariff.
- The RC family (VI) is only calculated with fixed values.
- Encryption uses the browser's standard Web Crypto and has not been independently audited.


