export default {
  n: 3,
  slug: "celler",
  part: 2,
  title: "Celler",
  lead: "Prokaryote og eukaryote celler, bakterier og arker, organellene i eukaryote celler og endosymbioseteorien.",
  goals: [
    "utforske sammenhenger mellom cellestrukturer og funksjoner og gjøre greie for hvordan cellulære membraner danner grunnlag for kommunikasjon mellom celler"
  ],
  sections: [
    {
      num: "3.1",
      title: "Prokaryote og eukaryote organismer",
      blocks: [
        ["p", "Cellen er livets minste byggestein. Bakterier består av én celle, mens et menneske er bygd opp av nesten 40 000 milliarder celler. Begge celletypene har DNA, cellemembran og evne til å ta opp næring og forbrenne den."],
        ["p", "**Prokaryote** celler oppstod først i evolusjonen. De har ingen membran rundt arvestoffet, altså ingen cellekjerne, og DNA-et flyter fritt i cellen. Bakterier og arker er prokaryote. **Eukaryote** celler har en cellekjerne med kjernemembran rundt DNA-et. Protister, sopper, planter og dyr er eukaryote."],
        ["fig", "celler", "Prokaryot celle med fritt sirkulært DNA, og eukaryot celle med cellekjerne, mitokondrier og golgiapparat."],
        ["p", "Eukaryote celler er mye større enn prokaryote og har flere indre strukturer. Vi måler organeller og molekyler i mikrometer og nanometer: 1 µm = 10⁻⁶ meter og 1 nm = 10⁻⁹ meter."],
        ["key", "Prokaryote organismer har celler uten cellekjerne. Eukaryote organismer har celler med cellekjerne."]
      ]
    },
    {
      num: "3.2",
      title: "Prokaryote celler",
      blocks: [
        ["p", "Prokaryoter finnes overalt på jorda og kan leve i nesten alle miljøer med fuktighet. Tørker miljøet ut, kan de gå inn i et **sporestadium** som overlever uten fukt. De er små, men så tallrike at de samlet utgjør minst like stor biomasse som eukaryotene."],
        ["table",
          ["Struktur", "Funksjon"],
          [
            ["DNA", "Cellens arvestoff; oppskrift for RNA-produksjon og proteinsyntese"],
            ["Plasmid (bare bakterier)", "Små ringformede DNA-biter med ekstra egenskaper, for eksempel antibiotikaresistensgener"],
            ["Ribosomer", "Produksjonssted for polypeptider (proteinsyntese)"],
            ["Cytoplasma", "Hele området innenfor cellemembranen med cytosol, ribosomer, DNA, ioner og molekyler"],
            ["Klorofyll (blågrønnbakterier)", "Binder lysenergi som kjemisk energi"],
            ["Cellemembran", "Omgir cellen, kontrollerer transport inn og ut, sender og mottar signaler"],
            ["Cellevegg", "Gir støtte og beskyttelse, hindrer at cellen sprekker av vannopptak"],
            ["Flageller eller cilier", "Utbuktninger som gir bevegelse"]
          ]
        ],
        ["p", "Prokaryote celler har ingen organeller for fotosyntese, celleånding eller transport. Enzymene flyter derfor fritt i cytoplasmaet eller er festet til innsiden av cellemembranen."],
        ["key", "Prokaryote celler har ribosomer, men verken kloroplaster eller mitokondrier."]
      ]
    },
    {
      num: "3.3",
      title: "Bakterier",
      blocks: [
        ["p", "I økosystemene er bakteriene produsenter, konsumenter og nedbrytere. De bryter ned døde organismer slik at grunnstoffene resirkuleres, og enkelte arter **fikserer nitrogen** fra lufta og gjør det tilgjengelig for planter."],
        ["p", "Bakterier er encellede, typisk 0,5–5 µm. De har tre hovedformer: spiralformede **spiriller**, kuleformede **kokker** og avlange **staver** (basiller)."],
        ["compare", [
          ["Autotrofe bakterier", [
            "Produsenter som lager organiske forbindelser av uorganiske",
            "**Fotoautotrofe**: blågrønnbakterier med fotosyntese",
            "**Kjemoautotrofe**: bruker uorganiske forbindelser som energikilde, for eksempel nitrogen- og svovelforbindelser"
          ]],
          ["Heterotrofe bakterier", [
            "Konsumenter eller nedbrytere",
            "Må ta opp organiske molekyler",
            "Tarmbakterien *Escherichia coli* og alle sykdomsframkallende bakterier"
          ]]
        ]],
        ["p", "Celleveggen består av karbohydrater og aminosyrer og hindrer at cellen sprekker når vann diffunderer inn. Mange bakterier har en **flagell** som gjør at de kan svømme; en bakterie på 1 µm kan svømme 30 µm i sekundet – 30 ganger sin egen lengde."],
        ["p", "Bakterier har ett sirkulært DNA-molekyl som ligger løst i cytoplasmaet, i tillegg til **plasmider**. Gener for antibiotikaresistens ligger ofte i plasmidene, og de kan overføres mellom bakterier."],
        ["note", "Bakterier i og på oss", [
          "I mennesketarmen finnes det 100 milliarder bakterier per gram avføring. Til sammen har vi 2–3 kilo bakterier i kroppen, og de fleste er ufarlige eller nødvendige.",
          "Vi bruker bakterier til å produsere medisin: setter vi inn genet for insulin i et plasmid, kan bakteriene lage insulin som renses og brukes av personer med diabetes."
        ]],
        ["key", "Bakterier er encellede prokaryoter med ribosomer, ett sirkulært DNA-molekyl og plasmider. De kan være autotrofe eller heterotrofe."]
      ]
    },
    {
      num: "3.4",
      title: "Arker",
      blocks: [
        ["p", "Arker mangler også cellekjerne, men har flere fellestrekk med eukaryote celler. Ribosomene likner eukaryotenes, og små proteiner pakker DNA-et tett sammen slik histoner gjør hos eukaryoter. Celleveggen inneholder andre kjemiske forbindelser enn bakterienes."],
        ["p", "Antibiotika virker på bakterier, men arker tåler det. Det er uproblematisk, for ingen kjente arker er sykdomsframkallende eller giftige."],
        ["p", "Arker ble først funnet i ekstreme miljøer: varme kilder over 100 °C der de omdanner hydrogensulfid til svovelsyre, og Dødehavet med 34 % saltkonsentrasjon. De må derfor ha mekanismer som hindrer at vann går ut ved osmose. Arker er også blant de mest tallrike organismene i havet og spiller en viktig rolle i karbon- og nitrogensyklusen."],
        ["note", "Klippfisk og arker", [
          "En art arker ble funnet på tørket, saltet klippfisk. Saltelskende arker følger med havsaltet, og under lang transport til Spania og Portugal vokste de og ga fisken et rødt, ufyselig belegg.",
          "Da mikrobiologer fant årsaken, ble fisken eksportert kaldt, og svinnet ble mye mindre."
        ]],
        ["note", "Hvor oppstod livet?", [
          "Ved å sammenlikne millioner av gener fra arker og bakterier har forskere kommet fram til en organisme som levde for 3,8–3,5 milliarder år siden: **Luca** (Last Universal Common Ancestor).",
          "Luca levde trolig på havbunnen nær undersjøiske vulkaner, og har genetiske fellestrekk med arker som lever ved ekstremt høye temperaturer og bruker hydrogen som energikilde."
        ]],
        ["key", "Arker finnes overalt, også i ekstreme miljøer. Ingen av dem er sykdomsframkallende."]
      ]
    },
    {
      num: "3.5",
      title: "Eukaryote celler og organellene",
      blocks: [
        ["p", "Eukaryote celler består i grove trekk av tre hoveddeler: **cellemembranen**, **cellekjernen** og **cytoplasmaet**. Cytoplasmaet består av cellevæsken cytosol – opptil nitti prosent vann – og alle organellene."],
        ["p", "En **organell** er en struktur omgitt av én eller flere membraner. Hver organell har sitt eget sett enzymer, slik at reaksjoner i én organell ikke forstyrrer reaksjonene i en annen. **Enzymer** er katalysatorer som får reaksjoner til å gå raskere ved lav temperatur."],
        ["table",
          ["Struktur", "Funksjon"],
          [
            ["Cellemembranen", "Omgir cellen, kontrollerer transport inn og ut, sender og mottar kjemiske signaler"],
            ["Cellekjernen", "Kontrollsenter; dobbel kjernemembran beskytter DNA-et, sørger for DNA-kopiering og RNA-produksjon"],
            ["Ribosomer", "Produksjonssted for polypeptider"],
            ["Mitokondrier", "Cellens energiverk; spalter næringsstoffer og danner ATP i celleåndingen"],
            ["Cytoskjelettet", "Stiver opp cellen, holder organellene på plass, transportvei, viktig ved celledeling"],
            ["Endoplasmatisk nettverk (ER)", "Produserer proteiner, enzymer og fett, danner transportblærer, bryter ned giftstoffer"],
            ["Golgiapparatet", "Sorterer, merker og videresender proteiner og lipider"],
            ["Peroksisomer", "Bryter ned fettsyrer; danner hydrogenperoksid som katalase bryter ned"],
            ["Lysosomer", "Bryter ned næringsstoffer, ødelagte organeller og mikroorganismer; deltar i programmert celledød"],
            ["Vakuoler (planteceller)", "Lagrer stoffer, regulerer cellevolum og vannbalanse, gir turgortrykk"],
            ["Kloroplaster (planteceller)", "Binder lysenergi som kjemisk energi i fotosyntesen"],
            ["Celleveggen (planter, sopper, noen protister)", "Gir støtte og beskyttelse, hindrer for stort vannopptak"]
          ]
        ],
        ["h", "Cellekjernen"],
        ["p", "Kjernen inneholder DNA pakket rundt proteiner i **kromosomer**. Kroppscellene våre er **diploide** med parvise kromosomer, kjønnscellene er **haploide**. Når informasjonen trengs, lages RNA-kopier av gener – **transkripsjon**. RNA finnes som rRNA, tRNA og mRNA. DNA-molekylene er for store til å slippe ut gjennom kjernemembranen, mens RNA slipper ut til cytoplasmaet."],
        ["h", "Mitokondriene"],
        ["p", "Mitokondriene har dobbel membran der den indre er sterkt foldet, noe som gir stor overflate for ATP-produksjon. Her spaltes karbohydrater, fett og proteiner i celleåndingen, og energien lagres som **ATP**. Muskelceller kan ha opptil 10 000 mitokondrier, leverceller rundt 2500. Mitokondriene har sitt eget DNA."],
        ["h", "Endomembransystemet"],
        ["steps", [
          ["Ru ER", "Membraner dekket av ribosomer. Polypeptider sendes inn og foldes til proteiner."],
          ["Glatt ER", "Produserer fettsyrer, fosfolipider og hormoner, og bryter ned legemidler og giftstoffer, særlig i leverceller."],
          ["Transportblærer", "Avsnøres fra ER og frakter stoffer videre på cytoskjelettets transportveier."],
          ["Golgiapparatet", "Endrer, pakker og merker molekylene med karbohydrat-«adresselapper» og sender dem videre."],
          ["Lysosomer", "Blærer med rundt femti enzymer som bryter ned store molekyler ved pH rundt 5."]
        ]],
        ["h", "Cellevegg, vakuoler og kloroplaster"],
        ["p", "Celleveggen hos planter består av mye **cellulose**, forsterket av **lignin**. Sammenlikner vi celleveggen med en mur, er ligninet betongen og cellulosen armeringen. **Vakuolene** gir turgortrykk – trykket kan være opptil åtte ganger høyere enn i et bildekk – og lagrer fargestoffer, giftstoffer og avfall. **Kloroplastene** har doble membraner, væskerommet stroma og tylakoider der klorofyllet sitter."],
        ["key", "Eukaryote celler har cellekjerne og en rekke membrandekte organeller der ulike biokjemiske prosesser foregår atskilt fra hverandre."]
      ]
    },
    {
      num: "3.6",
      title: "Fra prokaryot til eukaryot celle",
      blocks: [
        ["p", "Fossilfunn tyder på at eukaryote organismer oppstod fra prokaryote celler for mer enn to milliarder år siden. Utviklingen kan ha skjedd ved at cellemembranen foldet seg innover, la seg rundt det frie DNA-et og dannet en dobbel kjernemembran. Andre deler av membranen dannet blærer som ble til organeller."],
        ["p", "**Endosymbioseteorien** forklarer hvordan noen organeller stammer fra prokaryote celler. Teorien ble lagt fram uavhengig av den norske forskeren Jostein Goksøyr og amerikanske Lynn Margulis i 1967. En eukaryot celle tok opp en levende blågrønnbakterie ved endocytose. I stedet for å bli brutt ned fikk bakterien leve videre i symbiose og drive fotosyntese – den ble en endosymbiont og senere en kloroplast. Andre energiproduserende prokaryoter ble til mitokondrier."],
        ["list", [
          "Både kloroplaster og mitokondrier har **dobbel membran**: den indre fra den prokaryote organismen, den ytre fra den eukaryote cellen.",
          "Begge har **eget DNA** og egne **ribosomer** som likner prokaryotenes.",
          "De styrer til en viss grad sin egen mangfoldiggjøring, men er avhengige av cellen for flere proteiner."
        ]],
        ["key", "Endosymbioseteorien forklarer hvordan kloroplaster og mitokondrier ble dannet ved at eukaryote celler tok opp bakterier."]
      ]
    }
  ],
  terms: [
    ["Prokaryot celle", "Celle uten cellekjerne og uten membrandekte organeller."],
    ["Eukaryot celle", "Celle med cellekjerne omgitt av dobbel kjernemembran og med mange organeller."],
    ["Cytoplasma", "Hele området innenfor cellemembranen, utenom cellekjernen."],
    ["Cytosol", "Cellevæsken i cytoplasmaet, opptil 90 % vann."],
    ["Organell", "Struktur i cytoplasmaet omgitt av én eller flere membraner, med egen funksjon."],
    ["Enzym", "Protein som virker som katalysator og får kjemiske reaksjoner til å gå raskere ved lav temperatur."],
    ["Plasmid", "Lite, ringformet DNA-molekyl hos bakterier, ofte med gener for antibiotikaresistens."],
    ["Flagell", "Lang utbuktning fra celleoverflaten som gir bevegelse."],
    ["Cilier", "Korte, hårliknende utbuktninger som gir bevegelse eller flytter væske over overflaten."],
    ["Kromosom", "DNA-molekyl pakket rundt proteiner."],
    ["Diploid", "Celle med parvise kromosomer (2n), som kroppscellene våre."],
    ["Haploid", "Celle med enkeltkromosomer (n), som kjønnscellene."],
    ["Transkripsjon", "Kopiering av et gen fra DNA til RNA."],
    ["mRNA", "Budbringer-RNA; kopien av ett gen som brukes som oppskrift i proteinsyntesen."],
    ["Ribosom", "Struktur av rRNA og proteiner der aminosyrer kobles sammen til polypeptider."],
    ["Mitokondrie", "Organell med dobbel membran der celleåndingen foregår og ATP dannes."],
    ["ATP", "Adenosintrifosfat, cellens viktigste energibærer."],
    ["Cytoskjelett", "Nettverk av proteinfibrer som stiver opp cellen, holder organellene på plass og fungerer som transportvei."],
    ["Endomembransystemet", "Kjernemembran, ER, golgiapparat, lysosomer, vakuoler og cellemembran som samarbeider om transport."],
    ["Endoplasmatisk nettverk (ER)", "Membransystem der stoffer lages, fraktes og lagres. Ru ER har ribosomer, glatt ER har ikke."],
    ["Golgiapparatet", "Stabler av blærer som sorterer, omdanner og merker proteiner og lipider."],
    ["Lysosom", "Blære med om lag femti nedbrytende enzymer som virker best ved pH rundt 5."],
    ["Autofagi", "Cellens «selvspising», der ødelagte deler brytes ned og gjenvinnes."],
    ["Peroksisom", "Organell som bryter ned fettsyrer og danner hydrogenperoksid, som katalase spalter."],
    ["Vakuole", "Stort væskefylt cellesaftrom i planteceller som gir turgortrykk og lagrer stoffer."],
    ["Turgortrykk", "Det indre vanntrykket i en plantecelle som holder planten saftspent."],
    ["Kloroplast", "Organell med klorofyll der fotosyntesen foregår."],
    ["Lignin", "Kompleks forbindelse som forsterker celleveggen og gjør at planten tåler trykk."],
    ["Endosymbiose", "At en organisme lever inni en annen i et symbioseforhold."],
    ["Endosymbioseteorien", "Teorien om at mitokondrier og kloroplaster stammer fra opptatte prokaryote celler."]
  ],
  rep: [
    ["Hvilke seks riker deler vi alle organismer inn i?", "Bakterier, arker, protister, sopper, planter og dyr."],
    ["Hva er forskjellene på prokaryoter og eukaryoter?", "Prokaryoter mangler cellekjerne og membrandekte organeller; DNA-et ligger fritt. Eukaryoter har cellekjerne med dobbel kjernemembran, mange organeller og betydelig større celler."],
    ["Hvor mange µm og nm er det i en millimeter?", "1 mm = 1000 µm = 1 000 000 nm."],
    ["Hvor finnes de prokaryote organismene?", "Overalt der det finnes fuktighet: i jord, vann, luft, på og i andre organismer, i varme kilder, saltsjøer og dypt nede i fjell."],
    ["Hvorfor plasserer vi bakterier og arker i to ulike riker?", "Fordi forskjellene mellom dem er svært store. De har i stor grad uavhengig evolusjonshistorie, ulik cellevegg og cellemembran, og arkene likner eukaryotene i proteinsyntese og DNA-kopiering."],
    ["Hvordan kan bakterier overleve tørke?", "De går inn i et sporestadium med en tykk beskyttende vegg som tåler uttørking, og kvikner til når det igjen blir fuktig."],
    ["Hvilke typer bakterier driver fotosyntese?", "Fotoautotrofe bakterier, det vil si blågrønnbakterier (cyanobakterier)."],
    ["Hva slags symbioseform er det mellom oss og tarmbakteriene?", "Mutualisme – begge parter har nytte av samlivet."],
    ["Hva slags art bakterier lever i tarmene våre?", "Blant mange andre *Escherichia coli* (E. coli), som er viktig i fordøyelsessystemet."],
    ["Har arker cellekjerne?", "Nei. Arker er prokaryote og mangler cellekjerne, men DNA-et er pakket tett sammen av små proteiner som likner eukaryotenes."],
    ["Bruker vi antibiotika for å drepe arker?", "Nei. Arker tåler antibiotika, og det er ikke noe problem, siden ingen kjente arker er sykdomsframkallende."],
    ["Gi noen eksempler på hvor vi kan finne arker.", "I varme svovelkilder over 100 °C, i saltsjøer som Dødehavet, i oksygenfritt bunnvann, i tarmsystemer, dypt nede i fjell og jord, og i store mengder i havet."],
    ["Forklar forskjellene på cytoplasma og cytosol.", "Cytoplasma er hele området mellom cellemembranen og cellekjernen, inkludert organellene. Cytosol er selve cellevæsken i cytoplasmaet."],
    ["Hva er et enzym?", "Et protein som virker som katalysator: det får en bestemt kjemisk reaksjon til å gå raskere uten at det trengs høy temperatur eller mye energi."],
    ["Hvilke av organellene er omgitt av en dobbel membran?", "Cellekjernen, mitokondriene og kloroplastene."],
    ["Hva foregår i mitokondriene?", "Aerob celleånding: organiske molekyler fra maten spaltes ved hjelp av oksygen, og energien lagres som ATP. Det dannes karbondioksid og vann."],
    ["Hva foregår i kloroplastene?", "Fotosyntesen: lysenergi bindes som kjemisk energi, og vann og karbondioksid blir til glukose og oksygen."],
    ["Forklar hvilke organeller og prosesser som bindes sammen i endomembransystemet.", "Kjernemembranen, det endoplasmatiske nettverket, golgiapparatet, lysosomer, vakuoler og cellemembranen. Proteiner lages på ru ER, fraktes i blærer til golgiapparatet der de merkes og sorteres, og sendes videre til andre organeller eller ut av cellen."],
    ["Hva inneholder en vakuole?", "Cellesaft med vann, lagrede stoffer, fargestoffer, giftstoffer og avfallsprodukter fra stoffskiftet."],
    ["Hvordan forklarer endosymbioseteorien at kloroplaster og mitokondrier har dobbel membran?", "Den indre membranen stammer fra den prokaryote organismen som ble tatt opp, og den ytre fra cellemembranen til den eukaryote cellen som omsluttet den ved endocytose."]
  ],
  tasks: [
    ["3.1", "Forklar forskjellene og likhetene i bygningstrekk for eukaryote og prokaryote organismer.", "Likheter: begge har cellemembran, DNA, ribosomer og cytoplasma, og begge kan ta opp næring og forbrenne den. Forskjeller: eukaryoter har cellekjerne med dobbel kjernemembran, membrandekte organeller (mitokondrier, ER, golgi, eventuelt kloroplaster), lineære kromosomer og større celler. Prokaryoter har fritt sirkulært DNA, plasmider, ingen organeller med membran og enzymer festet til cellemembranen eller fritt i cytoplasmaet."],
    ["3.2", "Beskriv prokaryotenes arvestoff.", "Ett sirkulært DNA-molekyl som ligger løst i cytoplasmaet eller er delvis festet til cellemembranen. I tillegg har bakterier plasmider – små ringformede DNA-biter med ekstra gener, for eksempel antibiotikaresistens."],
    ["3.3", "Hvilke cellestrukturer har prokaryotene i cytoplasmaet?", "DNA, plasmider, ribosomer, ioner og molekyler i cytosol, og hos blågrønnbakterier klorofyll festet til cellemembranen. De har ingen membrandekte organeller."],
    ["3.4", "Hvorfor er bakteriene viktige i naturen, og hvordan er de til nytte og skade for oss?", "De er nedbrytere som resirkulerer grunnstoffene, produsenter gjennom fotosyntese, og noen fikserer nitrogen fra lufta. Nytte: fordøyelse, matproduksjon (ost, yoghurt), medisinproduksjon (insulin), nedbryting av oljesøl og antibiotikaproduksjon. Skade: sykdomsframkallende arter gir infeksjoner som lungebetennelse, sårinfeksjoner og matforgiftning."],
    ["3.5", "Lag en tegning av en bakterie og sett navn på delene. Hva er et plasmid?", "Tegningen skal ha cellevegg, cellemembran, cytoplasma, ribosomer, sirkulært DNA, plasmider og eventuelt flagell og cilier. Et plasmid er et lite ringformet DNA-molekyl som ikke er nødvendig for at bakterien skal leve, men som kan gi ekstra egenskaper som resistens eller sykdomsframkallende evne."],
    ["3.6", "Finn ut hvordan man setter nye gener inn i arvestoffet hos en bakterie.", "Man klipper ut ønsket gen med restriksjonsenzymer, setter det inn i et plasmid som er klippet opp med samme enzym, og limer sammen med ligase. Plasmidet føres inn i bakterien ved transformasjon. Bakteriene dyrkes opp, og produktet – for eksempel insulin eller veksthormon – renses ut."],
    ["3.7", "Hvordan beveger mange bakterier seg, og hvorfor har de utviklet denne evnen?", "Med flageller som roterer, eller med cilier som dekker overflaten. Bevegelse gjør at de kan søke mot næring og bort fra skadelige stoffer, noe som gir bedre overlevelse og dermed er selektert fram."],
    ["3.8", "Blågrønnbakterier har fotosyntese uten kloroplaster. Hvordan er det mulig?", "Klorofyllet og enzymene for fotosyntese ligger festet til cellemembranen eller til indre membranfolder i cytoplasmaet. Det er nettopp slike bakterier som ifølge endosymbioseteorien ble til kloroplaster i eukaryote celler."],
    ["3.9", "Velg en bakterieart og finn ut mest mulig om den.", "Bygg presentasjonen slik: systematisk plassering (rike, rekke, slekt, art), form (kokk, stav eller spirill), levevis (autotrof eller heterotrof), levested, betydning i naturen, eventuell sykdom den gir, smittevei og behandling. Eksempel: *Borrelia burgdorferi*, rekke Spirochaetes, overføres av flått og gir borreliose, behandles med antibiotika."],
    ["3.10", "Hvorfor har E. coli gjort mange syke? Finn ut mer om Salmonella og om gammabestråling av mat.", "Vanlig E. coli er en normal tarmbakterie, men enkelte varianter, blant annet fra drøvtyggere, produserer giftstoffer som gir alvorlig diaré og nyresvikt. Smitten kommer via kjøttprodukter, forurenset vann, dårlig vaskede grønnsaker og kontakt med dyremøkk. Salmonella er en slekt tarmbakterier som særlig forbindes med fjørfe og egg, og gir mage- og tarminfeksjon. I Norge er bestråling av matvarer tillatt bare etter særskilt godkjenning fra Mattilsynet og for et fåtall produkter; bestrålt mat skal merkes."],
    ["3.11", "Hvilke likhetstrekk er det mellom arker og eukaryote organismer?", "Proteinsyntesen og DNA-kopieringen foregår på liknende måte, ribosomene likner eukaryotenes mer enn bakterienes, og arker har små proteiner som pakker DNA-et slik histoner gjør hos eukaryoter."],
    ["3.12", "Finn ut mer om Luca.", "Luca (Last Universal Common Ancestor) er den siste felles stamfaren til alt liv, og levde trolig for 3,8–3,5 milliarder år siden. Forskerne fant den ved å sammenlikne gener hos arker og bakterier og lete etter gener med felles opphav. Luca levde sannsynligvis nær undersjøiske vulkaner, brukte hydrogen som energikilde og tålte høye temperaturer."],
    ["3.13", "Human Cell Atlas – hva går prosjektet ut på?", "Et verdensomspennende prosjekt som skal klassifisere alle celletypene i menneskekroppen. Forskerne bruker sekvenseringsteknologi til å se hvilke gener som er i bruk og hvilke RNA-er som uttrykkes i enkeltceller, og har funnet nye celletyper i blant annet hjernen, tarmen, netthinnen og immunsystemet."],
    ["3.14", "Hvilke fordeler gir kjernemembranen? Hvordan overføres informasjonen i DNA til cytoplasmaet, og hvilke tre former for RNA finnes?", "Kjernemembranen beskytter DNA-et mot de kjemiske prosessene i cytoplasmaet og gjør at transporten inn og ut kan kontrolleres gjennom porene. Det gir mulighet for mer finregulert genuttrykk, noe som var en forutsetning for større og mer spesialiserte celler. Informasjonen kopieres ved transkripsjon til mRNA, som slipper ut av kjernen og leses av på ribosomene. De tre RNA-formene er mRNA, tRNA og rRNA."],
    ["3.15", "Progeria – finn ut mer om sykdommen.", "Hutchinson-Gilford progeria-syndrom skyldes en mutasjon i LMNA-genet, som koder for lamin A. Det dannes en defekt variant, progerin, som hoper seg opp og gjør kjernemembranen ustabil. Barna eldes omtrent ti ganger raskere enn normalt, får hårtap, hudendringer og skjelettforandringer fra toårsalderen, og de fleste lever til midten av tenårene. Rundt hundre barn i verden har sykdommen, og det finnes ingen kur."],
    ["3.16", "Hvorfor er det opptil ti tusen mitokondrier i cellene som fester fluevingene til kroppen?", "Vingemusklene arbeider ekstremt raskt og krever store mengder ATP kontinuerlig. Mange mitokondrier gir stor samlet indre membranoverflate og dermed høy ATP-produksjon."],
    ["3.17", "Hvordan er et cytoskjelett bygd opp? Hva er flageller og cilier?", "Cytoskjelettet er et nettverk av flere typer proteinfibrer som går på kryss og tvers i cellen. De tre hovedfunksjonene er å stive opp cellen, holde organellene på plass og fungere som transportveier – i tillegg deltar det i celledelingen. Flageller er lange utbuktninger som gir bevegelse, for eksempel halen på en sædcelle. Cilier er korte hår som beveger væske over overflaten, for eksempel slim i luftveiene."],
    ["3.18", "Hvilke organeller består endomembransystemet av, og hva foregår der?", "Kjernemembranen, endoplasmatisk nettverk, golgiapparatet, lysosomer, vakuoler og cellemembranen. Proteiner lages på ru ER og foldes, glatt ER lager fett og bryter ned giftstoffer, transportblærer frakter stoffene til golgiapparatet der de omdannes, merkes og sorteres, og nye blærer sendes til andre organeller eller tømmes ut av cellen ved eksocytose."],
    ["3.19", "Hvilke bevis har vi for at kloroplaster og mitokondrier en gang var egne celler?", "De har dobbel membran, sitt eget sirkulære DNA og egne ribosomer som likner prokaryotenes i størrelse og oppbygning. De deler seg omtrent som bakterier, og ribosomanalyser viser slektskap med prokaryoter."]
  ],
  labs: [
    {
      title: "Ø 3.1 Celler i mikroskop",
      aim: "Sammenlikne plantecelle og dyrecelle i lysmikroskop.",
      equipment: ["Lysmikroskop", "Løk", "Tannpirker", "Objektglass og dekkglass", "Pipette med vann"],
      steps: [
        "Flå av en tynn hinne fra innsiden av et løkskjell og lag et preparat med vann.",
        "Skrap forsiktig innsiden av kinnet med en tannpirker og lag et preparat av hudcellene.",
        "Sammenlikn de to preparatene ved samme forstørrelse og tegn begge."
      ],
      questions: [
        ["Hvilke strukturer ser du i løkcellen som ikke finnes i kinncellen?", "Cellevegg og vakuole. Med litt farging ser du også cellekjernen tydeligere. Løkceller fra selve løkskjellet har ikke kloroplaster, siden de vokser i mørket."],
        ["Hvorfor har plantecellen rett form, mens dyrecellen er uregelmessig?", "Den stive celleveggen av cellulose gir plantecellen fast form. Dyreceller har bare cellemembran og holdes i fasong av cytoskjelettet."]
      ]
    }
  ],
  quiz: [
    ["Hva mangler en prokaryot celle?", ["Ribosomer", "Cellemembran", "Cellekjerne", "DNA"], 2, "DNA-et ligger fritt i cytoplasmaet."],
    ["Hvor foregår celleåndingen i en eukaryot celle?", ["I kloroplasten", "I mitokondriet", "I golgiapparatet", "I lysosomet"], 1, "Den indre foldede membranen gir stor overflate for ATP-produksjon."],
    ["Hva er et plasmid?", ["Et lite ringformet DNA-molekyl", "En type ribosom", "En organell med membran", "En proteinfiber"], 0, "Plasmider bærer ofte gener for antibiotikaresistens."],
    ["Hvilken organell merker og sorterer proteiner?", ["Lysosom", "Golgiapparatet", "Peroksisom", "Vakuole"], 1, "Karbohydrater festes som adresselapper på proteinene."],
    ["Hva er hovedstoffet i celleveggen hos planter?", ["Kitin", "Cellulose", "Peptidoglykan", "Fosfolipider"], 1, "Lignin forsterker veggen i tillegg."],
    ["Hvilke organeller har eget DNA?", ["Golgiapparatet og ER", "Lysosomer og peroksisomer", "Mitokondrier og kloroplaster", "Vakuoler og ribosomer"], 2, "Det er et av hovedargumentene for endosymbioseteorien."],
    ["Hva sier endosymbioseteorien?", ["At celler deler seg ved mitose", "At organeller stammer fra opptatte prokaryote celler", "At virus ble til bakterier", "At cellekjernen oppstod fra et virus"], 1, "Blågrønnbakterier ble kloroplaster, andre prokaryoter ble mitokondrier."],
    ["Hva gjør lysosomene?", ["Lager proteiner", "Bryter ned store molekyler og ødelagte organeller", "Binder lysenergi", "Transporterer oksygen"], 1, "Enzymene virker best ved pH rundt 5."],
    ["Hva gir turgortrykk i en plantecelle?", ["Kloroplastene", "Vakuolen", "Mitokondriene", "Cytoskjelettet"], 1, "Trykket kan være mange ganger høyere enn i et bildekk."],
    ["Hvorfor virker ikke antibiotika på arker?", ["De har ingen cellevegg", "De er for små", "De har annen bygning enn bakterier", "De lever bare i havet"], 2, "Arker har blant annet annen cellevegg og cellemembran enn bakterier."],
    ["Hva er autofagi?", ["Cellens nedbryting og gjenvinning av egne bestanddeler", "Opptak av næring ved endocytose", "Deling av mitokondrier", "Produksjon av ATP"], 0, "Ødelagte deler samles i blærer og brytes ned i lysosomene."],
    ["Hva er riktig om ribosomer?", ["De er omgitt av en membran", "De finnes bare i eukaryote celler", "De lager polypeptider", "De lagrer DNA"], 2, "Ribosomer finnes både i prokaryote og eukaryote celler."]
  ]
};
