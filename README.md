# Linee di guida come impostare il progetto Angular oltre allo sviluppo etico seguendo le best practices

**Premessa**: Queste sono linee di guide che ho potuto assemblarli insieme in base alle esperienze personali in vari progetti Angular oltre ad alcuni riferimenti presi online. Ovviamente questo serve come base di riferimento per impostare il progetto scalabile, performante e di qualità senza limitare la fantasia di sviluppo. In questo caso mi faccio riferimento a progetti di grandi dimensioni dove per forza di cose vanno strutturate con un certo criterio.

Per lavorare e comprendere al meglio il framework Angular è strettamente consigliato avere le basi di: 

> *JavaScript, TypeScript, HTML, CSS/SCSS, RESTFull/API, RxJs, JSON, GIT*

  
*OPTIONAL*: *NgRx, Signals e Standalone*

Avere installata nella vostra macchina:  
- NodeJS
- Gestore versioni di nodejs come ad esempio NVM, NVS etc etc (Utilissimo per switchare di versione a seconda del progetto da lavorare)

Con il vostro gestione di nodejs scegliete la versione adatta alla versione di Angular ed è consultabile nella doc ufficiale di Angular [Link](https://angular.io/guide/versions)

Scegliere una cartella dove creare il progetto e lanciare il comando da terminale: "ng new nomeProgetto" e seguire le indicazioni che suggerisce il terminale ad esempio scegliere il formato di stile CSS,SCSS etc etc e settare o meno in automatico il routing (solitamente va settato).

Il progetto sotto la cartella app ha i files base per rendere eseguibile con una versione dell'applicativo semplice.

Come da linee di guida di Angular conviene creare queste 3 cartelle sotto app: Core, Features e Shared. Ovviamente ognuna cartella ha il suo modulo di riferimento e posso avere sottocartelle per distinguere meglio i file.

-   **Core**: è la cartella dove vengono creati files/cartelle di cui impattano in tutto il sistema e per tutto il ciclo di vita dell'applicativo che possono contenere Interceptors, Guards, Footer, Header, Spinner etc etc
-   **Shared**: Contengono cartelle/files di elementi che vengono riutilizzati più volte in varie maschere o componenti presenti nel progetto ad esempio direttive, pipes, componenti riusabili (es bottone, un div particolare, tendina di opzioni), modali, modelli etc etc
-   **Features**: è lo scheletro dell'applicativo dove definisce com'è strutturato l'applicativo con i suoi sotto-moduli e rotte ben definite

E' buona prassi saper gestire un insieme di componenti raggruppandoli in sotto moduli per sfruttare la tecnologia del lazy-loading mediante routing e migliorare la performance dell'applicando alleggerendo il caricamento di files

## Come lavorare con i Servizi
Nella cartella CORE i servizi devono essere solo al livello globale come ad esempio gestione utenze, chiamate API globali, utility etc etc con provider globale o Inject in unica istanza.

Mentre per altri servizi devono essere definiti nei moduli che esigono quelle funzionalità pertinenti a quel moduli e sotto-moduli con providers al livello del modulo o al livello componente (a seconda dell'utilizzo anche creando più servizi). Se un servizio ha bisogno di un servizio presente in un altro modulo o di provenienza dalla cartella CORE è una buona prassi usare un servizio intermedio per comunicare dal componente al servizio finale mediante un servizio "facade" in modo tale che il componente non debba subire refactoring in futuro quando si cambiano servizi/metodi finali.

Conviene avere uno schema di servizi solo per la gestione delle chiamate API e organizzarli ad somiglianza dei moduli e non aggregarli in unico file. Analogo discorso per quanto riguarda nel raggruppare in vari ENUM gli endpoint.

Alcuni esempi di gestione Servizi in un progetto

    Core -> Services -> callApi.service  

    Features -> FeatureA -> featureA.service e featureAFacade.service

    Features -> FeatureA -> featureA.component  

Se componente featureA vuole fare una GET deve chiamare featureAFacade dove a sua volta importa il servizio callApi.service con il suo metodo GET  
Se il componente deve manipolare con certi dati complessi deve delegare le funzionalità al servizio di featureA.service in quanto è un'operazione riguardante solo alla FeatureA

## Come lavorare con Componenti
Vi sono due categorie di componenti: Smart e Dumb

I componenti Smart sono quelli che comprendono un po' di "Business Logic" per un'iterazione funzionale all'utente e delegare funzioni complesse o chiamate API ai servizi predisposti. Il componente Smart fa delle operazioni come ad esempio gestire la form se è valida o meno, gestire i bottoni e varie parti della form in base alle condizioni e delegare le cose semplici come l'iterazione di un array o visualizzare una grande tabella al componente DUMB.

Il Componente Dumb solitamente sono componenti riciclabili (dentro modulo Shared) o sotto-componenti di Smart dove non fanno altro che ricevere in Input e visualizzare i dati e rimandare in alto in Output l'iterazione dell'utente ad esempio la selezione di una riga della tabella. In sintesi non devono avere nessuna logica e visualizzare solamente con Output di eventuali iterazioni dell'utente.

Inoltre è importante nel saper creare un insieme di componente che riguardano in quella Feature suddividendoli in sotto-componenti facendo anche di un mix con quelli riutilizzabili per evitare le ridondanze.

Come lavorare con direttive, pipes, modali etc etc

Come accennato in precedenza con queste funzionalità sono delle componentistiche che servono a semplificare la vita del programmatore creando funzionalità riusabili e "customizzabili" per rendere il progetto configurabile e con minor codice possibile. Le direttive sono ottime per gestire nelle porzioni HTML specifiche come ad esempio far colorare un testo selezionato. Le Pipe servono a trasformare oggetti o valori in un output particolare ad esempio trasformare gli ENUM in stringhe. I componenti riutilizzabili possono essere delle porzioni UI come ad esempio una particolare drop-down generica dove basta passargli una lista di oggetti con proprietà "id" e "value".

Tutti questi elementi vengono dichiarati nel modulo "Shared" dove a sua volta viene esportato e importato in qualsiasi modulo che abbia bisogno di queste funzionalità.

**BONUS**  
Per una best pratice si consiglia di arrivare al massimo di 400 righe di codice per file. Questo permette di essere leggibile, mantenibile e prevenire bug oltre a rendere il codice riutilizzabile.

Nel progetto sono presenti altri file di configurazione e altre cartelle importanti da conoscere e sapere come funzionano.
## Folders & files structural
**ASSETS**
La cartella "assets" serve a contenere i metadati o contenuti per la UI del progetto. Infatti vengono definiti gli stili, i font, le immagini, icone custom, i18n etc etc. Anche qui è consigliato spacchettarli in più files per una miglior organizzazione dei file. Ad es. sotto la cartella assets  -> Styles -> creare tanti figli di stile .scss suddividendo per theme, components, modules

**ENVIRONMENTS**
Qui contengono i file environments che sono utili per contenere variabili statiche utile alle build in vari ambienti oltre allo sviluppo in locale. Si possono creare più file specifici per ogni ambiente desiderato ed è importante configurarlo per bene in quanti funziona a doppio filo con angular.json e package.json dove spiegheremo in seguito.

In questi file possono contenere la base dell'URL, gli endpoints e varie configurazioni che servono in certi ambienti di rilascio e sviluppo oltre quelli di test.

**PACKAGE.JSON**
Questo file è uno dei più importanti di tutto il progetto perché definisce i pacchetti installati con le relative versioni per scaricarli e renderli eseguibili in qualsiasi ambiente oltre a fornire le librerie necessarie per rendere eseguibile il progetto oltre alle varie funzionalità aggiuntive necessari per lo sviluppo.  
Per rendere eseguibile è necessario avere npm o simile tool capace di leggere il file e rendere eseguibili in maniera automatica con semplici comandi.

Non è solo questo ma è anche "stendibile" e configurabile aggiungendo varie info come ad esempio aggiungere la versione di nodejs/npm, gli autori dello sviluppo, versione release, nome azienda e aggiungere vari comandi per diversificare l'esecuzione a seconda dell'ambiente in cui deve essere lanciato.

Quest'ultimo aspetto è importante dove è legato con i file environments e angular.json come potete vedere nei comandi del tipo `"build": "ng build"` è possibile aggiungere una concatenazione di comandi ad esempio `"build-test":"ng build --configuration test"` dove indica che c'è una build con configurazione test  usando variabili globali presenti nel file environments.test.ts oltre alle varie configurazioni nel file angular.json. Una delle prassi abbastanza comuni è quello di impostare il baseHref subito dopo il comando (es. ng build) ma queste opzioni è possibile definirli nel file angular.json

**Bonus**:  
Qui glossario su come funzionano i pacchetti con aggiornamenti ed upgrade e la differenza tra ~ e ^ [Link](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies)

**ANGULAR.JSON**
Il file angular.json al livello root di uno spazio di lavoro Angular fornisce impostazioni predefinite di configurazione a livello di spazio di lavoro e specifiche del progetto.  Questi vengono utilizzati per gli strumenti di creazione e sviluppo forniti dalla CLI Angular.

Tra le varie proprietà di questo file possiamo trovare la versione, lo schema di generazione dei file, la cli utilizzata e infine dentro "projects" abbiamo le varie configurazioni che si legano ai file di package.json ed environments. Le varie configurazioni sono definire quali fogli di stile compilare nelle build, la cartella destinazione della build, le dimensioni, i vari puntamenti, il baseHref che citavo in precedenza sotto la proprietà "architect". Sotto questa proprietà possiamo notare i nomi delle proprietà uguali quelli presenti nel file package.json dove al lancio del comando vengono settate ed eseguite le configurazioni presenti nel file angular.json e tra le varie opzioni c'è "fileReplacements" che consiste quale file di environments usare in quel specifico ambiente.

**TSCONFIG.JSON**
Quest'altro file contengono le configurazioni sul compilatore di Typescript dove è buona prassi configurarlo bene per rendere il codice leggibile, ordinato e secondo le linee guide internazionali su come scrivere codice anche per come tenere ordinato ogni singolo componente/file.

E' un elemento (specie nei progetti grandi) cardine e ha messo controlli abbastanza restrittivi per offrire qualità del codice oltre all'ordinamento dei file secondo le best pratices.

Può lavorare in accoppiata con ESLINT/PRETTIER.

**.GITIGNORE**
File importante se vuoi lavorare con git e serve ad indicare file, cartelle o gruppo di cartelle di non essere caricati nel repository di git in quanto non utili come ad esempio la gigantesca cartella di node_modules o il file package-lock.json

**BONUS**
Inoltre nel progetto generato dalla cli di Angular vengono creati anche altrettanti file per lavorare e rendere l'ambiente di lavoro ben configurato dove possiamo trovare altrettanti file importanti di cui: .eslintrc.json e .prettierrc (vengono inseriti come pacchetti aggiuntivi per lo sviluppo migliore), .gitignore etc etc  
DISLAIMER: Con le ultime versioni della cli di angular questi file NON vengono aggiunti in automatico ma bensì quando si installano questi tools e generati a sua volta i file di configurazione.

**.PRETTIERRC**
Serve a formattare i files in cui lavorate e in qualsiasi formato .ts, .scss etc etc in maniera automatica al seguito di ogni salvataggio. Ottimo per agevolare la qualità del codice automatizzato e configurabile con il salvataggio o comandi di formattazione da tastiera.

**.ESLINT**
ESLint è uno strumento di analisi del codice statico per identificare i modelli problematici presenti nel codice JavaScript. In pratica con le giuste configurazioni serve ad analizzare il codice di tutto il progetto con le best pratices di coding, lintng e qualità con un semplice comando oltre a fixarle in un secondo comando. Se configurato con il plugin del tuo IDE è possibile visualizzare gli errori in tempo reale, consigliatissimo.

**Husky**
Gli hook (husky) Git sono script che puoi configurare per essere eseguiti in determinati eventi nel ciclo di vita Git. Questi eventi includono diverse fasi di un commit, come prima di un commit (pre-commit) e dopo un commit (post-commit). Questi sono utili in quanto consentono agli sviluppatori di eseguire attività di codice personalizzato o addirittura di applicare standard automatizzando altri script per eseguire tali attività.

**BONUS**
Git: Naming conventions push

    #0000 typeWork (feat/fix)[featureName][taskName]: comment

*Alcuni esempi:*

    #1234 feat[Feature A][Create Table]: Create table with input list of array from parent component

    #999 fix[DEV][Bug]: I have fixed the bug about align of button

*Oppure*

    feat[FeatureA][1234]: comment

**Glossario:**
> - feat is for adding a new feature
> - fix is for fixing a bug
> - refactor is for changing code for peformance or convenience purpose (e.g. readibility)
> - chore is for everything else (writing documentation, formatting, adding tests, cleaning useless code etc.)

  

**SWAGGER**
Swagger serve a semplificare lo sviluppo delle API o meglio ancora avere un documento consultabile sulle API da utilizzare con le loro interfacce con simulazioni di chiamate annesse.  
Similarmente è possibile anche usare POSTMAN che ha differenti funzionalità e strumenti rispetto a swagger.
