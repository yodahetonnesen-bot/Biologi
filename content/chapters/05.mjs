export default {
  n: 5,
  slug: "mennesket-og-mikrobene",
  part: 2,
  title: "Mennesket og mikrobene",
  lead: "Hvordan bakterier og virus smitter, hvordan immunforsvaret stopper dem, og hvordan vaksiner og antibiotika virker.",
  goals: [
    "gjøre greie for hvordan virale og mikrobielle sykdommer oppstår, sprer seg og blir nedkjempet",
    "drøfte hvordan vaksiner forebygger og verner mot sykdom på individ- og populasjonsnivå",
    "gjøre greie for bruk av antibiotika og drøfte mulige konsekvenser"
  ],
  sections: [
    {
      num: "5.1",
      title: "Hvordan infeksjoner oppstår og sprer seg",
      blocks: [
        ["p", "Vi omgir oss med bakterier, virus, sopp og parasitter – **mikroorganismer** eller mikrober. Trenger de inn i vevet, har vi en **infeksjon**. At mikroorganismer har fast tilhold på kroppen, kalles **kolonisering**, og det er normalt. Koloniseringen starter ved fødselen med mikroorganismene fra moren."],
        ["p", "**Mikrobiomet** er samlingen av alle mikroorganismer som lever på ytre og indre overflater hos en organisme. Noen er harmløse, mange er nyttige, og noen er sykdomsframkallende. **Immunitet** er evnen til å stå imot en infeksjon uten å bli syk."],
        ["h", "Bakterieinfeksjoner"],
        ["table",
          ["Smittemåte", "Hvordan", "Eksempler"],
          [
            ["Dråpesmitte", "Små væskedråper fra hoste og nys", "Halsbetennelse, lungebetennelse"],
            ["Luftsmitte", "Bakterier på partikler i lufta", "Luftveisinfeksjoner"],
            ["Direkte kontaktsmitte", "Kroppskontakt, også seksuell", "Sårinfeksjoner, kjønnssykdommer"],
            ["Indirekte kontaktsmitte", "Klær, dørhåndtak og andre gjenstander", "Sykehusinfeksjoner"],
            ["Mat og vann", "Forurenset mat eller drikkevann", "Mage- og tarmsykdommer"]
          ]
        ],
        ["p", "Sårinfeksjoner kommer ofte av **streptokokker** eller **stafylokokker**. På sykehus er stafylokokker blant de vanligste bakteriene, og urinveisinfeksjon, luftveisinfeksjon og sårinfeksjon etter operasjon er de vanligste sykehusinfeksjonene."],
        ["note", "Semmelweis", [
          "Den ungarske legen Ignaz Semmelweis studerte barselfeber i Wien midt på 1800-tallet. Dødeligheten var størst på avdelingen der medisinstudentene arbeidet – de obduserte om morgenen og undersøkte fødende kvinner etterpå.",
          "Semmelweis beordret grundig håndvask med klorkalk, og dødeligheten falt markant. Barselfeber skyldes streptokokker, som studentene overførte fra likene."
        ]],
        ["h", "Virus og virusinfeksjoner"],
        ["p", "Virus er partikler med arvestoff – DNA eller RNA – inni en kappe. De regnes ikke som levende fordi de trenger en vertscelle for å formere seg. Vi deler dem i plantevirus, dyrevirus og **bakteriofager**. Virusgenene har bare én hensikt: å komme inn i en celle, kopiere arvestoffet og lage nye virus."],
        ["steps", [
          ["Festing", "Viruset fester seg til bestemte molekyler på overflaten av en vertscelle. De fleste virus angriper bare noen få arter og celletyper."],
          ["Inntrengning", "Arvestoffet sendes inn i cellen."],
          ["Kopiering", "Viruset bruker vertscellens maskineri til å kopiere arvestoffet og lage virusproteiner."],
          ["Frigjøring", "Nye viruspartikler settes sammen og forlater cellen, ofte ved at cellen sprenges (lytisk vekst)."]
        ]],
        ["p", "**Retrovirus** som hiv har RNA som arvestoff. Med enzymet **revers transkriptase** lager viruset en DNA-kopi som settes inn i vertens eget DNA. Influensavirus og koronavirus er RNA-virus som kopierer RNA direkte i cytoplasmaet, uten å gå veien om DNA."],
        ["h", "Epidemier og pandemier"],
        ["table",
          ["Navn", "Tid", "Årsak og vert", "Dødstall (millioner)"],
          [
            ["Svartedauden", "1347–1351", "*Yersinia pestis* / rotter og lopper", "200"],
            ["Spanskesyken", "1918–1919", "H1N1 influensavirus / griser", "40–50"],
            ["Svineinfluensa", "2009–2010", "H1N1 influensavirus / griser", "0,2"],
            ["Covid-19", "2019–", "SARS-CoV-2 koronavirus / flaggermus", "over 10 (mai 2021)"]
          ]
        ],
        ["p", "**R-tallet** (reproduksjonstallet) forteller hvor mange mennesker én syk person i gjennomsnitt smitter. Influensa har R rundt 1–2, mens meslinger er svært smittsomt med R på 12–18. De mest suksessrike virusene dreper ikke verten for fort, for da rekker de ikke å spre seg."],
        ["key", "De mest smittsomme sykdommene sprer seg når mange lever tett. Ofte kommer nye pandemier fra virus eller bakterier som har spredd seg fra dyr til mennesker."]
      ]
    },
    {
      num: "5.2",
      title: "Immunforsvaret",
      blocks: [
        ["p", "Immunforsvaret har tre sentrale oppgaver: å **gjenkjenne** mikroorganismer, å **fjerne** dem som har trengt inn i vevet, og å **huske** det første møtet, slik at det går raskere neste gang. Forsvaret må også skille eget fra fremmed, siden virkemidlene også kan skade kroppen selv."],
        ["compare", [
          ["Medfødt immunforsvar", [
            "Evolusjonsmessig gammelt, finnes også hos enkle organismer",
            "Reagerer raskt på molekyler som er felles for mange mikroorganismer",
            "Ytre forsvar: hud, slimhinner, flimmerhår, talg, slim og magesyre",
            "Indre forsvar: fagocytter, naturlige drepeceller, interferoner og proteiner i blodet",
            "Liten eller ingen hukommelse"
          ]],
          ["Tilpasset immunforsvar", [
            "Finnes hos mennesker og andre virveldyr",
            "Reagerer på bestemte fremmede molekyler – **antigener**",
            "Lymfocytter: B-celler og T-celler med antigenreseptorer",
            "Danner hukommelsesceller, grunnlaget for at vaksiner virker",
            "Bruker lengre tid første gang, men er svært raskt andre gang"
          ]]
        ]],
        ["p", "Alle hvite blodceller er immunceller, og de dannes fra stamceller i beinmargen. I en frisk voksen produseres hundre milliarder nye blodceller hver dag. **B-cellene** modnes i beinmargen, **T-cellene** i brisselen (thymus)."],
        ["key", "Immunforsvaret skal gjenkjenne mikroorganismer, fjerne dem og huske dem til neste gang."]
      ]
    },
    {
      num: "5.3",
      title: "Det medfødte immunforsvaret",
      blocks: [
        ["h", "Det ytre forsvaret"],
        ["p", "Tørr, tett hud uten rifter gir god beskyttelse, og talgkjertlene skiller ut stoffer som hemmer vekst. Alle hulrom med åpning mot omverdenen er dekket av slimhinner. Slimet fanger opp mikroorganismer, og **flimmerhår (cilier)** i luftveiene frakter slimet mot svelget. Magesyren har pH rundt 1,5 og dreper de fleste mikroorganismene."],
        ["h", "Det indre forsvaret"],
        ["p", "**Fagocytter** er hvite blodceller som spiser mikroorganismer ved **fagocytose**. En fagocytt kan spise opptil tjue bakterier om gangen, og den spiser også døde kroppsceller, virusinfiserte celler og noen kreftceller. Viktige typer er **makrofager**, som ligger i vevet i årevis, og **dendrittiske celler**, som frakter biter av mikroorganismer til nærmeste lymfeknute og aktiverer det tilpassede forsvaret."],
        ["p", "Proteiner i blodet binder seg til overflaten av mikroorganismen og kan ødelegge cellemembranen eller merke inntrengeren, slik at fagocytosen øker. Virusinfiserte celler skiller ut **interferoner** som varsler nabocellene, slik at viruset hindres i å formere seg."],
        ["h", "Betennelse"],
        ["steps", [
          ["Skade eller infeksjon", "Celler i vevet slipper ut stoffer som utvider blodårene."],
          ["Økt blodstrøm", "Porene i kapillærveggene åpnes, og blodplasma lekker ut i vevet. Vi ser og kjenner rødme, hevelse, varme og smerte."],
          ["Fagocytter til stedet", "Signalstoffer får fagocyttene til å vandre ut av blodårene og spise mikroorganismene."],
          ["Puss", "Gulaktig puss består av døde og levende fagocytter, mikroorganismer og dødt vev."],
          ["Aktivering", "Klarer ikke fagocyttene alt, frakter dendrittiske celler antigener til lymfeknutene, og det tilpassede forsvaret overtar."]
        ]],
        ["key", "Betennelse begrenser skaden og hindrer mikroorganismene i å spre seg."]
      ]
    },
    {
      num: "5.4",
      title: "Det tilpassede immunforsvaret",
      blocks: [
        ["p", "Det tilpassede forsvaret reagerer på **antigener** – fremmede molekyler, oftest proteiner, som skiller seg fra kroppens egne. Antigenene kan sitte på overflaten av en mikroorganisme eller flyte fritt i blodet. **Lymfocyttene** har reseptorer som gjenkjenner antigenene."],
        ["table",
          ["Celletype", "Gjenkjenner", "Oppgave"],
          [
            ["Hvilende B-celle", "Antigenet direkte, med antigenreseptor i overflaten", "Aktiveres av antigenet og deler seg"],
            ["Plasmacelle", "–", "Produserer store mengder antistoffer som slippes ut i blod og vev"],
            ["B-hukommelsescelle", "Samme antigen senere", "Gir rask reaksjon ved nytt møte"],
            ["T-hjelpecelle", "Antigen bundet til kroppens egne celler", "Påvirker andre lymfocytter slik at antigenet fjernes"],
            ["T-drepecelle", "Antigen på infiserte celler", "Dreper celler med fremmede antigener"],
            ["T-hukommelsescelle", "Samme antigen senere", "Gir rask reaksjon ved nytt møte"]
          ]
        ],
        ["p", "Første gang kroppen møter et ukjent antigen, tar det tid før det er laget nok antistoffer. Andre gang kjenner hukommelsescellene igjen antigenet med en gang, deler seg raskt og produserer mer og bedre antistoffer. Dette kalles den **immunologiske hukommelsen**, og det er grunnen til at vi ofte bare blir syke én gang av samme sykdom."],
        ["note", "Immunforsvaret og kreft", [
          "Kreftceller deler seg for ofte eller dør for sjelden. Mutasjoner gir endrede proteiner som immunforsvaret kan oppdage som fremmede, og fagocytter og T-drepeceller fjerner mange slike celler før de blir til svulster."
        ]],
        ["key", "Det tilpassede immunforsvaret gjenkjenner bestemte antigener og husker dem, slik at vi blir immune."]
      ]
    },
    {
      num: "5.5",
      title: "Vaksiner",
      blocks: [
        ["p", "En vaksine er en «jukseinfeksjon» som forbereder immunforsvaret på en infeksjon som kan komme senere. Vaksinen inneholder en svekket eller drept mikroorganisme, eller bare antigener fra den. Antigenene tas opp av fagocytter og fraktes til nærmeste lymfeknute, der B- og T-celler lager antistoffer og hukommelsesceller."],
        ["compare", [
          ["Aktiv immunitet", [
            "Du får en vaksine eller gjennomgår sykdommen",
            "Kroppen lager selv antistoffer og hukommelsesceller",
            "Tar tid å bygge opp",
            "Varer lenge, av og til livet ut"
          ]],
          ["Passiv immunitet", [
            "Ferdige antistoffer overføres fra et annet individ (antiserum)",
            "Kroppen lager ingen hukommelsesceller",
            "Virker med en gang",
            "Varer bare to–tre måneder"
          ]]
        ]],
        ["p", "**Flokkimmunitet** oppstår når så mange i befolkningen er immune at smitten ikke finner nye verter. Det beskytter også dem som ikke kan vaksineres, for eksempel spedbarn og syke. Hvor stor andel som må være immun, avhenger av hvor smittsom sykdommen er."],
        ["p", "Det norske barnevaksinasjonsprogrammet omfatter elleve vaksiner, blant annet mot rotavirus, difteri, stivkrampe, kikhoste, poliomyelitt, hjernehinnebetennelse, hepatitt B, kusma, røde hunder og meslinger. Elever i 7. klasse får i tillegg tilbud om HPV-vaksine."],
        ["note", "Meslinger svekker hukommelsen i immunforsvaret", [
          "Meslingviruset infiserer og dreper hukommelses-B-celler. Barn som får meslinger, mister derfor deler av den immunologiske hukommelsen mot andre infeksjoner og vaksiner de har hatt før.",
          "Det forklarer hvorfor barnedødeligheten falt mye mer enn bare meslingtilfellene skulle tilsi da vaksinen kom på slutten av 1960-tallet."
        ]],
        ["key", "Vaksiner gir aktiv immunitet uten at du må gjennomgå sykdommen. Antiserum gir rask, men kortvarig passiv immunitet."]
      ]
    },
    {
      num: "5.6",
      title: "Antibiotika og resistens",
      blocks: [
        ["p", "**Antibiotika** er organiske forbindelser som hemmer eller dreper bakterier. Alexander Fleming oppdaget soppen *Penicillium chrysogenum* i 1928, og fra slutten av 1940-årene ble antibiotika alminnelig brukt."],
        ["list", [
          "Noen typer hindrer bakterien i å kopiere DNA-et sitt.",
          "Noen blokkerer bakterienes ribosomer, slik at proteinsyntesen stanser.",
          "Penicillin hindrer bakterien i å lage cellevegg når den skal dele seg."
        ]],
        ["p", "**Smalspektret** antibiotika dreper få bakteriearter og skader tarmfloraen minst. **Bredspektret** virker mot mange arter og brukes når legen ikke vet hvilken bakterie som er årsaken – men øker faren for resistens."],
        ["p", "**Resistens** vil si at bakterien overlever antibiotika. Resistensgener ligger ofte i plasmider som overføres mellom bakterier, også mellom arter. Bakterier som er resistente mot flere typer, kalles **multiresistente**. Høyt forbruk, særlig på sykehus og i dyrefôr, driver utviklingen."],
        ["p", "Antibiotika virker ikke mot virus. En **CRP-test** av blodet skiller ofte mellom bakterie- og virusinfeksjon: ved bakterieinfeksjon kan CRP-verdien stige over 100 mg/l, mens den ved virusinfeksjon oftest ligger under 50 mg/l."],
        ["note", "Bakteriofagterapi", [
          "Bakteriofager er virus som angriper bakterier. Fordi de er svært spesifikke, kan de drepe sykdomsframkallende bakterier uten å ramme den nyttige tarmfloraen.",
          "Metoden ble utviklet i Sovjetunionen og brukes i dag blant annet i Georgia, Frankrike, Belgia og USA. Ulempen er at man må vite nøyaktig hvilken bakterie som forårsaker infeksjonen."
        ]],
        ["key", "Bakterier kan utvikle resistens. Da virker ikke antibiotika, og smalspektret behandling og lavere forbruk er derfor viktig."]
      ]
    },
    {
      num: "5.7",
      title: "Zoonoser",
      blocks: [
        ["p", "**Zoonoser** er sykdommer som smitter mellom dyr og mennesker. Ordet kommer fra gresk *zoo* (dyr) og *nosos* (sykdom). Smitten kan være virus, bakterier, sopp, protister, prioner eller innvollsmark."],
        ["table",
          ["Zoonose", "Årsak", "Smittevei"],
          [
            ["Borreliose", "Bakterien *Borrelia burgdorferi*", "Flåttbitt"],
            ["Toxoplasmose", "Protisten *Toxoplasma gondii*", "Katt til sau og menneske; farlig for fosteret"],
            ["Rabies", "Virus som angriper nervesystemet", "Bitt fra hund, rev eller flaggermus"],
            ["Covid-19", "SARS-CoV-2", "Flaggermus med mulig mellomvert, så dråpe- og kontaktsmitte"],
            ["Kugalskap og Creutzfeldt-Jakob", "Prioner – feilfoldede proteiner", "Kjøtt fra smittede dyr"],
            ["E. coli-infeksjon", "Giftproduserende varianter av *E. coli*", "Kjøtt, dyremøkk, dårlig vaskede grønnsaker"]
          ]
        ],
        ["p", "Mange pandemiske zoonoser starter i Asia, der mange mennesker lever tett på dyr og levende dyr selges på matmarkeder. Flaggermus og gnagere er ofte kilden. Virus regnes som den største trusselen for kommende pandemier fordi arvestoffet muterer lett."],
        ["key", "Ved zoonoser blir vertsdyret ofte ikke sykt selv, men mennesker som smittes, kan bli alvorlig syke."]
      ]
    }
  ],
  terms: [
    ["Mikroorganisme", "Bakterier, virus, sopp og parasitter – organismer som er for små til å ses med det blotte øye."],
    ["Mikrobiom", "Samlingen av alle mikroorganismer som lever på og i en organisme."],
    ["Kolonisering", "At mikroorganismer har fast tilhold på kroppen uten å gi sykdom."],
    ["Infeksjon", "Mikroorganismer trenger inn i kroppens vev."],
    ["Immunitet", "Evnen til å stå imot en infeksjon uten å bli syk."],
    ["Dråpesmitte", "Smitte via små væskedråper fra hoste og nys."],
    ["Kontaktsmitte", "Smitte ved direkte kroppskontakt eller via gjenstander."],
    ["Bakteriofag", "Virus som angriper bakterier."],
    ["Retrovirus", "RNA-virus som lager en DNA-kopi av arvestoffet sitt med revers transkriptase, for eksempel hiv."],
    ["Lytisk vekst", "Formering der viruset sprenger vertscellen når de nye viruspartiklene frigjøres."],
    ["R-tall", "Reproduksjonstallet: hvor mange én syk person i gjennomsnitt smitter."],
    ["Epidemi", "Utbrudd av smittsom sykdom i et avgrenset område eller en befolkning."],
    ["Pandemi", "Epidemi som har spredd seg over store deler av verden."],
    ["Fagocytose", "Cellespising: en hvit blodcelle omslutter og bryter ned en mikroorganisme."],
    ["Makrofag", "Stor fagocytt som ligger i vevet og bekjemper infeksjoner."],
    ["Dendrittisk celle", "Fagocytt med utløpere som frakter antigener til lymfeknutene og aktiverer det tilpassede forsvaret."],
    ["Interferon", "Protein fra virusinfiserte celler som varsler nabocellene og hemmer virusformering."],
    ["Betennelse", "Kroppens reaksjon på skade: rødme, hevelse, varme og smerte."],
    ["Antigen", "Fremmed molekyl som immunforsvaret reagerer på."],
    ["Antistoff", "Protein fra plasmaceller som binder seg til et bestemt antigen."],
    ["Lymfocytt", "Hvit blodcelle i det tilpassede forsvaret: B-celler og T-celler."],
    ["Plasmacelle", "B-celle som produserer store mengder antistoffer."],
    ["Hukommelsescelle", "B- eller T-celle som husker et antigen og gir rask reaksjon ved nytt møte."],
    ["Aktiv immunitet", "Kroppen lager selv antistoffer og hukommelsesceller, etter vaksine eller gjennomgått sykdom."],
    ["Passiv immunitet", "Ferdige antistoffer overføres fra et annet individ; virker raskt, men kortvarig."],
    ["Flokkimmunitet", "Så mange er immune at smitten ikke finner nye verter, slik at også uvaksinerte beskyttes."],
    ["Antibiotika", "Stoffer som hemmer eller dreper bakterier. Virker ikke mot virus."],
    ["Resistens", "Bakteriers evne til å overleve antibiotika."],
    ["Multiresistens", "Motstandsdyktighet mot flere typer antibiotika samtidig."],
    ["CRP", "C-reaktivt protein; stiger mye ved bakterieinfeksjon og brukes til å skille bakterie- fra virusinfeksjon."],
    ["Zoonose", "Sykdom som smitter mellom dyr og mennesker."],
    ["Prion", "Feilfoldet protein som kan gi sykdom, for eksempel kugalskap. Ikke levende."]
  ],
  rep: [
    ["Hva slags organismer kan gi infeksjoner?", "Bakterier, virus, sopp og parasitter, i tillegg til flercellede innvollsmarker."],
    ["Forklar ordene kolonisering, infeksjon og immunitet.", "Kolonisering: mikroorganismer har fast tilhold på kroppens overflater uten å gi sykdom. Infeksjon: mikroorganismer trenger inn i vevet, og vi kan bli syke. Immunitet: evnen til å motstå en infeksjon uten å bli syk."],
    ["Hva er et mikrobiom?", "Samlingen av alle mikroorganismer som lever på ytre og indre overflater hos en organisme. Noen er harmløse, noen nyttige og noen sykdomsframkallende."],
    ["Forklar forskjellen på epidemi og pandemi.", "En epidemi er et utbrudd i et avgrenset område eller en befolkning. En pandemi har spredd seg over store deler av verden, slik som svartedauden, spanskesyken og covid-19."],
    ["Hvilke smittemåter har bakterier?", "Dråpesmitte og luftsmitte, direkte kontaktsmitte (også seksuelt overført), indirekte kontaktsmitte via gjenstander, og smitte gjennom vann og mat."],
    ["Hvordan er et virus bygd opp?", "Arvestoff – enten DNA eller RNA – pakket inn i en kappe av proteiner, hos noen med en lipidmembran utenpå. Viruset har ingen organeller, ikke cytoplasma og ikke eget stoffskifte."],
    ["Hvorfor regner vi ikke virus som levende?", "De kan bare formere seg inne i en vertscelle, har ikke eget stoffskifte og er ikke bygd opp av celler."],
    ["Forklar hvordan et virus formerer seg.", "Viruset fester seg til vertscellen og sender arvestoffet inn. Vertscellens maskineri brukes til å kopiere arvestoffet og lage virusproteiner. Nye viruspartikler settes sammen og frigjøres, ofte ved at cellen sprenges."],
    ["Gi eksempler på virus og virussykdommer hos mennesker.", "Influensavirus (influensa), koronavirus (covid-19), herpesvirus (munnsår), Epstein-Barr-virus (mononukleose), hiv (aids), varicella (vannkopper) og HPV (livmorhalskreft)."],
    ["Hva er forskjellen på et DNA-virus og et RNA-virus?", "DNA-virus har DNA som arvestoff, for eksempel herpes. RNA-virus har RNA. Retrovirus som hiv lager en DNA-kopi med revers transkriptase og setter den inn i vertens DNA, mens influensa- og koronavirus kopierer RNA direkte i cytoplasmaet."],
    ["Hva er immunsystemets oppgaver?", "Å gjenkjenne mikroorganismer, fjerne dem som har trengt inn i vevet, og huske det første møtet slik at fjerningen går raskere neste gang."],
    ["Hvilke av kroppens celler og vev deltar i immunforsvaret?", "Hvite blodceller, beinmargen, lymfesystemet og lymfevevet. I tillegg bidrar leveren med immunmolekyler, blodåreveggen ved betennelse og nervesystemet ved blant annet feberregulering."],
    ["Klarer immunforsvaret å skille fremmede celler fra dine egne?", "Ja. Det lærer seg å ikke reagere på kroppens egne molekyler, men bare på fremmede antigener. Svikter dette, får vi autoimmune sykdommer."],
    ["Hva består det medfødte ytre forsvaret av?", "Tørr, tett hud med talg, og slimhinner som skiller ut slim, magesyre og andre stoffer. I luftveiene frakter flimmerhår slimet mot svelget."],
    ["Hvor i kroppen har vi slimhinner, og hvilken funksjon har de?", "I luftveiene, fordøyelseskanalen, de indre kjønnsorganene og urinveiene. Slimet fanger opp mikroorganismer og hindrer dem i å trenge inn i vevet, og inneholder stoffer som ødelegger cellemembraner."],
    ["Hva består det medfødte indre forsvaret av?", "Fagocytter (nøytrofile granulocytter, makrofager og dendrittiske celler), naturlige drepeceller, proteiner i blodet som skader eller merker mikroorganismer, og interferoner fra virusinfiserte celler."],
    ["Forklar begrepet fagocytose.", "Cellespising: fagocytten binder seg til molekyler på overflaten av mikroorganismen, omslutter den med cellemembranen og bryter den ned i lysosomer."],
    ["Hva er interferoner, og når skilles de ut?", "Proteiner som virusinfiserte celler skiller ut. De varsler nabocellene, som endrer seg slik at viruset hindres i å formere seg. Reaksjonen er ikke knyttet til ett bestemt virus."],
    ["Forklar hva som skjer når vi får en betennelse.", "Skadde celler skiller ut stoffer som utvider blodårene og åpner porene i kapillærene. Blodplasma lekker ut, og vi ser rødme, hevelse, varme og smerte. Fagocytter vandrer ut i vevet og spiser mikroorganismer, og dendrittiske celler frakter antigener til lymfeknutene."],
    ["Forklar hva vi mener med aktiv og passiv immunitet.", "Aktiv immunitet: kroppen lager selv antistoffer og hukommelsesceller etter vaksine eller sykdom, og beskyttelsen varer lenge. Passiv immunitet: ferdige antistoffer overføres fra et annet individ, virker straks, men varer bare to–tre måneder."],
    ["Hvordan virker en vaksine?", "Vaksinen inneholder svekkede eller drepte mikroorganismer, eller bare antigener. Immunforsvaret reagerer som ved en infeksjon: fagocytter frakter antigenene til lymfeknutene, B- og T-celler aktiveres, og det dannes antistoffer og hukommelsesceller uten at du blir syk."],
    ["Hva er flokkimmunitet?", "Når så mange i befolkningen er immune at smitten ikke finner nok mottakelige verter. Da beskyttes også de som ikke kan vaksineres, som spedbarn og personer med svekket immunforsvar."],
    ["Hva er smalspektret og bredspektret antibiotika?", "Smalspektret virker mot få bakteriearter og skåner den nyttige floraen. Bredspektret virker mot mange arter og brukes når årsaken er ukjent, men øker faren for resistens."],
    ["Hva betyr det at bakterier blir resistente, og hva kan årsakene være?", "At de overlever antibiotikabehandling. Årsakene er mutasjoner og overføring av resistensgener i plasmider, kombinert med høyt forbruk i behandling og i dyrefôr, som gir seleksjon for de resistente bakteriene."],
    ["Hva slags test kan avgjøre om infeksjonen skyldes bakterier eller virus?", "En CRP-test (hurtigsenkning) av en bloddråpe. Over 100 mg/l tyder på bakterieinfeksjon, under 50 mg/l på virusinfeksjon."],
    ["Hvorfor blir antibiotika i noen land gitt til husdyr?", "For å hindre sykdom i tette besetninger og fordi friske dyr utnytter fôret bedre og vokser raskere. Praksisen øker faren for resistente bakterier som kan spres til mennesker gjennom mat."]
  ],
  tasks: [
    ["5.1", "Hvorfor er bakteriefloraen på kroppen nødvendig, og hvordan beskytter den oss?", "Bakteriene på hud og slimhinner opptar plassen og næringen, og skiller ut stoffer som hemmer andre mikroorganismer. I tarmen hjelper de med å spalte mat, produsere vitaminer og trene opp immunforsvaret. Blir floraen ødelagt, for eksempel av antibiotika, får sykdomsframkallende bakterier lettere fotfeste."],
    ["5.2", "Hvorfor er det medfødte immunforsvaret ganske likt hos alle, mens det tilpassede formes av livet vårt?", "Det medfødte forsvaret er nedarvet og reagerer på molekyler som er felles for mange mikroorganismer. Det tilpassede forsvaret bygger opp hukommelsesceller mot nøyaktig de antigenene du har møtt gjennom infeksjoner og vaksiner, og blir derfor personlig."],
    ["5.3", "Forklar hvordan fagocyttene finner fremmede mikroorganismer.", "De binder seg til bestemte molekyler på overflaten av mikroorganismen, for eksempel glykoproteiner og glykolipider i bakterienes cellevegg. Slike molekyler finnes ikke på menneskeceller. Mikroorganismer merket med proteiner fra blodet tiltrekker seg fagocytter enda sterkere."],
    ["5.4", "Hvorfor tilsettes klor i drikkevann, og hva betyr det for tarmfloraen?", "Klor dreper bakterier, virus og parasitter og sikrer hygienisk trygt vann. Mengden er så lav at vannet kan drikkes. Svært høye doser over tid kan påvirke tarmfloraen, men i norsk drikkevann er konsentrasjonen langt under nivået som gir slik effekt."],
    ["5.5", "Finn ut mer om Semmelweis. Hvordan praktiseres hygiene på sykehus i dag?", "Semmelweis viste i 1840-årene at håndvask med klorkalk kraftig reduserte dødeligheten av barselfeber. I dag brukes hånddesinfeksjon mellom hver pasient, engangsutstyr, sterilisering av instrumenter, isolering av smittsomme pasienter og systematisk overvåking av sykehusinfeksjoner, blant annet av gule stafylokokker (MRSA)."],
    ["5.6", "Diskuter status for koronaviruset SARS-CoV-2.", "Momenter: viruset er blitt endemisk med tilbakevendende bølger, vaksinene beskytter særlig mot alvorlig sykdom, nye varianter oppstår ved mutasjon, og risikogrupper får oppfriskningsdoser. Sammenlikn R-tall og dødelighet med influensa."],
    ["5.7", "Finn ut mer om mononukleose (kyssesyke). Hvorfor heter sykdommen det?", "Årsaken er Epstein-Barr-viruset, som smitter med dråper og spytt. Inkubasjonstiden er én til sju uker. Viruset angriper først celler i luftveiene og deretter hvite blodceller, som frakter det til lymfesystemet. Navnet mononukleose kommer av at det blir unormalt mange enkjernede hvite blodceller (mononukleære celler) i blodet. 85 % av de syke er mellom 15 og 25 år, og lever og milt blir ofte forstørret, slik at man må unngå hard fysisk aktivitet i flere måneder."],
    ["5.8", "Forklar hvordan lytisk vekst foregår når en bakteriofag angriper en bakterie.", "Fagen fester seg til bakterien og sprøyter DNA-et sitt inn. Bakteriens enzymer brukes til å kopiere virus-DNA og lage virusproteiner. Nye fager settes sammen, bakterien sprenges, og fagene frigjøres og infiserer nye bakterier. Alternativt kan virus-DNA bygges inn i bakteriens arvestoff uten at den drepes."],
    ["5.9", "Forklar hvordan fagocyttene spiser mikroorganismer ved endocytose, og hvilke organeller som hjelper til.", "Cellemembranen omslutter mikroorganismen og snører av en blære inne i cellen. Blæren smelter sammen med et lysosom, og de om lag femti enzymene der bryter ned mikroorganismen ved lav pH. Restene skilles ut ved eksocytose. Tegn cellemembran, blære, lysosom og nedbrytingsprodukter."],
    ["5.10", "Hvordan bidrar de ulike delene av immunforsvaret ved betennelse? Hvorfor kan febernedsettende ha både positiv og negativ effekt?", "Det ytre forsvaret er allerede brutt. Det medfødte indre forsvaret gir betennelsesreaksjonen og fagocytose, mens dendrittiske celler aktiverer det tilpassede forsvaret, som lager antistoffer og drepeceller. Feber hemmer mikroorganismenes vekst og gjør immuncellene mer effektive, så febernedsettende kan forlenge infeksjonen – men det lindrer plager og hindrer farlig høy temperatur. Bakterieinfeksjoner kan kreve antibiotika; virusinfeksjoner gjør det ikke."],
    ["5.11", "Lag en oversikt der du sammenlikner B-celler og T-celler.", "B-celler: modnes i beinmargen, gjenkjenner antigenet direkte med antistoff i overflaten, blir til plasmaceller som lager antistoffer, og til B-hukommelsesceller. T-celler: modnes i brisselen, gjenkjenner bare antigen bundet til kroppens egne celler. T-hjelpeceller styrer andre lymfocytter, T-drepeceller dreper infiserte celler, og begge danner hukommelsesceller."],
    ["5.12", "Finn eksempler på en autoimmun sykdom og en immunsviktsykdom.", "Autoimmun: type 1-diabetes, der immunforsvaret ødelegger de insulinproduserende betacellene; andre eksempler er leddgikt og multippel sklerose. Immunsvikt: alvorlig kombinert immunsvikt (SCID), der T- og B-celler ikke fungerer. Ervervet immunsvikt kan skyldes hiv."],
    ["5.13", "Forklar begrepene antistoff, antigen og antigenreseptor.", "Antigen er et fremmed molekyl immunforsvaret reagerer på. Antistoff er et protein fra plasmaceller som binder seg til ett bestemt antigen, som en nøkkel i en lås. Antigenreseptor er antistoffliknende molekyler festet i overflaten på B- og T-celler, som gjenkjenner antigenet og aktiverer cellen."],
    ["5.14", "Hva skjer fra en bakterie kommer inn i kroppen til den er fjernet, og hva skjer neste gang?", "Først møter bakterien det ytre forsvaret. Kommer den inn i vevet, starter betennelse, og fagocytter spiser bakterier. Dendrittiske celler frakter antigener til lymfeknuten, T-hjelpeceller aktiveres, B-celler deler seg og blir plasmaceller som lager antistoffer. Antistoffene merker bakteriene, som fjernes ved fagocytose. Neste gang gjenkjenner hukommelsescellene antigenet straks, og infeksjonen stoppes ofte før du merker noe."],
    ["5.15", "Hvordan blir kroppen kvitt virus, og finnes det virus som blir værende?", "Interferoner hemmer formeringen, og T-drepeceller dreper infiserte celler, mens antistoffer nøytraliserer frie viruspartikler. Noen virus blir likevel værende livet ut: Epstein-Barr-viruset og herpesvirus ligger latent i celler og kan blusse opp igjen, og hiv bygges inn i vertens DNA."],
    ["5.16", "Lag en oversikt over kommunikasjonen mellom det medfødte og det tilpassede immunforsvaret.", "Dendrittiske celler og makrofager er bindeleddet: de fagocyterer mikroorganismer, frakter antigener til lymfeknutene og presenterer dem for T-hjelpecellene. T-hjelpecellene aktiverer B-celler og T-drepeceller. Antistoffene fra plasmacellene merker i sin tur mikroorganismene, slik at fagocyttene i det medfødte forsvaret arbeider mer effektivt."],
    ["5.17", "Hvorfor må lymfesystemet og sirkulasjonssystemet være koplet sammen?", "Væske som lekker ut av kapillærene, samles i lymfesystemet og føres tilbake til blodet. Samtidig fraktes antigener og immunceller mellom vevet, lymfeknutene og blodet, slik at hele kroppen kan mobiliseres mot en lokal infeksjon."],
    ["5.18", "Hvordan virker en vaksine? Hva betyr 80–90 % beskyttelse?", "Vaksinen gir immunforsvaret antigener uten sykdom, slik at det dannes antistoffer og hukommelsesceller. At en vaksine har 80–90 % beskyttelse, betyr at risikoen for å bli syk er 80–90 % lavere blant vaksinerte enn blant uvaksinerte. De 10–20 prosentene som ikke oppnår full beskyttelse, får ofte mildere sykdom, og de beskyttes i tillegg av flokkimmuniteten."],
    ["5.19", "Hvorfor dukker meslinger opp igjen? Forklar flokkimmunitet.", "Fordi vaksinasjonsdekningen har falt i flere land. Meslinger har R-tall på 12–18, og derfor må rundt 95 % være immune for at flokkimmuniteten skal holde. Synker dekningen under dette, kan smitten spre seg raskt, og de som ikke kan vaksineres, rammes."],
    ["5.20", "Finn ut mer om bakteriofagterapi.", "Behandling med virus som angriper bakterier. Fagene er svært spesifikke, skader ikke menneskeceller eller nyttige tarmbakterier, og muterer raskere enn bakteriene, slik at resistens er mindre sannsynlig. Metoden er mest aktuell ved infeksjoner med multiresistente bakterier, kroniske sårinfeksjoner og enkelte matforgiftninger. Ulempen er at bakterien må identifiseres nøyaktig før riktig fag kan velges."],
    ["5.21", "Hva står WHO og FHI for? Finn ut mer om spanskesyken i Norge.", "WHO er Verdens helseorganisasjon, FHI er Folkehelseinstituttet. Spanskesyken kom til Norge sommeren 1918 og kom i flere bølger til 1920. Om lag 15 000 mennesker døde i Norge, og sykdommen rammet uvanlig mange unge voksne, trolig fordi immunforsvaret deres overreagerte."]
  ],
  labs: [
    {
      title: "Ø 5.1 Bakterier finnes overalt",
      aim: "Dyrke fram bakteriekolonier fra ulike overflater.",
      equipment: ["Petriskåler med næringsagar", "Teip"],
      steps: [
        "Sørg for at lokket ligger godt på agarskålene før forsøket starter.",
        "Samle bakterier ved å trykke en teipbit mot en overflate, eller la gjenstanden berøre agaren. Sett lokket raskt på igjen.",
        "Merk skålene på sidekanten og forsegl dem med teip.",
        "La skålene stå opp ned i noen dager til én uke, slik at agaren ikke tørker ut.",
        "Tell koloniene uten å åpne skålene. Læreren dreper bakteriene med klorin eller sprit til slutt."
      ],
      questions: [
        ["Hvorfor skal skålene stå opp ned?", "Da faller ikke kondensvann ned på agaren, og agaren tørker heller ikke ut."],
        ["Hvorfor må skålene ikke åpnes etterpå?", "Fordi det er dyrket fram store mengder bakterier som ikke skal spres, og fordi nye bakterier fra lufta ville ødelagt resultatet."],
        ["Hvilke feilkilder finnes?", "Bakterier kan ha kommet til før eller under prøvetakingen, ulik kontakttid mot overflaten, ulik temperatur og dyrkingstid, og at ulike arter vokser ulikt på samme næringsagar. Én koloni kan dessuten ha oppstått fra flere celler."]
      ]
    },
    {
      title: "Ø 5.2 Bakteriedyrking og antibiotika",
      aim: "Undersøke hvordan ulike bakterier reagerer på ulike typer antibiotika.",
      equipment: ["Petriskåler med næringsagar", "Papirlapper med ulike antibiotika", "Podenål eller glass-stav"],
      steps: [
        "Ta bakterieprøver fra ulike steder og dyrk dem fram på agar.",
        "Overfør enkeltkolonier til nye skåler med podenål – da rendyrker du artene.",
        "Stryk bakteriene utover agaren og legg på lapper med ulike antibiotika.",
        "Dyrk videre i omtrent én uke og observer sonene rundt lappene."
      ],
      questions: [
        ["Hvordan ser du at en bakterie er resistent?", "Bakteriene vokser helt inntil papirlappen. Er de følsomme, blir det en klar sone uten vekst rundt lappen, og sonen er større jo mer effektivt antibiotikumet er."],
        ["Hvorfor velger legen ofte smalspektret antibiotika først?", "Fordi smalspektret behandling skader færre nyttige bakterier i normalfloraen og gir mindre seleksjonspress for resistens. Bredspektret brukes når man ikke vet hvilken bakterie som er årsaken, eller når tilstanden er akutt."],
        ["Hvilke feilkilder finnes?", "Ujevn utstryking gir ulik bakterietetthet, lappene kan ha ulik mengde virkestoff, dyrkingstid og temperatur varierer, og skålen kan være forurenset av flere arter."]
      ]
    }
  ],
  quiz: [
    ["Hva er en infeksjon?", ["Bakterier på huden", "Mikroorganismer som trenger inn i kroppens vev", "En allergisk reaksjon", "Et sår som gror"], 1, "Kolonisering på overflaten er derimot normalt."],
    ["Hva forteller R-tallet?", ["Hvor dødelig en sykdom er", "Hvor mange én syk person i gjennomsnitt smitter", "Hvor lenge viruset lever", "Hvor mange som er vaksinert"], 1, "Meslinger har R på 12–18, influensa 1–2."],
    ["Hvilken del av det ytre forsvaret finner du i luftveiene?", ["Magesyre", "Flimmerhår og slim", "Fagocytter", "Antistoffer"], 1, "Flimmerhårene frakter slimet med støv og bakterier mot svelget."],
    ["Hva gjør en fagocytt?", ["Lager antistoffer", "Spiser mikroorganismer", "Produserer interferon bare", "Danner hukommelsesceller"], 1, "En fagocytt kan spise opptil tjue bakterier om gangen."],
    ["Hva er et antigen?", ["Et fremmed molekyl immunforsvaret reagerer på", "Et protein som dreper bakterier", "En type hvit blodcelle", "Et hormon"], 0, "Antigener sitter ofte på overflaten av mikroorganismer."],
    ["Hvilken celle produserer store mengder antistoffer?", ["T-drepecelle", "Makrofag", "Plasmacelle", "Dendrittisk celle"], 2, "Plasmacellen er en B-celle som har spesialisert seg på antistoffproduksjon."],
    ["Hva gir en vaksine?", ["Passiv immunitet", "Aktiv immunitet", "Ingen immunitet", "Bare flokkimmunitet"], 1, "Kroppen lager selv antistoffer og hukommelsesceller."],
    ["Hva er flokkimmunitet?", ["At alle er vaksinert", "At smitten ikke finner nye verter fordi nok er immune", "At immunforsvaret husker", "At dyr smitter mennesker"], 1, "Det beskytter også dem som ikke kan vaksineres."],
    ["Hvorfor virker ikke antibiotika mot forkjølelse?", ["Fordi dosen er for lav", "Fordi forkjølelse skyldes virus", "Fordi bakteriene er resistente", "Fordi immunforsvaret blokkerer det"], 1, "Antibiotika virker bare på bakterier."],
    ["Hva menes med multiresistente bakterier?", ["Bakterier som vokser raskt", "Bakterier som tåler flere typer antibiotika", "Bakterier med mange plasmider", "Bakterier som lever i tarmen"], 1, "De er et stort problem særlig på sykehus."],
    ["Hva er en zoonose?", ["En sykdom som bare rammer dyr", "En sykdom som smitter mellom dyr og mennesker", "En bakterie i tarmen", "En type vaksine"], 1, "Rabies, borreliose og covid-19 er eksempler."],
    ["Hvilken test skiller ofte bakterie- fra virusinfeksjon?", ["Blodtrykksmåling", "CRP-test", "Urinprøve", "Temperaturmåling"], 1, "CRP over 100 mg/l tyder på bakterieinfeksjon."],
    ["Hva gjør revers transkriptase hos hiv?", ["Lager RNA fra DNA", "Lager DNA fra RNA", "Bryter ned antistoffer", "Bygger cellevegg"], 1, "DNA-kopien settes inn i vertens eget arvestoff."],
    ["Hva er puss i et sår?", ["Bare døde bakterier", "Døde og levende fagocytter, mikroorganismer og dødt vev", "Blodplasma", "Antistoffer"], 1, "Puss er et resultat av betennelsesreaksjonen."]
  ]
};
