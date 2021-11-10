var chestionar = {
    defaults: {
        variables_count: 5,
        textposition: 'side',
        textwidth: '300px',
        elementwidth: '100px',
        showlabels: false,
        showvar: true,
    },
    section: [
        {
            text: "I. INFORMAȚII GENERALE DESPRE CINE COMPLETEAZĂ",
            questions: [
                {
                    text: "CFO. Cod unic de identificare a familiei din Observatorul copiilor din comunitate",
                    type: "number",
                    variable: 'cfo',
                    textposition:'side'
                },
                {
                    text: "DATAF. Versiunea de Observator completată la data de...",
                    type: "date",
                    variable: 'dataf',
                    textposition:'side'
                }
            ]
        },
        {
            text: "Grila galbenă de gospodărie",
            postext: "Grila galbenă a gospodăriei colectează informații despre toți membrii gospodăriei. Indicatorii completați aici pentru fiecare persoană vor fi utilizați la calcularea riscurilor și la identificarea nevoilor de sprijin Notați codul corespunzător, respectiv X, în dreptul fiecărei persoane din gospodărie care îndeplinește condiția.",
            section: [
                {
                    text: "1.1. DATE SOCIO-DEMOGRAFICE DESPRE PERSOANELE DIN GOSPODĂRIE",
                    questions: [
                        {
                            text: "Sex",
                            values: {
                                1: "M",
                                2: "F"
                            },
                            type: "radio",
                            multivariable: true,
                            showlabels:true,
                            variables_prefix: 'sex',
                        },

                        {
                            text: "Data nașterii",
                            type: "date",
                            multivariable: true,
                            variables_prefix: 'dn',
                        },
                        {
                            text: "Vârsta în ani împliniți",
                            type: "number",
                            multivariable: true,
                            variables_prefix: 'age',
                        },
                        {
                            text: "Etnia",
                            values: {
                                1: "romana",
                                2: "maghiara",
                                3: "roma",
                                4: "germana",
                                5: "alta",
                                0: "nedeclarata",
                            },
                            type: "select",
                            multivariable: true,
                            variables_prefix: 'nat',
                        },
                        {
                            text: "Starea civila",
                            values: {
                                1: "casatorit(a)",
                                2: "concubin(a)",
                                3: "divortat(a)",
                                4: "necasatorit(a)",
                                5: "vaduv(a)",
                            },
                            type: "select",
                            multivariable: true,
                            variables_prefix: 'sciv',
                        },
                        {
                            text: "Ultimul nivel de învățământ de cel mai înalt grad absolvit",
                            values: {
                                1: "fără școală absolvită",
                                2: "primar (1- 4 clase)",
                                3: "gimnazial (5-8 clase)",
                                4: "profesional, de ucenici sau complementar",
                                5: "treapta I de liceu (clasele 9-10)",
                                6: "liceu (9-12 clase)",
                                7: "postliceal de specialitate sau tehnic de maiștri",
                                8: "universitar de scurtă durată/colegiu",
                                9: "universitar lungă durată (inclusiv masterat)",
                                10: "doctorat"
                            },
                            type: "select",
                            multivariable: true,
                            variables_prefix: 'nive',
                        },
                        {
                            text: "Statutul ocupațional principal în ultimele 12 luni",
                            values: {
                                1: "salariat, inclusiv femeile în concediu de maternitate",
                                2: "alt statut de persoană ocupată (zilier, lucrător la negru etc:)",
                                3: "patron cu salariați",
                                4: "lucrător pe cont propriu în activități neagricole (PFA, AF, liber profesionist etc:)",
                                5: "lucrător pe cont propriu in agricultură",
                                6: "ajutor familial",
                                7: "șomer înregistrat",
                                8: "șomer neînregistrat (nu mai primește ajutor de șomaj/alocație de sprijin și caută de lucru)",
                                9: "pensionar(ă) la limită de vârstă",
                                10: "alt tip de pensionar(ă)",
                                11: "elev, student (Atenție! Se includ copiii care merg la grădiniță)",
                                12: "casnică",
                                13: "persoană în incapacitate de muncă",
                                14: "alt statut de persoană inactivă (preșcolar care nu merge la grădiniță, persoană întreținută)"
                            },
                            type: "select",
                            multivariable: true,
                            variables_prefix: 'ocup',
                        },
                    ]
                },
                {
                    text: "1.2. INFORMAȚII DESPRE RELAȚIILE DINTRE COPIII și PĂRINȚII DIN GOSPODĂRIE",
                    questions: [
                        {
                            text: "Cine sunt copiii din gospodărie?",
                            postext: "Copil=persoană din gospodărie cu vârsta sub 18 ani.",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'kids',
                        },
                        {
                            text: "Copil din gospodărie cu mama acasă/prezentă",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'mdmp',
                        },
                        {
                            pretext: "Dacă copilul are mama prezentă în gospodărie,",
                            text: "Notați în dreptul copilului codul persoanei din gospodărie care este mama copilului.",
                            type: "number",
                            multivariable: true,
                            variables_prefix: 'codm',
                        },
                        {
                            text: "Copil din gospodărie cu mama care NU este acasă/prezentă",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'momnp',
                        },
                        {
                            pretext: "Dacă copilul NU are mama prezentă în gospodărie",
                            text: "Notați în dreptul copilului codul de mai jos corespunzător situației în care se află mama",
                            values: {
                                1 : "persoană plecată la muncă în străinătate",
                                2 : "persoană plecată la studii sau muncă în țară",
                                3 : "persoană decedată",
                                4 : "persoană dispărută sau declarată judecătorește decedată",
                                5 : "persoană necunoscută",
                                6 : "persoană decăzută din drepturile părintești",
                                7 : "persoană căreia i s:a aplicat pedeapsa penală a interzicerii drepturilor părintești",
                                8 : "persoană pusă sub interdicție judecătorească",
                                9 : "persoană în spital pe termen scurt (max. 45 zile)",
                                10 : "persoană în spital/ centru de îngrijire etc. pe termen lung",
                                11 : "persoană aflată în închisoare",
                                12 : "persoană divorțată/ separată și mutată",
                                100 : "altă situație"
                            },
                            type: "select",
                            multivariable: true,
                            variables_prefix: 'momprez',
                        },
                        {
                            text: "Copil din gospodărie cu tatăl acasă/prezent",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'dadp',
                        },
                        {
                            pretext: "Dacă copilul are tatal prezent în gospodărie,",
                            text: "Notați în dreptul copilului codul persoanei din gospodărie care este tatal copilului.",
                            type: "number",
                            multivariable: true,
                            variables_prefix: 'codd',
                            table: 21,
                            row: 3,
                            showlabels :false,
                            textposition:'side',
                        },
                        {
                            text: "Copil din gospodărie cu tatal care NU este acasă/prezent",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'dadnp',
                        },
                        {
                            pretext: "Dacă copilul NU are tatal prezent în gospodărie",
                            text: "Notați în dreptul copilului codul de mai jos corespunzător situației în care se află tatal",
                            values: {
                                1 : "persoană plecată la muncă în străinătate",
                                2 : "persoană plecată la studii sau muncă în țară",
                                3 : "persoană decedată",
                                4 : "persoană dispărută sau declarată judecătorește decedată",
                                5 : "persoană necunoscută",
                                6 : "persoană decăzută din drepturile părintești",
                                7 : "persoană căreia i s:a aplicat pedeapsa penală a interzicerii drepturilor părintești",
                                8 : "persoană pusă sub interdicție judecătorească",
                                9 : "persoană în spital pe termen scurt (max. 45 zile)",
                                10 : "persoană în spital/ centru de îngrijire etc. pe termen lung",
                                11 : "persoană aflată în închisoare",
                                12 : "persoană divorțată/ separată și mutată",
                                100 : "altă situație"
                            },
                            type: "select",
                            multivariable: true,
                            variables_prefix: 'dadprez',
                        },
                        {
                            text: "Copil din familie monoparentala",
                            postext: "(mamă/ tatăl + copilul sau copiii aflați în întreținere)",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'fmon',
                        },
                        {
                            text: "Copil cu un părinte acasă și cu un părinte care nu este prezent acasă (aflat în una din situațiile de la MOMPREZ/DADPREZ de mai sus)",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'acasa1',
                        },
                        {
                            text: "Copiii cu ambii parinti acasa",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'acasa2',
                        },
                        {
                            text: "Copil fără nici un părinte prezent acasă (ambii părinți se află în una din situațiile de la MOMPREZ/DADPREZ de mai sus)",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'acasad',
                        },
                        {
                            text: "Cine din familie se ocupă, în principal, de creșterea și îngrijirea copilului?",
                            values: {
                                1 : "mama",
                                2 : "tatal",
                                3 : "mama si tatal",
                                4 : "alta persoana din gospodarie",
                            },
                            type: "select",
                            multivariable: true,
                            variables_prefix: 'mainresp',
                        },
                        {
                            pretext: "Dacă MAINRESP=4",
                            text: "Notați în dreptul copilului codul persoanei din gospodărie care se ocupă, în principal, de creșterea și îngrijirea copilului.",
                            postext: "Poate fi o persoană minoră. Pentru copiii de peste 16 ani acesta poate fi propria persoană.",
                            type: "number",
                            multivariable: true,
                            variables_prefix: 'mainralt',
                        },

                    ]

                },
            ]
        },
        {
            text: "RISC 1. Situatia economica",
            section: [
                {
                    text: "ÎNTREBĂRI PENTRU FAMILIE",
                    questions : [
                        {
                            text: "În luna trecută, suma totală de bani obținută din salarii, pensii, alocații, prestații, vânzări, muncă cu ziua etc. de către toți membrii gospodăriei (inclusiv respondentul), a fost de aproximativ...",
                            type: "number",
                            variable: 'sal',
                            textwidth:'500px'
                        },
                        {
                            pretext: 'Din GRILA GALBENĂ DE GOSPODĂRIE notați....',
                            text: "Numărul total de persoane din gospodărie",
                            type: "number",
                            variable: 'gosp',
                            textwidth:'500px'
                        },
                        {
                            text: "Venitul total înregistrat luna trecută pe membru de familie este...",
                            postext: "Împărțiți venitul total (înregistrat la SAL) la numărul de membri din familie (înregistrat la GOSP).",
                            type: "number",
                            variable: 'vpp',
                            textwidth:'500px'
                        },
                        {
                            text: "În iarna trecută, familia nu și-a permis să încălzească locuința cel puțin de câteva ori pe lună și au dormit în frig (include zilnic, săptămânal)?",
                            variable: 'frg',
                            values: {
                                1: "Da",
                                2: "Nu"
                            },
                            type: "radio",
                            showlabels: true,
                            textwidth:'500px'
                        },
                        {
                            text: "În ultimele 6 luni, familia nu a avut hrană pentru copii și copiii au rămas nemâncați cel puțin de câteva ori pe lună (include zilnic, săptămânal)?",
                            variable: 'hngr',
                            values: {
                                1: "Da",
                                2: "Nu"
                            },
                            type: "radio",
                            showlabels: true,
                            textwidth:'500px'
                        },
                        {
                            text: "În ultimul an, familia a beneficiat de ajutor social (venit minim garantat)",
                            variable: 'vmg',
                            values: {
                                1: "Da",
                                2: "Nu"
                            },
                            type: "radio",
                            showlabels: true,
                            textwidth:'500px'
                        },
                        {
                            text: "În ultimul an, familia a beneficiat de alocație pentru susținerea familiei",
                            variable: 'asf',
                            values: {
                                1: "Da",
                                2: "Nu"
                            },
                            type: "radio",
                            showlabels: true,
                            textwidth:'500px'
                        },
                        {
                            text: "În ultimul an, familia a beneficiat de ajutor de urgenta",
                            variable: 'urg',
                            values: {
                                1: "Da",
                                2: "Nu"
                            },
                            type: "radio",
                            showlabels: true,
                            textwidth:'500px'
                        },
                        {
                            text: "În ultimul an, familia a beneficiat de ajutor pentru încălzirea locuinței (subvenție căldură, lemne)",
                            variable: 'lmn',
                            values: {
                                1: "Da",
                                2: "Nu"
                            },
                            type: "radio",
                            showlabels: true,
                            textwidth:'500px'
                        },
                        {
                            text: "În ultimul an, familia a primit alimente de la primărie (UE)",
                            variable: 'alue',
                            values: {
                                1: "Da",
                                2: "Nu"
                            },
                            type: "radio",
                            showlabels: true,
                            textwidth:'500px'
                        },
                        {
                            text: "În ultimul an, familia a primit servicii de zi (în cadrul unui centru de zi)",
                            variable: 'serv',
                            values: {
                                1: "Da",
                                2: "Nu"
                            },
                            type: "radio",
                            showlabels: true,
                            textwidth:'500px'
                        },
                        {
                            text: "În ultimul an, familia a primitde serviciile unei cantine sociale, masă caldă, masă pe roți",
                            variable: 'meal',
                            values: {
                                1: "Da",
                                2: "Nu"
                            },
                            type: "radio",
                            showlabels: true,
                            textwidth:'500px'
                        }
                    ]

                },
                {
                    text: "ANALIZA RISCURILOR",

                }
            ]

        },
        {
            text: "2. Situatia socială",
            section: [
                {
                    text: "Lista de întrebări pentru familie",
                    questions : [
                        {
                            text: "Mama minora",
                            postext: "Femeie cu vârsta sub 18 ani care a născut cel puțin un copil.",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'mom18',
                        },
                        {
                            text: "Minora gravida",
                            postext: "Femeie cu vârsta sub 18 ani care este însărcinată.",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'preg18',
                        },
                        {
                            text: "Copil (0-17 ani) fără certificat de naștere",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'acte1',
                        },
                        {
                            text: "Persoană (14+ ani) fără carte de identitate",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'acte2',
                        },
                        {
                            text: "Mamă a oricărui copil din gospodărie care a părăsit, de-a lungul vieții ei, un copil într-o unitate spitalicească",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'abnsp',
                        },
                        {
                            text: "Copil (0-17 ani) care a avut experiențe de migrație de peste un an – a fost plecat într-o altă țară și a revenit",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'kidmgr',
                        },
                        {
                            text: "Copil (0-17 ani) din gospodărie reintegrat în familie după ce a beneficiat de o măsură de protecție specială (care a fost plasat pentru o perioadă în sistemul de protecție, dar care este acum integrat în familie).",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'rein',
                        },
                        {
                            text: "Copil (0-17 ani) aflat în plasament",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'plas',
                        },
                    ]

                },
                {
                    text: "Copii cu părinți care nu sunt acasă de 3+ luni",
                    postext: "Se completează doar pentru copiii din gospodărie care au unul sau ambii părinți care nu sunt acasă de mai mult de trei luni, conform GRILEI GALBENE A GOSPODĂRIEI. Altfel, salt la secțiunea următoare.",
                    questions : [
                        {
                            text: "Copil care nu vorbește față în față, la telefon, pe Internet cu părintele/părinții care nu sunt acasă",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'talk',
                        },
                        {
                            text: "Copil care nu primește bani sau pachete de la părintele/părinții care nu sunt acasă",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'pac',
                        },
                        {
                            text: "Copil care nu are desemnată persoană care se ocupă de creșterea și îngrijirea lui, în condițiile în care are părintele unic îngrijitor sau ambii părinți plecați în străinătate",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'ingr',
                        },
                        {
                            text: "Copil aflat în îngrijirea familiei dar care aparține de altă familiei și pentru care nu este stabilită tutelă sau măsură de protecție",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'ttl',
                        },
                    ]

                },
                {
                    text: "Dizabilitate",
                    questions : [
                        {
                            text: "Persoana care suferă de vreo deficiență/ dizabilitate care îi limitează semnificativ calitatea vieții și participarea la viața socială",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'diz',
                        },
                        {
                            pretext: "Pentru persoanele cu dizabilități din gospodărie",
                            text: "Persoană care are certificat de încadrare în grad de handicap",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            multivariable: true,
                            variables_prefix: 'certif',
                        },
                        {
                            text: "Valabilitatea certificatului de încadrare în grad de handicap",
                            values: {
                                1 : "1 an",
                                2 : "2 ani",
                                3 : "3. permanant",
                            },
                            type: "select",
                            multivariable: true,
                            variables_prefix: 'vld',
                        },
                        {
                            text: "Grad de handicap",
                            values: {
                                1 : "grav",
                                2 : "accentuat",
                                3 : "mediu",
                                4 : "usor",
                            },
                            type: "select",
                            multivariable: true,
                            variables_prefix: 'grad',
                        },
                        {
                            pretext: "Pentru GRAD=1. grav",
                            text: "Persoană cu grad de handicap grav care beneficiază de...",
                            values: {
                                0 : "nu e cazul",
                                1 : "asistent personal",
                                2 : "indemnizatie de insotitor",
                            },
                            type: "select",
                            multivariable: true,
                            variables_prefix: 'GRAV',
                        },
                        {
                            text: "Tip de handicap",
                            values: {
                                1 : "fizic",
                                2 : "somatic",
                                3 : "auditiv",
                                4 : "vizual",
                                5 : "mental",
                                6 : "neuro-psihic",
                                7 : "asociat",
                                8 : "HIV/SIDA",
                                9 : "boli rare",
                                10 : "surdocecitate",
                            },
                            type: "select",
                            multivariable: true,
                            variables_prefix: 'GRAV',
                        },
                    ]
                },

            ]
        },
        {
            text: "RISC 2. SITUAȚIA SOCIALĂ",
            section: [
                {
                    text: "ÎNTREBĂRI PENTRU FAMILIE",
                },
                {
                    text: "ANALIZA RISC DE SEPARARE",
                },
                {
                    text: "ANALIZĂ NEVOIE DE SPRIJIN",
                }

            ]
        },
        {
            text: "3. Sănătate",
            section: [
                {
                    text: "Lista de întrebări pentru familie",
                },
                {
                    text: "3a. SĂNĂTATEA COPIILOR SUB 1 AN",
                    postext: "Se completează doar pentru copiii din gospodărie de 0-12 luni, care nu au împlinit 1 an, conform GRILEI GALBENE A GOSPODĂRIEI. Altfel, salt la secțiunea următoare.",
                },
                {
                    text: "3b. SĂNĂTATEA GRAVIDELOR",
                    postext: "Se completează doar pentru femeile însărcinate din gospodărie, dacă există. Altfel, salt la secțiunea următoare."
                },
            ]
        },
        {
            text: "RISC 3. STAREA DE SĂNĂTATE",
            section: [
                {
                    text: "ÎNTREBĂRI PENTRU FAMILIE",
                },
                {
                    text: "ANALIZA RISCURILOR",
                },
                {
                    text: "ANALIZĂ NEVOIE DE SPRIJIN",
                }

            ]
        },

        {
            text: "4. Educație",
            section: [
                {
                    text: "4. EDUCAȚIA - Lista de întrebări pentru familie",
                },
                {
                    text: "4a. EDUCAȚIA – Riscul de abandon școlar/părăsire timpurie",
                    postext: "* Elev = Copil cu vârsta între 6 și 17 ani care merge la școală (fizic\ sau online, SCHF=X sau SCHO=X)"
                },

            ]
        },
        {
            text: "RISC 4. NIVELUL DE EDUCAȚIE",
            section: [
                {
                    text: "ÎNTREBĂRI PENTRU FAMILIE",
                },
                {
                    text: "ANALIZA RISCURILOR",
                },
                {
                    text: "ANALIZĂ NEVOIE DE SPRIJIN",
                }
            ]
        },
        {
            text: "RISC 5. CONDIȚIILE DE LOCUIT",
            section: [
                {
                    text: "ÎNTREBĂRI PENTRU FAMILIE",
                },
                {
                    text: "ANALIZA RISCURILOR",
                },
                {
                    text: "ANALIZĂ NEVOIE DE SPRIJIN",
                }
            ]
        },
        {
            text: "6. Comportamente la risc - Lista de întrebări pentru familie",
            questions: [],
        },
        {
            text: "RISC 6. COMPORTAMENTELE LA RISC",
            section: [
                {
                    text: "ÎNTREBĂRI PENTRU FAMILIE",
                },
                {
                    text: "ANALIZA RISCURILOR",
                }
            ]
        },
    ]
}



function load_chestionar() {
    document.getElementById('formular_content').innerHTML = '';
    for (var i = 0; i < chestionar.section.length; i++) {
        let csection = chestionar.section[i];
        section = drawSection(csection, chestionar.defaults);
        document.getElementById('formular_content').appendChild(section);
    }
}

function drawSection(section, defaults) {
    console.log('Section  ' + section.text);

    section_title = document.createElement('div');
    section_title.innerHTML = section.text;
    section_title.classList.add('sectiontitle');
    let section_container = document.createElement('div');
    section_container.classList.add('sectioncontainer');
    section_container.appendChild(section_title);
    if(section.hasOwnProperty('postext')) {
        section_subtitle = document.createElement('div');
        section_subtitle.innerHTML = section.postext;
        section_subtitle.classList.add('sectiontsubitle');
        section_container.appendChild(section_subtitle);
    }

    if (section.hasOwnProperty('section')) {
        for(let k = 0; k < section.section.length; k++) {
            console.log('--------- section.section ----------');
            nsect = drawSection(section.section[k], defaults);
            section_container.appendChild(nsect);
        }
    } else {

        var questions = [];
        if (section.hasOwnProperty('questions')) {
            for (let i = 0; i < section.questions.length; i++) {
                console.log('Question: ' + section.questions[i].text);
                question = drawQuestion(section.questions[i], defaults);
                questions.push(question);
            }
            //codul de punere in pagina a intrebarilor
            for (let h = 0; h < questions.length; h++) {
                section_container.appendChild(questions[h]);
            }
        }
    }
    return section_container;
}

function drawQuestion(question, defaults) {
    console.log(question);
    fatquestion = fatten_question(question, defaults);
    if (question.hasOwnProperty('multivariable') && question.multivariable == true ) {
        return drawMultiQuestion(question);
    } else  {
        return drawSingleQuestion(question);
    }
}

function fatten_question(question, defaults) {
    for (var key in defaults) {
        if (!question.hasOwnProperty(key)) {
            question[key] = defaults[key];
        }
    }
}


function drawSingleQuestion(question) {
    qcontainer = document.createElement('div');
    qcontainer.classList.add('sectionelement');
    var template = '';
    if (question.hasOwnProperty('textposition') && question.textposition == 'side') {
        template = 'QUESTION_SIDE_' + question.type;
    } else {
        template = 'QUESTION_SIDE_' + question.type;
    }
    let rendered = ejs.render(eval(template), question);

    qcontainer.innerHTML =rendered;

    if (window.hasOwnProperty('debug_chestionar') && window.debug_chestionar) {
        templatename = document.createElement('div');
        templatename.classList.add('templateview');
        templatename.innerHTML = 'Template: ' + template;
        qcontainer.appendChild(templatename);
    }
    return qcontainer;
}

function drawMultiQuestion(question, defaults) {
    qcontainer = document.createElement('div');
    qcontainer.classList.add('sectionelement');
    var template = '';
    if (question.hasOwnProperty('textposition') && question.textposition == 'side') {
        template = 'MULTIQUESTION_SIDE_' + question.type;
    } else {
        template = 'MULTIQUESTION_' + question.type;
    }
    let rendered = ejs.render(eval(template), question);

    qcontainer.innerHTML =rendered;

    if (window.hasOwnProperty('debug_chestionar') && window.debug_chestionar) {
        templatename = document.createElement('div');
        templatename.classList.add('templateview');
        templatename.innerHTML = 'Template: ' + template;
        qcontainer.appendChild(templatename);
    }
    return qcontainer;

}

function completeaza_variabile() {
    console.log('completeaza_variabile');
    var answers = [];
    var variables = document.getElementsByClassName('varanswer');
    console.log('-------------------------------------');
    //radio e special
    for (var i =0; i < variables.length; i++) {

        console.log('vtype :' + variables[i].dataset.vtype);
        if (variables[i].dataset.vtype == 'radio') {
            //aici avem radiogroup
            console.log('====== ze have radiogroup =======');
            let varname = variables[i].dataset.var;
            console.log(varname);
            let radios = document.getElementsByName(varname);

            let value = null;
            for(var k = 0; k < radios.length; k++) {
                if(radios[k].checked)
                    value = radios[k].value;
            }
            answers.push({name: varname, value: value});
        } else {
            console.log('----');
            console.log(variables[i]);
            let varname = variables[i].dataset.var;
            let value = variables[i].value;
            answers.push({name: varname, value: value});
        }
    }
    document.getElementById("ansjson").innerHTML = jsonViewer(answers, true);
}

