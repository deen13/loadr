# Calisthenics Competition Management MVP 

Dieses Projekt ist das [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) einer Plattform zum Verwalten von Calisthenics [1RM](https://en.wikipedia.org/wiki/One-repetition_maximum) Wettkämpfen.  Implementiert wurde die Vorschau des nächsten Gewichtes für die Scheibenstecker. In diesem beispielhaften Anwendungsfall trägt das Kampfgericht den jeweils nächsten Versuch in der App ein, welcher anschließend auf dem iPad oder TV für die Scheibenstecker angezeigt wird.

| Bildschirm für Scheibenstecker (iPad - TV) | Ansicht des Kampfgerichtes  |
|--|--|
| <img width="1061" alt="Browser Screenshot" src="https://user-images.githubusercontent.com/13850172/70085247-25577d80-1610-11ea-8dfb-16df2a247a33.png"> | <img alt="Android Screenshot" src="https://user-images.githubusercontent.com/13850172/70085554-c2b2b180-1610-11ea-85a6-c1fecd88760c.jpg"> |


### Technologien
Um die Inbetriebnahme möglichst unkompliziert zu gestalten wurde das MVP als Single-Page-App entwickelt. Dadurch muss die Webseite nur auf den einzelnen Geräten aufgerufen werden und benötigt keine extra Infrastruktur. Für die Anwendung wurden [Nuxt](https://nuxtjs.org/) und [Vuetify](https://vuetifyjs.com/en/) im Frontend genutzt. Im Backend sorgt [Firebase](https://firebase.google.com/) für die Authentication, das Hosting und mit dem Firestore für die Echtzeit-Updates.
<p align="center">
  <img src="https://user-images.githubusercontent.com/13850172/70087092-ea574900-1613-11ea-9d5c-9e8543f10b76.jpg"/>
</p>


### Anwendungsfälle

 - Registrierung für den Wettkampf und damit einhergehende Bezahlung
 - Einwiegen der Athleten und automatische Zusammenstellung der Flights
 - Visualisierung des nächsten Gewichtes für die Scheibenstecker
 - Dashboard für die Zuschauer mit zusätzlichen Informationen wie Social Media, letzte Wettkampfergebnisse und Körpergewicht
 - Wertung der laufenden Versuche und Annehmen der nächsten Versuchen durch das Kampfgericht
 - Übersicht über den aktuellen Flight für die Athleten im Aufwärmbereich
 - Live-Ticker für Zuschauer, die das Event weder vor Ort, noch im Livestream verfolgen können
 - Auswertung der Wettkampfergebnisse mit automatischem Versand der Urkunden 
 - Erhebung von Daten zum Erstellen einer Relativformen ähnlich der [Wilks](https://en.wikipedia.org/wiki/Wilks_Coefficient) oder [IPF Points](https://www.powerlifting.sport/fileadmin/ipf/data/ipf-formula/IPF_Points_Proposal.pdf) im Powerlifting

### Links
[Next Lifer](http://www.nextlifter.com/) | [Open Lifter](https://gitlab.com/openpowerlifting/openlifter) | [1000 Hour Side Project - Ben Chartrand](https://liftcodeplay.com/2019/03/28/the-tale-of-the-1000-hour-side-project/)
