# Linee di guida come impostare il progetto Angular oltre allo sviluppo etico seguendo le best practices

`AGGIORNAMENTO: Angular 17 ora disponibile con le nuove funzionalità Signal e Standalone`

**Premessa**: Queste linee guida sono il risultato della mia esperienza personale in vari progetti Angular, integrate con riferimenti online. Servono come base di riferimento per impostare progetti scalabili, performanti e di qualità senza limitare la creatività nello sviluppo. Mi riferisco in particolare a progetti di grandi dimensioni che necessitano di una strutturazione ben definita.

Per lavorare e comprendere al meglio il framework Angular è strettamente consigliato avere le basi di:

> *Angular, **Signals e Standalone**, JavaScript, TypeScript, HTML, CSS/SCSS, RESTFull/API, RxJs, JSON, GIT*


*OPTIONAL*: *NgRx*

------------
# Signals

In Angular, i "signals" possono essere considerati come eventi o notifiche che vengono emessi da componenti o servizi per comunicare cambiamenti o azioni all'interno dell'applicazione. Questi "signals" fungono da meccanismo per la comunicazione tra i diversi elementi dell'applicazione, eliminando la necessità di utilizzare `@Input`, `@Output` e il meccanismo di change detection per passare dati tra i componenti.

Il vantaggio principale nell'utilizzo dei "signals" in Angular è che consentono una comunicazione efficiente e decoupling tra i componenti. Ciò significa che i componenti possono interagire tra loro senza dover avere una conoscenza diretta l'uno dell'altro. Ad esempio, un componente può emettere un "signal" quando avviene un'azione specifica, e altri componenti possono reagire a quel "signal" senza dover sapere i dettagli interni del componente che ha emesso il "signal".

Questo approccio promuove la modularità e la riutilizzabilità del codice, in quanto i componenti possono essere progettati in modo indipendente l'uno dall'altro e possono essere facilmente sostituiti o modificati senza influenzare altri componenti. Inoltre, favorisce una migliore organizzazione del codice e una maggiore manutenibilità, in quanto le responsabilità di ciascun componente rimangono chiare e limitate al proprio scopo specifico.

### Built-in Control Flow

I Built-in Control Flow (Controllo del Flusso Integrato) in Angular sono una nuova funzionalità introdotta nella versione 17 che offre un modo più intuitivo e conciso per gestire il flusso di controllo all'interno dei template. In precedenza, era necessario utilizzare direttive come *ngIf, *ngFor e ngSwitch per mostrare o nascondere elementi, iterare su collezioni e gestire le condizioni all'interno dei template.

Con i Built-in Control Flow, è possibile ottenere lo stesso risultato utilizzando una sintassi più semplice e leggibile, basata su blocchi di codice identificati da speciali prefissi.

***Vantaggi dei Built-in Control Flow:***

- Sintassi più semplice e leggibile: I blocchi di codice con prefissi come @if, @for e @switch rendono il template più intuitivo e facile da comprendere.
- Migliore manutenzione: La logica del flusso di controllo è separata dalla struttura del template, facilitando la modifica e la riutilizzabilità del codice.
- Riduzione del codice ridondante: La sintassi concisa elimina la necessità di utilizzare direttive come *ngIf e *ngFor, riducendo la complessità del template.
- Migliore performance: L'ottimizzazione del compilatore Angular può generare codice più efficiente per i template che utilizzano i Built-in Control Flow.

I Built-in Control Flow rappresentano un passo avanti significativo nella semplificazione e nell'ottimizzazione del flusso di controllo all'interno dei template Angular. Imparando a utilizzarli correttamente, potrai migliorare la leggibilità, la manutenzione e le performance delle tue applicazioni Angular.


------------

***Come creare il progetto da zero***

Avere installata nella vostra macchina:
- NodeJS
- Gestore versioni di nodejs come ad es. NVM, NVS etc etc (Utilissimo per switchare di versione a seconda del progetto da lavorare)

Con il vostro gestore di nodejs scegliete la versione adatta alla versione di Angular ed è consultabile nella doc ufficiale di Angular [Link](https://angular.io/guide/versions)

Scegli una cartella in cui creare il progetto, poi esegui il comando da terminale: "ng new nome-progetto" e segui le indicazioni fornite dal terminale. Ad esempio, seleziona il formato di stile desiderato (CSS, SCSS, ecc.) e decidi se abilitare o meno la creazione automatica del routing (di solito consigliato).

Il progetto, situato nella cartella "app", contiene i file di base per rendere eseguibile una versione semplice dell'applicativo.

Conformemente alle linee guida di Angular, è consigliabile organizzare la struttura del progetto seguendo la suddivisione in tre cartelle principali sotto "app": Core, Features e Shared. Ciascuna di queste cartelle dovrebbe avere ulteriori sottocartelle per una migliore distinzione dei file. In passato, si faceva riferimento ai moduli per organizzare il codice, tuttavia, con le ultime versioni di Angular, si preferisce fare riferimento alle cartelle per gestire e condividere i componenti standalone in modo più efficiente.

-   **Core**: Questa cartella contiene file e cartelle che impattano sull'intero sistema e durante tutto il ciclo di vita dell'applicativo. Può includere Interceptors, Guards, Footer, Header, Spinner, ecc.
-   **Shared**: Questa cartella comprende file e cartelle di elementi che vengono riutilizzati in più parti del progetto. Ad esempio, direttive, pipes, componenti riutilizzabili (come pulsanti, div particolari, menu a tendina), modali, modelli, ecc.
-   **Features**: -   Questa è la struttura portante dell'applicativo, dove si definisce la struttura dell'applicazione con i suoi sotto-moduli e rotte ben definite.

La pratica di gestire un insieme di componenti raggruppandoli in sotto-moduli è fortemente consigliata. Questo approccio consente di sfruttare la tecnologia del lazy loading mediante il routing, migliorando le performance dell'applicazione e riducendo il carico di caricamento dei file.

#### N.B.
Se avete scaricato il repository con la struttura ben definita, è sufficiente eseguire l'installazione dei pacchetti tramite il comando `npm install` e prendere spunto dal repository così com'è strutturato, seguendo le linee guida indicate nella sezione precedente.

------------

**BONUS**

~~**Guards**: Le guardie sono utilizzate per impedire l'accesso a determinate rotte in assenza di autorizzazioni specifiche, offrendo un controllo di sicurezza efficace sia durante la procedura di accesso sia nella gestione dei token.~~
Con l'evoluzione di Angular, si sta incoraggiando l'uso più diretto e semplificato dei metodi come `canActivate` direttamente nel routing per gestire il controllo di accesso e il caricamento della rotta in base al valore booleano sottoscritto. Questo non significa che le "guards" tradizionali siano obsolete o deprecate, ma che c'è un'alternativa più conveniente e moderna per implementare questa funzionalità nelle nuove versioni di Angular.

**Interceptors**: Gli interceptors sono utilizzati per gestire i flussi di ingresso e uscita delle chiamate REST. Risultano particolarmente utili per la gestione degli errori, la manipolazione dei token e varie funzionalità relative alla gestione delle richieste e delle risposte.

## Come lavorare con i Servizi
Nella cartella CORE, i servizi dovrebbero essere posizionati a livello globale per gestire aspetti come la gestione utenze, chiamate API globali, utility, ecc. Si consiglia di utilizzare un provider globale o l'iniezione in un'unica istanza per questi servizi.

Per quanto riguarda altri servizi, è consigliabile definirli nelle cartelle dove vi sono componenti che richiedono funzionalità specifiche, incluse nelle sotto-cartelle, iniettandoli mediante providers a livello della struttura o del componente, a seconda dell'utilizzo e della complessità.

Hai ragione, ho erroneamente incluso il termine "modulo" nella mia risposta. In realtà, con l'approccio standalone, i concetti di "moduli" non sono rilevanti. Ecco una versione corretta della frase:

Se un servizio richiede l'utilizzo di un altro servizio proveniente da una diversa cartella CORE, è una pratica comune utilizzare un servizio intermedio per facilitare la comunicazione dal componente al servizio finale. Questo intermediario può essere un "facade" service, garantendo che il componente non debba subire refactoring in futuro nel caso in cui si verifichino cambiamenti nei servizi o nei metodi finali.

Conviene adottare uno schema di servizi dedicato esclusivamente alla gestione delle chiamate API e organizzarli seguendo una struttura simile a quella dei moduli, evitando di aggregarli in un unico file. Lo stesso principio si applica al raggruppamento degli endpoint in vari ENUM, organizzati in base alle rispettive funzionalità.

Alcuni esempi di gestione Servizi in un progetto, dove abbiamo questo scenario:

    Core -> Services -> callApi.service  

    Features -> FeatureA -> featureA.service e featureAFacade.service

    Features -> FeatureA -> featureA.component  

Se il componente "FeatureA" desidera effettuare una richiesta GET, dovrebbe chiamare il "FeatureAFacade", il quale a sua volta importa il servizio "CallApiService" con il suo metodo GET.

Se il componente deve manipolare dati complessi, è consigliabile delegare tali funzionalità al servizio "FeatureAService", poiché queste operazioni sono specifiche e rientrano nell'ambito della FeatureA.

## Come lavorare con Componenti
Vi sono due categorie di componenti: Smart e Dumb

I componenti Smart sono quelli che includono una parte di "Business Logic" per guidare l'interazione funzionale con l'utente. Si occupano di delegare funzioni complesse o chiamate API ai servizi predisposti. Inoltre, il componente Smart esegue operazioni come la gestione della validità della form, il controllo dei pulsanti e di varie parti della form in base alle condizioni. Le operazioni più semplici, come l'iterazione di un array o la visualizzazione di una grande tabella, sono invece delegate al componente DUMB.

I componenti Dumb sono solitamente componenti riciclabili, spesso inclusi nella cartella Shared, o sottocomponenti dei componenti Smart. Questi componenti non svolgono altro che ricevere dati in input e visualizzarli. Inoltre, restituiscono in output le interazioni dell'utente, come ad esempio la selezione di una riga in una tabella. In sintesi, i componenti Dumb non devono contenere alcuna logica e si limitano a visualizzare dati, gestendo solo gli output relativi alle interazioni dell'utente.

Inoltre, è importante saper creare un insieme di componenti che riguardano una specifica Feature, suddividendoli in sotto-componenti. È vantaggioso integrare anche componenti riutilizzabili per evitare ridondanze e promuovere una maggiore coerenza e manutenibilità del codice.

**Bonus**:
Come da avviso, i componenti, servizi, direttive, ecc., sono tutti disponibili in forma standalone, dove non è necessario dichiararli nei moduli. "Standalone" in questo contesto significa che i componenti, i servizi, le direttive, ecc., sono progettati per essere indipendenti dai moduli e possono essere utilizzati direttamente senza essere dichiarati esplicitamente in un modulo. È sufficiente importarli nell'apposito selettore "imports" nel caso dei componenti, oppure "providers" nel caso dei servizi, direttive, ecc., del componente che ne intende usufruire. Questo approccio permette di rendere il progetto più leggero, evitando la necessità di definire moduli, e facilita la manipolazione di tutti i componenti.

## Come lavorare con direttive, pipes, modali etc etc

Come accennato in precedenza, queste funzionalità servono a semplificare la vita del programmatore, creando funzionalità riutilizzabili e "customizzabili" per rendere il progetto configurabile e richiedere meno codice possibile. Le direttive sono particolarmente utili per gestire porzioni specifiche di HTML, come ad esempio colorare un testo selezionato. Le Pipe sono invece fondamentali per trasformare oggetti o valori in un output specifico, come la conversione di ENUM in stringhe. I componenti riutilizzabili, a loro volta, possono rappresentare porzioni di UI, come una drop-down generica, dove è sufficiente passare una lista di oggetti con proprietà "id" e "value".

Tutti questi elementi vengono dichiarati nella cartella "Shared", che a sua volta viene esportato e importato in qualsiasi componente che necessiti di queste funzionalità. Questo approccio contribuisce alla riutilizzabilità delle funzionalità comuni in tutto il progetto.

**BONUS**  
Per una best practice, si consiglia di limitare la lunghezza di ciascun file a un massimo di 400 righe di codice. Questo aiuta a garantire la leggibilità, la manutenibilità, a prevenire bug e facilita il riutilizzo del codice.

Nel progetto sono presenti altri file di configurazione e altre cartelle importanti da conoscere e sapere come funzionano.

## Folders & files structural
**ASSETS**

La cartella `assets` è destinata a contenere metadati o contenuti per l'interfaccia utente del progetto. Qui vengono definiti gli stili, i font, le immagini, icone personalizzate, i file di internazionalizzazione (i18n), ecc. Si consiglia anche di suddividere questi elementi in più file per una migliore organizzazione. Ad esempio, sotto la cartella "assets", è consigliabile creare una struttura come "Styles" con sottocartelle tematiche, componenti e moduli, in modo da organizzare in modo efficiente i file di stile.

------------

**ENVIRONMENTS**

All'interno della cartella, si trovano i file `environments` utili per contenere variabili statiche necessarie alle build nei diversi ambienti oltre allo sviluppo locale. È possibile creare file specifici per ciascun ambiente desiderato ed è importante configurarli attentamente, poiché interagiscono con angular.json e package.json, come verrà spiegato in seguito.

Questi file possono includere informazioni come la base dell'URL, gli endpoints e varie configurazioni specifiche per determinati ambienti di rilascio, sviluppo e test.

------------

**PACKAGE.JSON**

Il file `package.json` è uno dei più importanti dell'intero progetto in quanto definisce i pacchetti installati con le relative versioni. Questa definizione consente di scaricarli e renderli eseguibili in qualsiasi ambiente. Inoltre, fornisce le librerie necessarie per rendere il progetto eseguibile, insieme a varie funzionalità aggiuntive necessarie per lo sviluppo.


Per rendere eseguibile il progetto, è necessario disporre di npm o di un tool simile in grado di leggere il file package.json e di rendere eseguibili i pacchetti in maniera automatica attraverso comandi semplici.

Inoltre, il file package.json non è solo essenziale per la gestione delle dipendenze, ma è anche estendibile e configurabile. È possibile aggiungere informazioni come la versione di Node.js/npm, gli autori dello sviluppo, la versione di rilascio, il nome dell'azienda e vari comandi per diversificare l'esecuzione in base all'ambiente in cui deve essere lanciato. Questa flessibilità rende il file package.json uno strumento cruciale per la configurazione e la gestione del progetto.

Quest'ultimo aspetto è importante ed è collegato ai file environments e a angular.json, come evidenziato nei comandi del tipo `"build": "ng build"`. È possibile aggiungere concatenazioni di comandi, ad esempio `"build-test": "ng build --configuration test"`, dove si indica che c'è una build con configurazione test utilizzando variabili globali presenti nel file environments.test.ts, oltre alle diverse configurazioni specificate in angular.json.

Una pratica comune è impostare il baseHref subito dopo il comando (ad esempio, `ng build`). Tuttavia, queste opzioni possono essere definite nel file angular.json, offrendo una maggiore flessibilità nella configurazione del processo di build.

**NB**: Eseguite il comando `lint-prettier` per osservare in azione i processi di linting e prettier, i quali verranno spiegati dettagliatamente nelle sezioni successive.

**Bonus**:  
Qui il glossario su come funzionano i pacchetti con aggiornamenti ed upgrade e la differenza tra ~ e ^ [Link](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies)

------------

**ANGULAR.JSON**

Il file `angular.json` al livello root di uno spazio di lavoro Angular fornisce impostazioni predefinite di configurazione a livello di spazio di lavoro e specifiche del progetto.  Questi vengono utilizzati per gli strumenti di creazione e sviluppo forniti dalla CLI Angular.

Tra le varie proprietà di questo file, possiamo trovare la versione, lo schema di generazione dei file, la CLI utilizzata e, infine, all'interno di "projects", abbiamo le varie configurazioni che si collegano ai file `package.json` ed `environments`. Le configurazioni includono la definizione di quali fogli di stile compilare durante le build, la cartella di destinazione delle build, le dimensioni, i vari puntamenti e il `baseHref` menzionato in precedenza sotto la proprietà "architect". Nella sezione "architect", i nomi delle proprietà coincidono con quelli presenti nel file `package.json`, dove al lancio del comando vengono impostate ed eseguite le configurazioni presenti nel file `angular.json`. Tra le varie opzioni, c'è "fileReplacements", che specifica quale file di `environments` utilizzare in un ambiente specifico.

------------

**TSCONFIG.JSON**

Questo file contiene le configurazioni relative al compilatore di TypeScript. È una buona prassi configurarlo attentamente per garantire che il codice sia leggibile, ordinato e rispetti le linee guida internazionali sullo stile di scrittura del codice, inclusa la corretta organizzazione di ogni singolo componente o file.

Questo elemento è fondamentale, soprattutto nei progetti di grandi dimensioni, e impone controlli restrittivi per garantire la qualità del codice, oltre a organizzare i file secondo le best practices. Può lavorare in tandem con ESLint/Prettier, contribuendo a mantenere un elevato standard qualitativo del codice e una struttura ben organizzata.

------------

**.GITIGNORE**

Il file `.gitignore` è di grande importanza quando si lavora con Git. Serve per indicare a Git di non tracciare o caricare nel repository determinati file, cartelle o gruppi di cartelle che potrebbero non essere necessari o desiderati. Un esempio comune è l'inclusione di linee nel `.gitignore` per escludere la gigantesca cartella `node_modules` o il file `package-lock.json`, che possono essere generati durante la gestione delle dipendenze di un progetto Node.js. Questo aiuta a mantenere il repository più pulito, più leggero e a evitare l'inclusione di file superflui durante la condivisione del codice.

**BONUS**
Inoltre, nel progetto generato dalla CLI di Angular, vengono creati anche numerosi file per configurare l'ambiente di lavoro in modo efficace. Tra questi, troviamo file importanti come `.eslintrc.json` e `.prettierrc`, che vengono aggiunti come pacchetti aggiuntivi per migliorare lo sviluppo. Altri esempi di file fondamentali includono `.gitignore`, etc.

*DISCLAIMER*: Con le ultime versioni della CLI di Angular, questi file NON vengono più aggiunti automaticamente al momento della creazione del progetto, ma vengono generati quando si installano gli strumenti associati, come ESLint e Prettier, e vengono successivamente configurati.

------------

**.PRETTIERRC**

Il file `.prettierrc` è utilizzato per configurare Prettier e formattare automaticamente i file in cui si lavora, indipendentemente dal formato come .ts, .scss, ecc. Questo processo di formattazione automatica avviene al salvataggio del file, contribuendo a mantenere una buona qualità del codice. La configurazione di Prettier è altamente personalizzabile e può essere adattata alle esigenze specifiche del progetto. Inoltre, può essere configurato per eseguire la formattazione automatica con il salvataggio o mediante comandi di formattazione da tastiera, offrendo un modo flessibile e comodo di gestire la formattazione del codice.

------------

**.ESLINT**

ESLint è uno strumento di analisi del codice statico progettato per identificare i modelli problematici presenti nel codice JavaScript. Con le giuste configurazioni, ESLint analizza il codice dell'intero progetto, applicando le best practices di coding, linting e garantendo la qualità del codice mediante un semplice comando. Inoltre, con un secondo comando, è possibile correggere automaticamente i problemi segnalati. Se configurato con il plugin del tuo IDE, ESLint può anche visualizzare gli errori in tempo reale, fornendo un feedback immediato durante lo sviluppo. Questo strumento è altamente consigliato per migliorare la qualità e la coerenza del codice JavaScript.

------------

**Husky**

Gli hook Git (Husky) sono script che è possibile configurare per essere eseguiti in determinati eventi nel ciclo di vita di Git. Questi eventi includono diverse fasi di un commit, come prima di un commit (pre-commit) e dopo un commit (post-commit). Gli hook sono utili poiché consentono agli sviluppatori di eseguire attività di codice personalizzate o addirittura di applicare standard automatizzando altri script per eseguire tali attività. Husky facilita l'integrazione di questi hook nel flusso di lavoro di Git, contribuendo a mantenere uno standard elevato durante il processo di sviluppo.

**NB**: Il progetto è appositamente lasciato con codice non pulito e disordinato, con molte correzioni da fare utilizzando prettier/eslint prima di effettuare una commit/push. Questo è fatto appositamente per consentire di prendere confidenza con le best practice di codifica e garantire che il codice sia ben formattato e conforme agli standard prima di essere condiviso o integrato nel repository.

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

------------

**SWAGGER**
Swagger serve a semplificare lo sviluppo delle API fornendo un documento consultabile sulle API utilizzabili con le relative interfacce, inclusi dettagli e simulazioni di chiamate annesse. Questo strumento facilita la comprensione e l'interazione con le API durante lo sviluppo.

È anche possibile utilizzare POSTMAN, che offre funzionalità e strumenti differenti rispetto a Swagger, ma anch'esso è un valido strumento per testare e interagire con le API. Entrambi, Swagger e POSTMAN, sono risorse utili durante il processo di sviluppo API, ciascuno con le proprie caratteristiche specifiche.

## Gestione Branch
In questa immagine, potete prendere spunto su come lavorare e gestire i branch, dall'ambiente di sviluppo fino alla produzione, includendo anche la gestione dei bug con i relativi responsabili e approvatori. (credit Alessandro Monno)
![Image](https://i.ibb.co/DkxD7Rv/branches.png)
