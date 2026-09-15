export default {
  n: 1,
  slug: "laeren-om-livet",
  part: 1,
  title: "Læren om livet",
  lead: "Hva biologi er, hvordan faget har utviklet seg, hva som kjennetegner liv, og hvordan biologer arbeider i felt og på laboratoriet.",
  goals: [
    "planlegge og gjennomføre undersøkelser, samle, behandle og tolke data, og presentere resultater og funn",
    "utforske sammenhenger mellom anatomi og fysiologi og gjøre greie for prinsippene for livsprosessene i organismer",
    "utforske abiotiske og biotiske faktorer i et økosystem, drøfte sammenhenger som forklarer det biologiske mangfoldet, og reflektere over naturens egenverdi"
  ],
  sections: [
    {
      num: "1.1",
      title: "Hva er biologi?",
      blocks: [
        ["p", "Biologi er læren om alt levende. Ordet kommer fra gresk **bios** (liv) og **logos** (lære). Mer presist er biologi studiet av levende organismer og hvordan de forholder seg til hverandre og til miljøet sitt."],
        ["p", "Faget spenner fra molekyler inne i cellene til de store økosystemene på jorda, og det overlapper med kjemi, fysikk, matematikk, statistikk og medisin. Teknologisk utvikling de siste tiårene har gitt metoder innenfor genanalyse, mikroskopi og databehandling som var ukjente for få tiår siden."],
        ["h", "Fagfelter i biologien"],
        ["table",
          ["Fagfelt", "Hva de studerer"],
          [
            ["Cellebiologi og molekylærbiologi", "Innholdet i cellene og de kjemiske prosessene som foregår der"],
            ["Mikrobiologi", "Bakterier, encellede protister og virus"],
            ["Genetikk", "Artenes DNA og arvelighet, slektskap mellom og innenfor arter"],
            ["Botanikk, mykologi, zoologi", "Henholdsvis planter, sopper og dyr"],
            ["Økologi", "Samspillet innenfor arter, mellom arter og mellom arter og miljøet"],
            ["Evolusjonsbiologi", "Hvordan individer tilpasser seg nye miljøer slik at nye arter kan oppstå"],
            ["Marinbiologi", "Livet i havet, fra mikroorganismer til hvaler"]
          ],
          "De fleste biologer bruker kunnskap fra flere av feltene samtidig."
        ],
        ["key", "Biologi er studiet av levende organismer og hvordan de forholder seg til hverandre og miljøet sitt. En biolog kan jobbe med alt fra molekyler i celler til store økosystemer."]
      ]
    },
    {
      num: "1.2",
      title: "Biologifagets evolusjon",
      blocks: [
        ["p", "Biologien begynte som beskrivelser av planter, dyr og rariteter. Etter hvert lette man etter et system. For over 2400 år siden skrev **Aristoteles** (384–322 f.Kr.) den første kjente systematiske oversikten over dyreriket, *Historia animalium*, der han plasserte mennesket sammen med andre firfotede dyr."],
        ["p", "På 1700-tallet foreslo svensken **Carl von Linné** (1707–1778) systemet vi i hovedsak bruker i dag. Det viktigste bidraget hans var den binominale navnsettingen, tonavnsystemet *Slekt art*. Linné navnga 8000 planter og 6000 dyr og trodde det var drøyt halvparten av artene på kloden. I dag er omtrent 1,6 millioner arter beskrevet."],
        ["h", "Evolusjon og økologi"],
        ["p", "Den store endringen kom med **Charles Darwin** (1809–1882) og evolusjonsteorien i 1859. Teorien sannsynliggjorde at livet er i konstant utvikling, og at mangfoldet av livsformer er et resultat av tilpasning. Den ga biologien et verktøy til å forstå livsprosessene, og plasserte mennesket i utviklingslæren som én art blant andre."],
        ["p", "Darwin forstod også at arter utvikler seg sammen. Han forklarte variasjonen i kløveravlingene på den engelske landsbygda gjennom en næringskjede: humler bestøver kløveren, markmus plyndrer humlebolene, og katter nær landsbyene holder markmusene nede. Økologi ble likevel først et eget fagfelt fra 1940-årene."],
        ["h", "Cellebiologi og molekylærbiologi"],
        ["steps", [
          ["1665 – Robert Hooke ser celler", "I tynne snitt av kork så han romliknende strukturer han kalte *cellulae*, etter latin *cella* – lite rom."],
          ["1866 – Gregor Mendel", "Forsøk med erteplanter viste en lovmessig overføring av arvelige egenskaper. Lovene ble først gjenoppdaget i år 1900."],
          ["1888 – kromosomer får navn", "Betegnelsen ble foreslått på de trådformede strukturene i cellekjernen."],
          ["1953 – Watson og Crick", "Beskrev DNA-molekylets struktur som en dobbeltheliks, bygd på Rosalind Franklins røntgendiffraksjon."],
          ["1970-årene – genteknologi", "Enzymer brukes til å klippe ut DNA-biter og sette dem inn i andre organismer, såkalte transgene organismer."],
          ["1999 – menneskets genom", "Fullt sekvensert for første gang. I dag kan hvem som helst få kartlagt sitt eget genom."]
        ]],
        ["key", "To av biologiens viktigste årstall er 1859, da evolusjonen ble beskrevet, og 1953, da DNA-molekylet og arven ble forstått."],
        ["note", "Darwin og Wallace", [
          "Darwin nølte med å publisere den kontroversielle teorien sin. I 1855 fikk han brev fra den unge naturforskeren **Alfred Russel Wallace** (1823–1913), som etter studier i Indonesia hadde kommet fram til en nesten identisk utviklingsteori.",
          "Vennene til Darwin arrangerte et møte i The Linnean Society i 1858, der artikkelen til Wallace ble presentert sammen med et utdrag av Darwins essay fra 1844. Wallace anerkjente senere Darwins sentrale rolle i deres felles teori."
        ]]
      ]
    },
    {
      num: "1.3",
      title: "Hva er liv?",
      blocks: [
        ["p", "Begrepet «liv» har ingen entydig definisjon, men de fleste kilder tar med disse punktene:"],
        ["list", [
          "Inni en levende organisme er det organisert orden.",
          "Reguleringsmekanismer i celler og organer gir et tilnærmet konstant indre miljø – **homeostase** – selv når omgivelsene varierer.",
          "Cellene er omgitt av en cellemembran, har arvestoffet DNA og har organeller som flyter i cellevæsken, cytosol."
        ]],
        ["h", "Hva er et individ?"],
        ["p", "Et individ er en mer eller mindre autonom, selvstyrende enhet. Hos encellede organismer er individet det samme som enkeltcellen. I dyrekolonier som bier og maur kan ikke enkeltorganismene overleve alene, men de har egen atferd og regnes som individer. Hos maneter henger polyppene fysisk sammen og kan oppfattes som ett individ, før de løsner og lever adskilt."],
        ["fig", "hierarki", "Det biologiske hierarkiet: økosystem – samfunn – populasjon – art – individ – organsystem – organ – vev – celle."],
        ["h", "De sju livsprosessene"],
        ["olist", [
          "vekst og utvikling",
          "fordøyelse og næringsopptak",
          "celleånding og gassutveksling",
          "ekskresjon",
          "reaksjon på stimuli fra omgivelsene",
          "bevegelse",
          "formering"
        ]],
        ["p", "Livsprosessene gir likevel ikke et entydig svar på hva liv er. Krystallstrukturer kan kopiere seg selv, og DNA og RNA kan kopieres i et reagensglass. **Virus** er arvestoff pakket inn i et proteinskall som trenger en vertscelle for å formere seg, og regnes derfor ikke som levende."],
        ["key", "Felles for alle organismer er at de er levende individer der de sju livsprosessene foregår."]
      ]
    },
    {
      num: "1.4",
      title: "Biologiske arbeidsmetoder",
      blocks: [
        ["p", "Biologer bruker to hovedmetoder: den naturvitenskapelige (hypotetisk-deduktive) arbeidsmetoden og den induktive metoden."],
        ["fig", "metode", "Den naturvitenskapelige arbeidsmetoden: observasjon, hypotese, systematisk testing og konklusjon. Avkreftes hypotesen, begynner man på nytt."],
        ["p", "Metoden begynner ofte med en **observasjon**. Ut fra den formulerer biologen én eller flere mulige forklaringer, **hypoteser**, som testes i systematiske forsøk. Å arbeide med logiske slutninger steg for steg kalles **deduksjon**. En **teori** er hypoteser som er testet mange nok ganger i uavhengige forsøk, og som mange nok i fagfeltet støtter."],
        ["p", "Den **induktive metoden** bygger på kartlegging og observasjoner, for eksempel av biologisk mangfold i et økosystem eller genetiske studier av slektskap. Å trekke generelle slutninger ut fra et visst antall observasjoner kalles **induksjon**. Darwins evolusjonsteori ble til på denne måten: han studerte 14 finkearter på Galápagos, der nebbformen var tilpasset ulik tilgang på føde."],
        ["compare", [
          ["Hypotetisk-deduktiv metode", [
            "Starter med en hypotese som skal testes",
            "Systematiske, kontrollerte forsøk",
            "Hypotesen blir bekreftet eller avkreftet",
            "Eksempel: spirer frø raskere ved 20 °C enn ved 10 °C?"
          ]],
          ["Induktiv metode", [
            "Starter med observasjon og kartlegging",
            "Generell slutning trekkes ut fra mange observasjoner",
            "Ingen hypotese må formuleres på forhånd",
            "Eksempel: registrering av arter i en biotop"
          ]]
        ]],
        ["h", "Laboratoriearbeid og feilkilder"],
        ["p", "På laboratoriet undersøker vi små organismer og celler med stereolupe eller mikroskop, dissekerer større organismer og dyrker planter, sopp og bakteriekulturer. Det finnes strenge etiske regler for forsøk på levende organismer, særlig dyr."],
        ["p", "I alle forsøk må **feilkilder** vurderes. I et frøspiringsforsøk kan fuktighet, temperatur, lys, spiringsevne, jordmengde og vannmengde variere, og tolkningen kan variere fra person til person. Derfor bør forsøket gjentas av flere grupper, slik at store avvik kan utelates og gjennomsnittet beregnes."],
        ["table",
          ["Del av rapporten", "Hva den skal inneholde"],
          [
            ["Tittel, navn og dato", "Gjerne samme tittel og nummer som øvelsen i boka"],
            ["Hensikt", "Hva du vil finne ut, og hypotesene som skal testes"],
            ["Utstyrsliste", "Alt utstyret som ble brukt, gjerne med bilde"],
            ["Framgangsmåte", "Hvordan utstyret ble brukt og forsøket gjennomført"],
            ["Figurer og bilder", "Oppsett og observasjoner, med navn på delene"],
            ["Resultat", "Hva dere observerte, og måledata"],
            ["Konklusjon og feilkilder", "Drøfting, om hypotesen ble bekreftet, og hvordan feilkilder kan ha påvirket resultatet"]
          ],
          "Slik bygger du opp en rapport fra et forsøk."
        ],
        ["h", "Feltarbeid"],
        ["p", "I felt undersøker du både **abiotiske** (ikke-levende) og **biotiske** (levende) faktorer i et økosystem. Sentrale arbeidsmetoder er å observere og kartlegge arter, beskrive naturtypen, fotografere eller tegne, registrere lyder og sportegn, måle lys, jorddybde, fuktighet og temperatur, ta vannprøver og måle pH, bruke feller og håver, og registrere menneskelig påvirkning."],
        ["p", "En **biotop** er levestedet til dyr og planter som naturlig lever sammen. Et **økosystem** er som regel arealmessig større og inneholder flere biotoper. Barskogen på Østlandet er et økosystem; granskogen der ekornet lever, er en biotop."],
        ["h", "Biologisk modellering"],
        ["p", "Når naturen er vanskelig å beskrive med enkle undersøkelser, brukes statistiske modeller og datasimuleringer bygd på faktiske registreringer. Ved å endre én eller flere faktorer kan forskere beregne miljørisiko og konsekvenser av inngrep. Modellering er også sentralt i klimaforskning og i **bioinformatikk**, der store biologiske datasett tolkes statistisk."],
        ["key", "Den naturvitenskapelige arbeidsmetoden tester hypoteser systematisk. Den induktive metoden observerer fenomener og trekker logiske slutninger av observasjonene."]
      ]
    },
    {
      num: "1.5",
      title: "Kvinner i biologifaget",
      blocks: [
        ["p", "Aristoteles, Linné, Darwin, Mendel, Watson og Crick var alle menn. Flere kvinner har vært like avgjørende for faget."],
        ["table",
          ["Forsker", "Felt og bidrag"],
          [
            ["Florence Nightingale (1820–1910)", "Sykepleie og hygiene. Innførte strenge hygienerutiner under Krimkrigen og brukte statistiske analyser til å vise at flere soldater døde av sykdom enn på slagmarken."],
            ["Kristine Bonnevie (1872–1948)", "Zoolog og Norges første kvinnelige professor. Arbeidet med marinbiologi, cellebiologi og arv."],
            ["Rosalind Franklin (1920–1958)", "Biofysiker. Røntgendiffraksjonsanalysene hennes var avgjørende for beskrivelsen av DNA som dobbeltheliks."],
            ["Rachel Carson (1907–1964)", "Marinbiolog og forfatter av *Silent Spring*. Viste hvordan DDT spredte seg gjennom næringskjedene og drepte fugler."],
            ["Jane Goodall (f. 1934)", "Etolog. Over seksti år med atferdsstudier av sjimpanser, blant annet redskapsbruk."],
            ["Doudna og Charpentier", "Fikk nobelprisen i kjemi for CRISPR-Cas9, «gensaksa» som gjør presis genredigering mulig."],
            ["May-Britt Moser (f. 1963)", "Nobelpris i 2014 for oppdagelsen av gitterceller – hjernens posisjoneringssystem."]
          ]
        ]
      ]
    }
  ],
  terms: [
    ["Biologi", "Læren om alt levende; studiet av levende organismer og forholdet deres til hverandre og miljøet."],
    ["Anatomi", "Bygningen til en organisme."],
    ["Fysiologi", "Funksjonen til organismens deler og prosesser."],
    ["Homeostase", "Et tilnærmet konstant indre miljø i cellene og kroppen, opprettholdt av reguleringsmekanismer."],
    ["Individ", "En enkelt, mer eller mindre selvstyrende organisme. Hos encellede er individet én celle."],
    ["Organisme", "Fra gresk *organon* – organ, instrument, verktøy. En levende enhet bygd opp av én eller flere celler."],
    ["Hypotese", "En mulig forklaring som kan testes gjennom systematiske forsøk."],
    ["Teori", "Hypoteser som er testet mange nok ganger i uavhengige forsøk, og som fagfeltet støtter."],
    ["Deduksjon", "Logiske slutninger steg for steg, fra hypotese til testbar forutsigelse."],
    ["Induksjon", "Å trekke en generell slutning ut fra et antall observasjoner eller forsøk."],
    ["Feilkilde", "Faktor som gjør resultatet av et forsøk usikkert, for eksempel ulik temperatur, vannmengde eller tolkning."],
    ["Biotop", "Levestedet til dyr og planter som naturlig lever sammen."],
    ["Økosystem", "Geografisk avgrenset område med alle abiotiske og biotiske faktorer som påvirker hverandre; inneholder flere biotoper."],
    ["Abiotiske faktorer", "Ikke-levende miljøfaktorer som lys, temperatur, vann, pH og næringsstoffer."],
    ["Biotiske faktorer", "Levende miljøfaktorer som mat, konkurranse, predasjon og parasitter."],
    ["Binominal navnsetting", "Tonavnsystemet til Linné: *Slekt art*, skrevet i kursiv med stor forbokstav i slektsnavnet."],
    ["Evolusjonsteori", "Vitenskapelig forklaring på hvordan arter har oppstått og utviklet seg."],
    ["Bioinformatikk", "Tolkning av store biologiske datasett, ofte genetiske, med statistiske verktøy."],
    ["Biologisk modellering", "Datasimuleringer og statistiske modeller som brukes til å forutsi utvikling, risiko og konsekvenser."],
    ["Virus", "Arvestoff pakket inn i et proteinskall. Trenger en vertscelle for å formere seg og regnes ikke som levende."]
  ],
  rep: [
    ["Hva er biologi?", "Biologi er læren om alt levende: studiet av levende organismer og hvordan de forholder seg til hverandre og til miljøet sitt. Ordet kommer fra gresk *bios* (liv) og *logos* (lære)."],
    ["Nevn noen fagfelter innenfor biologien.", "Cellebiologi, molekylærbiologi, mikrobiologi, genetikk, botanikk, mykologi, zoologi, økologi, evolusjonsbiologi og marinbiologi."],
    ["Hva mener vi med binominal navnsetting?", "Tonavnsystemet Linné innførte: hver art får et vitenskapelig navn satt sammen av slektsnavn og artsnavn, for eksempel *Hepatica nobilis*. Navnet kursiveres, og slektsnavnet skrives med stor forbokstav."],
    ["Hva er Darwin kjent for?", "Han grunnla den moderne evolusjonsteorien (1859), basert på blant annet observasjoner av finker på Galápagos. Han viste at arter utvikler seg gjennom tilpasning og naturlig utvalg, og at artene utvikler seg sammen i næringskjeder."],
    ["Nevn noen viktige oppdagelser innenfor biologien.", "Hooke som så celler (1665), Linnés navnsystem (1700-tallet), Mendels arvelover (1866), navnet kromosomer (1888), Darwins evolusjonsteori (1859), Watson og Cricks DNA-struktur (1953), genteknologi fra 1970-årene og sekvenseringen av menneskets genom i 1999."],
    ["Hva betyr ordet organisme?", "Det kommer fra gresk *organismos* og *organon*, som betyr organ, instrument og verktøy."],
    ["Hvordan definerer du individ?", "Et individ er en enkelt organisme – en mer eller mindre autonom, selvstyrende enhet. I det biologiske hierarkiet ligger individet mellom cellen og populasjonen. Hos encellede organismer er individet lik enkeltcellen."],
    ["Hvilken inndeling bruker vi i det biologiske hierarkiet?", "Økosystem – samfunn – populasjon – art – individ – organsystem – organ – vev – celle."],
    ["Hva er felles for alle organismenes celler?", "De er omgitt av en cellemembran, de har arvestoffet DNA, og de har organeller eller cellestrukturer som ligger i cellevæsken (cytosol)."],
    ["Forklar hva livsprosessene går ut på.", "De sju livsprosessene er vekst og utvikling, fordøyelse og næringsopptak, celleånding og gassutveksling, ekskresjon, reaksjon på stimuli, bevegelse og formering. Sammen sørger de for at organismen får energi og byggesteiner, kvitter seg med avfall, reagerer på omgivelsene og fører genene videre."],
    ["Hvorfor regner vi ikke virus som levende?", "Virus har verken eget stoffskifte, organeller eller celleoppbygning. De er arvestoff i et proteinskall og kan bare formere seg inne i en vertscelle."],
    ["Forklar hva som kjennetegner hypotetisk-deduktiv metode og induktiv metode.", "Hypotetisk-deduktiv metode kjennetegnes ved systematisk testing av én eller flere hypoteser: observasjon → hypotese → forsøk → bekreftet eller avkreftet. Induktiv metode bygger på kartlegging og observasjon, der man trekker en generell slutning ut fra mange enkeltobservasjoner."],
    ["Hva er forskjellen på en hypotese og en teori?", "En hypotese er en mulig forklaring som ennå ikke er testet godt nok. En teori er hypoteser som er testet mange ganger i uavhengige forsøk, og som støttes bredt i fagfeltet. Teorier dreier seg gjerne om større problemstillinger, som evolusjonsteorien."],
    ["Hva er en feilkilde?", "En faktor som gjør resultatet usikkert fordi den påvirker forsøket uten å være kontrollert – for eksempel ulik vannmengde, temperatur, lys, frøkvalitet eller ulik tolkning av observasjonene."],
    ["Hva er nytten av å drive feltarbeid?", "Du øver på å undersøke og registrere det du observerer, får dybdekunnskap om et bestemt område, og lærer å måle abiotiske og biotiske faktorer og se sammenhengene som forklarer det biologiske mangfoldet."],
    ["Forklar forskjellen på et økosystem og en biotop.", "En biotop er levestedet til arter som naturlig lever sammen, for eksempel granskog. Et økosystem er arealmessig større, inneholder flere biotoper og omfatter både abiotiske og biotiske faktorer – for eksempel barskogen på Østlandet."],
    ["Hvordan kan biologisk modellering være et nyttig hjelpemiddel?", "Modellering bruker innsamlede data i statistiske modeller. Ved å endre én eller flere faktorer kan man simulere hva som skjer framover, og beregne miljørisiko og konsekvenser av inngrep før de gjennomføres."],
    ["Nevn noen eksempler på hva man kan bruke biologisk modellering til.", "Å forutsi klimaendringer, artsutbredelse, endringer i økosystemer og miljøbelastningen ved naturinngrep, og å tolke store genetiske datasett i bioinformatikk."]
  ],
  tasks: [
    ["1.1", "Ta kontakt med en som arbeider med biologi (lærer, forsker, sykepleier, lege eller noen innenfor miljøvern). Intervju personen og legg fram en rapport.", "Løsningsforslag: Lag spørsmål på forhånd i tre bolker – utdanning og vei inn i faget, en typisk arbeidsdag, og hvilke metoder personen bruker (feltarbeid, laboratorium, statistikk). Still oppfølgingsspørsmål om hva som er mest krevende, og hvordan biologisk kunnskap brukes i beslutninger. Rapporten bør ha innledning, metode (hvem, når, hvordan), hoveddel med det du fikk vite, og en kort refleksjon."],
    ["1.2", "Gi et eksempel på en undersøkelse der det passer å bruke den naturvitenskapelige arbeidsmetoden, og et der den induktive metoden passer.", "Naturvitenskapelig (hypotetisk-deduktiv): «Spirer karsefrø raskere i lys enn i mørke?» Her settes en testbar hypotese, og alle andre faktorer holdes like. Induktiv: kartlegging av alle plantearter i en biotop gjennom en sesong, der du trekker generelle slutninger om artsmangfoldet ut fra registreringene."],
    ["1.3", "Formuler en hypotese du vil teste. Hvordan vil du gå fram?", "Eksempel på hypotese: «Meitemark søker mot mørke.» Framgangsmåte: legg marken i et rør der halvparten er dekket av svart papir, registrer hvor den oppholder seg etter fastsatte tidsintervaller, gjenta med flere individer, og sammenlikn med et kontrollrør uten dekke. Vurder feilkilder som temperatur, uttørking og lampevarme."],
    ["1.4", "Skriv et essay om Charles Darwin.", "Momenter: reisen med HMS Beagle og observasjonene på Galápagos, de 14 finkeartene med ulik nebbform som tilpasning til føde, den lange induktive innsamlingen av data, essayet fra 1844, brevet fra Wallace i 1855 og fellesmøtet i The Linnean Society i 1858, utgivelsen i 1859, og hvordan teorien plasserte mennesket i utviklingslæren."],
    ["1.5", "Aristoteles, Linné, Darwin, Mendel og Bonnevie – på hvilke måter har de hatt betydning? Finn også ut mer om Watson, Crick og Rosalind Franklin.", "Aristoteles lagde den første systematiske oversikten over dyreriket. Linné innførte tonavnsystemet og taksonomien vi bruker i dag. Darwin forklarte mangfoldet med evolusjon og naturlig utvalg. Mendel viste lovmessig nedarving av egenskaper. Bonnevie var Norges første kvinnelige professor og arbeidet med cellebiologi og arv. Watson og Crick beskrev DNA-strukturen i 1953 og fikk nobelprisen i 1962 sammen med Wilkins; Rosalind Franklins røntgenbilder var avgjørende for arbeidet, men hun døde i 1958 og ble ikke tildelt prisen."],
    ["1.6", "Se gjennom aviser i en uke og finn saker som handler om biologi. Har forfatteren faglig bakgrunn? Hvilke kilder er brukt?", "Vurder kildene systematisk: er påstandene knyttet til publisert forskning, til en organisasjon med interesser i saken, eller til enkeltpersoners erfaring? Se etter om artikkelen skiller mellom korrelasjon og årsak, om usikkerhet er nevnt, og om motstemmer er sitert."],
    ["1.7", "Lag en plan der elevene hver uke holder et kort foredrag om en nyhetssak knyttet til biologi.", "Sett opp en ansvarsliste med dato og navn, gi hvert foredrag to–tre minutter og krev at eleven oppgir minst én kilde og forklarer hvilket fagfelt saken hører til (for eksempel økologi, genetikk eller mikrobiologi)."]
  ],
  labs: [
    {
      title: "Ø 1.1 Lysmikroskopet",
      aim: "Bli kjent med lysmikroskopet og regne ut forstørrelse.",
      equipment: ["Lysmikroskop", "Millimeterpapir", "Pipette med vann", "Objektglass og dekkglass", "Noe å se på (løkceller, hårstrå, kinnceller)"],
      steps: [
        "Se på en bit millimeterpapir ved alle forstørrelser, og tegn det du ser.",
        "Lag et preparat: legg objektet på objektglasset, tilsett en dråpe vann og legg på dekkglass.",
        "Start alltid med minste forstørrelse. Bruk grovskrue først, deretter finskrue.",
        "Reguler lysmengden med blenderen og se hvordan lyset framhever ulike strukturer.",
        "Tørker preparatet ut, legger du en vanndråpe i kanten av dekkglasset – kohesjon suger vannet inn."
      ],
      questions: [
        ["Hvordan regner vi ut den totale forstørrelsen?", "Okularforstørrelsen ganges med objektivforstørrelsen. Med 10× okular gir objektivene 5×, 10× og 40× henholdsvis 50×, 100× og 400× forstørrelse."],
        ["Hvorfor skal du alltid begynne med minste forstørrelse?", "Da har du størst synsfelt og finner objektet lettest. Samtidig er avstanden til preparatet størst, slik at du ikke knuser dekkglasset med objektivet."],
        ["Hvorfor må forstørrelsen skrives på tegningen?", "Uten forstørrelsen kan ikke størrelsen på det du har sett, sammenliknes med andre observasjoner."]
      ]
    },
    {
      title: "Ø 1.2 Stereolupen",
      aim: "Lære forskjellen på stereolupe og mikroskop, og bruke over- og underlys.",
      equipment: ["Stereolupe", "Petriskål eller urglass", "Små hele organismer eller plantedeler"],
      steps: [
        "Lag en skisse av stereolupen og sett navn på delene.",
        "Velg et preparat og studer det først med overlys. Tegn eller fotografer.",
        "Gjør det samme med underlys og sammenlikn."
      ],
      questions: [
        ["Hva er fordelen med overlys?", "Overlys viser overflaten på objektet – farge, hår, struktur – og passer til hele, tykke objekter."],
        ["Hva er fordelen med underlys?", "Underlys lyser gjennom objektet og viser indre deler og konturer i tynne, gjennomskinnelige preparater."],
        ["Hvorfor bør levende dyr bare studeres i korte perioder?", "Lampelyset varmer opp objektet. Vannet fordamper, plantedeler visner og levende dyr dør."]
      ]
    },
    {
      title: "Ø 1.3 Dafnier – hypotesetesting",
      aim: "Dyrke dafnier (vannlopper) og teste hypoteser om hvordan abiotiske faktorer påvirker dem.",
      equipment: ["Store glass med lokk eller akvarier", "Vann og bunnmateriale fra et ferskvann", "Vannhåv", "Tørrgjær", "Lysmikroskop"],
      steps: [
        "Fyll akvariene med vann og litt bunnmateriale fra stedet dafniene hentes.",
        "Samle dafnier med håv i mai–juni eller august–september, ofte nær bunnen.",
        "Sett akvariene utenfor direkte sollys og gi et lite dryss tørrgjær omtrent én gang i uka.",
        "Tell antall dafnier jevnlig og lag en vekstkurve.",
        "Studer enkeltdyr i mikroskop og finn føtter, antenner og rugehule."
      ],
      questions: [
        ["Hvorfor blir dafnier røde?", "I vann med mye dødt organisk materiale bruker nedbryterne opp oksygenet. Da produserer dafniene hemoglobin, som binder oksygen, og de blir røde. Røde dafnier i akvariet kan tyde på overforing."],
        ["Hvorfor blir spydet på bakkroppen lengre?", "Føler dafnien seg truet, for eksempel av fisk i vannet, utvikler den et lengre og spissere spyd som forsvar. Det er en tilpasning som utløses av signalstoffer fra predatoren."],
        ["Forklar generasjonsvekslingen hos dafnier.", "Om våren formerer hunnene seg ved jomfrufødsel (partenogenese) og føder levende unger fra ubefruktede, diploide egg. Når maten avtar og dagene blir kortere, fødes haploide hunner og hanner som parer seg. De befruktede hvileeggene synker til bunns og klekkes neste vår."]
      ]
    }
  ],
  quiz: [
    ["Hva betyr ordet biologi?", ["Læren om jorda", "Læren om livet", "Læren om arter", "Læren om celler"], 1, "Bios betyr liv og logos betyr lære."],
    ["Hva kjennetegner den hypotetisk-deduktive metoden?", ["Kartlegging uten hypotese", "Systematisk testing av hypoteser", "Bare datasimulering", "Bare feltobservasjon"], 1, "Metoden går ut på at en hypotese testes systematisk og blir bekreftet eller avkreftet."],
    ["Hva er en teori i naturvitenskapen?", ["En udokumentert gjetning", "En hypotese som ingen har testet", "Hypoteser testet mange ganger i uavhengige forsøk", "Et forslag til et forsøk"], 2, "En teori har bred støtte i fagfeltet etter gjentatt, uavhengig testing."],
    ["Hvilken rekkefølge er riktig i det biologiske hierarkiet?", ["Celle – vev – organ – individ", "Individ – celle – organ – vev", "Organ – celle – vev – individ", "Vev – individ – celle – organ"], 0, "Hierarkiet går fra celle til vev til organ til organsystem og individ."],
    ["Hvorfor regnes ikke virus som levende?", ["De har ikke DNA", "De kan ikke formere seg uten en vertscelle", "De er for små", "De mangler proteiner"], 1, "Virus har verken eget stoffskifte eller celleoppbygning og trenger en vertscelle."],
    ["Hva er homeostase?", ["Et tilnærmet konstant indre miljø", "Nedbrytning av glukose", "Kopiering av DNA", "Utskilling av avfall"], 0, "Reguleringsmekanismer holder blant annet temperatur, pH og væskebalanse stabil."],
    ["Hvem innførte tonavnsystemet Slekt art?", ["Aristoteles", "Darwin", "Linné", "Mendel"], 2, "Carl von Linné innførte den binominale navnsettingen på 1700-tallet."],
    ["Hva er forskjellen på biotop og økosystem?", ["Ingen, det er samme ting", "Biotopen er større enn økosystemet", "Økosystemet er større og inneholder flere biotoper", "Biotopen har bare abiotiske faktorer"], 2, "Barskogen på Østlandet er et økosystem; granskogen der ekornet lever, er en biotop."],
    ["Hvilken metode brukte Darwin da han utviklet evolusjonsteorien?", ["Induksjon", "Kun deduksjon", "Datasimulering", "Kontrollerte laboratorieforsøk"], 0, "Han samlet et stort antall observasjoner og trakk en generell slutning av dem."],
    ["Hva er en feilkilde?", ["Et resultat som bekrefter hypotesen", "En ukontrollert faktor som gjør resultatet usikkert", "En type kontrollgruppe", "En statistisk modell"], 1, "Feilkilder må vurderes og begrenses, og de skal drøftes i rapporten."]
  ]
};
