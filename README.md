[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Y0f03qEq)
# Instruktioner

Denna uppgift går ut på att du bygga vidare uppgift u01 - Portfoliosida utifrån designskiss med Javascript. Du är nu fri att ändra till egen design / layout, samt eget innehåll. Det är dock viktigt att du behåller en sektion för CV ("About me") och en sektion med projekt ("Projects") eftersom du ska vidareutveckla sidan med Javascript på dessa sektioner. 

## Vad du ska göra

Du ska bygga vidare på  u01 - Portfoliosida utifrån designskiss med Javascript. och se till att du följer följande kravställningar: 

### CV i en fil:
Dina egna utbildningar och tidigare arbetsplatser ska nu ersätta "About me"-sidan. Ta med så mycket som möjligt att ditt "riktiga CV", men iallafall minst tre poster av varje.
Vilka utbildningar du läst och vilka tidigare arbeten du haft ska ligga i en separat fil i JSON-format. Denna JSON-fil ska läsas och och generera ditt CV på den tidigare motsvarigheten av "About me" sidan.


### Interaktiva scripts:
Din CV-sida ska innehålla minst två interaktiva JavaScript. Exempel kan vara en modal, slideshow, scroll-effekt, dölja/visa element, o.s.v

### Portfolio:
 Du publicerar minst två uppgifter / projekt från tidigare eller nuvarande studier / arbete inom HTML /CSS

### 👉  VG-krav

Din portfolio ska utökas så att den hämtar in publika projekt som finns i din egen Github via API. Den ska visa dessa projekt i din portfolio med namn och beskrivning.

Du får gärna ha både dessa projekt och andra som genereras utifrån JSON-data om du känner för det, eller så ersätter du projekten så det bara är dina Github-projekt. Eventuellt kan du behöva komplettera datan från Github API med t.ex bilder ifrån JSON-datan.

När hämtningen av projekten sker ska det finnas information om att projekten håller på att ladda in så att besökaren inte undrar varför sidan först är tom.



### Tekniska krav:
* Validerad med 0 fel på https://validator.w3.org
* Inga errors i Console

### Sammantfattning av projekt + teoretiska frågor

1. Du sammanfattar ditt projekt i README.md och reflekterar kring styrkor och ev brister. Max 500 ord.
2. Du svarar på dessa frågor (max 800 ord):

Vad kan man utveckla m.h.a av Javascript inom frontend?
Vad är JSON och hur används det inom frontend?
Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?


## Kriterier för bedömning


Icke Godkänd (IG), Godkänd (G) eller Väl Godkänd (VG)

### Godkänd (G)
Din portfolio-sida uppfyller alla krav enligt kravspecifikationen.
Du visar att du kan utan allvarliga brister eller missar utveckla denna portfoliosida enligt kraven
Du sammanfattar ditt projekt samt ger ett översiktligt och korrekt svar på frågorna


### Väl Godkänd (VG)

Din portfolio-sida uppfyller alla krav enligt kravspecifikationen samt VG-kraven
Du uppvisar en mer avancerad förståelse för Git genom att jobba med en developer-branch som du sedan mergar i main
Du visar att du kan utan brister, eller bara i sådan omfattning att de knappt märks eller påverkar slutresultatet


### Börja uppgift / Din inlämning
* Du börjar och lämnar in din uppgift genom Github Classroom på denna länk.
* Återkoppling ges i Canvas

## Sammanfattning och teoretiska frågor
### Sammanfattning
I detta projekt har jag gett funktionalitet till ett tidigare projekt med hjälp av Javascript och Json. Det första jag gjorde var en meny för mobile layouten som visas när man klickar på hamburger ikonen. Denna meny används för att navigera mellan sidorna i mobile layouten. Efter det skapade jag en Modal för projekten i Projects sidan. Det sista jag gjorde var att läsa in datan för About sidan med Json istället för att skriva texten i HTML. Sidan är uppladdad på netlify https://u02leoncasserfelt.netlify.app/.

Den största styrkan med sidan är att innehållet går att ändra enkelt för att göra en riktig CV sida. Om jag forsatte jobba på den här sidan hade jag sparat all information i Json för att göra detta ennu enklare.

Två stora svagheter med sidan är att den har ett par buggar som jag inte hunnit fixa och att koden som skapar HTML på About sidan är väldigt dåligt skriven. Om jag gjorde om sidan hade jag velat hitta en bättre lösning för det.

### teoretiska frågor

Vad kan man utveckla m.h.a av Javascript inom frontend?

Man kan använda Javascript för nästan allt inom frontend. Javascript är såklart bäst för att skapa funktionalitet men det går också att använda för att skapa innehåll på sidan som jag har gjort på About sidan.

Vad är JSON och hur används det inom frontend?

Json står för JavaScript Object Notation och det används för att spara och flytta data. till exempel från local storage till klienten.

Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

HTTP står för Hypertext Transfer Protocol och det används för att kommunisera mellan webservrar. Till exempel används det för att ladda hemsidor med länkar.

## länk till sidan
https://u02leoncasserfelt.netlify.app/