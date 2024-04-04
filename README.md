> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Interactive Functionality
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
Voor deze opdracht lag de focus op een interactieve functionaliteit die volledig toegankelijk is voor iedereen. Ik heb ervoor gekozen om een like functie te maken om een playlist te liken en te verplaatsen naar de sectie "Liked playlists". Dit kun je doen om op het hartje binnen de playlist te klikken. Wil je de playlist weer unliken? Dan kan je nog een keer op het hartje klikken om het weer weg te halen.

Ook heb ik gewerkt aan een playlist detailpagina waar je verhalen kan zien die in de playlists staan opgeslagen en andere overige informatie over deze playlist.

<!-- Voeg een mooie poster visual toe 📸 -->
### Visual

<img height= 500 width= 250 src="https://github.com/Annevd/the-web-is-for-everyone-interactive-functionality/assets/144004647/b5aa2903-80ff-4444-b36a-26928aeac831">
<img height= 500 width= 250 src="https://github.com/Annevd/the-web-is-for-everyone-interactive-functionality/assets/144004647/c656bf47-f226-4ef5-9366-f8f1183d2d1c">
<img height= 500 width= 250 src="https://github.com/Annevd/the-web-is-for-everyone-interactive-functionality/assets/144004647/539a068a-49b8-4393-b351-e5af505e5490">
<img height= 500 width= 250 src="https://github.com/Annevd/the-web-is-for-everyone-interactive-functionality/assets/144004647/498bd02e-7882-4395-b0d3-2023aa702468">


<!-- Voeg een link toe naar Github Pages 🌐-->
[Livelink](https://the-web-is-for-everyone-interactive-1ons.onrender.com/)

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
Om deze pagina live te bekijken kan je klikken op de livelink in de About sectie van deze repository.
Omdat we zijn begonnen met het bouwen van de lessons pagina in plaats van de homepage, dien je eerst in het menu rechtsonder op deze pagina te klikken.

### User Story
Als gebruiker wil ik een playlist kunnen markeren als favoriet. Dit kan de gebruiker doen door op het hartje te klikken in een playlist. De playlist verschijnt vervolgens dan in de 'Liked playlists'.


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
Bij deze leertaak heb ik gebruik gemaakt van het principe _Progressive Enhancement_. Dit houdt in dat je werkt in verschillende lagen.

Namelijk:

1. Core functionality: de content laag (bijv. HTML)
2. Layout as an enhancement: de presentatie laag (bijv. basic CSS)
3. Enhance!: de laatste laag (bijv. extra client-side Javascript)

Door gebruik te maken van progressive enhancement zorg je er dus voor dat de eerste laag altijd en voor iedereen werkt, mochten de andere lagen het niet doen voor een of andere reden.

Bij deze leertaak heb ik dit principe ook toegepast.

Ik ben bij alles eerst begonnen met het schrijven van de HTML, zoals bij de nieuwe toevoeging van deze sprint, de playlist detailpagina. Eerst heb ik ervoor gezorgd dat alle HTML en EJS correct gerenderd werd, en daarna ben ik pas begonnen met het toevoegen van CSS.

Ook heb ik het menu dat ik vorige sprint al heb gemaakt enhanced. Ik heb als enhancement toegevoegd dat je niet buiten het menu kan tabben als je in het menu bent, en dat je niet in het menu kan tabben als je er niét in zit.

Ook gebruik ik `scrollbar-width: none` in een `@supports` om de scrollbars weg te halen bij alleen browsers die dat ondersteunen.

Voor de POST functionaliteit van deze sprint ben ik begonnen met het schrijven van de HTML. Vervolgens heb ik ervoor gezorg dat de interactie goed werkte via de server.js. Daarna ben ik pas begonnen met het toevoegen van CSS en overige enhancements zoals succes states en empty states.

Als enhancement op de stories op de lessons pagina heb ik werkende knoppen toegevoegd die de ul scrollt als je op de knoppen klikt.

Tot slot heb ik dit toegepast op de achtergrond kleuren in de gradients. Eerst staat in de CSS de normale gradient toegepast op de achtergronden. Als enhancement maakt ik gebruik van een `@supports` query om gebruik te maken van een ander color model, namelijk `oklch`. Hierdoor worden de kleuren in de gradients mooier en feller weergegeven. Omdat ik gebruik maak van de `@supports` query wordt dit alleen toegepast op browsers en devices waar dit ondersteund word, en wordt de reguliere gradient gebruikt waar het niet ondersteund wordt.


## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
1. Installeer [NodeJs](https://nodejs.org/en)
2. Fork deze repository
3. Open het in een code editor naar keuze
4. Run de command ```npm install```
5. Run de command `npm start`
6. Klik op de localhost link en begin met coden!

## Bronnen

- [Can I use?](caniuse.com)
- [Understanding Progressive Enhancement](https://alistapart.com/article/understandingprogressiveenhancement/)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
