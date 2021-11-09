var chestionar = {
    section: [
        {
            text: "I. INFORMAȚII GENERALE DESPRE CINE COMPLETEAZĂ",
            questions: [
                {
                    text: "CFO. Cod unic de identificare a familiei din Observatorul copiilor din comunitate",

                    type: "number",
                    variables: ["cfo"],
                    textposition:'side'
                },
                {
                    text: "DATAF. Versiunea de Observator completată la data de...",
                    type: "date",
                    variables: ["dataf"],
                    textposition:'side'
                },
                {
                    text: "Mancarea preferata",
                    values: {
                        1: "Paine",
                        2: "Unt",
                        3: "Sarmale",
                        4: "Caviar",
                        5: "Mici",
                        6: "Sparanghel",
                    },
                    type: "select",
                    variables: ["mancare"],
                    textposition:'side',
                    textwidth:'30%'
                },
            ]
        },
        {
            text: "II. GRILA GALBENĂ DE GOSPODĂRIE",
            postext: "Grila galbenă a gospodăriei colectează informații despre toți membrii ... ... ...",
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
                            variables: ["sex1", "sex2", "sex3", "sex4", "sex5", "sex6", "sex7"],
                            elementwidth: '150px',
                            table: 2,
                            row: 1,
                            showlabels :true,
                            textposition:'side',
                            textwidth:'20%'
                        },
                        {
                            text: "Bautura preferata",
                            values: {
                                1: "Coca-Cola",
                                2: "Pepsi",
                                3: "Coniac",
                                4: "Vin",
                                5: "Bere",
                                6: "Mescal",
                                7: "Apa",
                            },
                            type: "select",
                            variables: ["bautura1", "bautura2", "bautura3", "bautura4", "bautura5", "bautura6", "bautura7"],
                            elementwidth: '140px',
                            table: 2,
                            row: 1,
                            showlabels :false,
                            textposition:'side',
                            textwidth:'20%'
                        },
                        {
                            text: "Data nașterii",
                            type: "date",
                            variables: ["dn1", "dn2", "dn3", "dn4","dn5","dn6","dn7",],
                            elementwidth: '150px',
                            table: 2,
                            row: 2,
                            showlabels :false,
                            textposition:'side',
                            textwidth:'20%'
                        },
                        {
                            text: "Vârsta în ani împliniți",
                            type: "number",
                            variables: ["age1", "age2", "age3", "age4", "age5", "age6", "age7"],
                            table: 2,
                            row: 3,
                            textposition:'side',
                            textwidth:'20%'
                        }
                    ]
                },
                {
                    text: "1.2. INFORMAȚII DESPRE RELAȚIILE DINTRE COPIII ȘI PĂRINȚII DIN GOSPODĂRIE",
                    questions: [
                        {
                            text: "Cine sunt copiii din gospodărie?",
                            postext: "Copil=persoană din gospodărie cu vârsta sub 18 ani.",
                            type: "checkbox",
                            values: {
                                1: "Da",
                                0: "Nu"
                            },
                            variables: ["kids1", "kids2", "kids3"],
                            table: 21,
                            row: 1,
                            showlabels :false,
                            elementwidth: '200px',
                            textposition:'side',
                            textwidth:'30%'
                        },
                        {
                            pretext: "Dacă copilul are mama prezentă în gospodărie,",
                            text: "Notați în dreptul copilului codul persoanei din gospodărie care este mama copilului.",
                            type: "number",
                            variables: ["codm1", "codm2", "codm3"],
                            table: 21,
                            row: 3,
                            showlabels :false,
                            textposition:'side',
                            textwidth:'30%'
                        },
                        {
                            pretext: "Dacă MAINRESP=4,",
                            text: "Notați în dreptul copilului codul persoanei din gospodărie care se ocupă, în principal, de creșterea și îngrijirea copilului.",
                            postext: "Poate fi o persoană minoră. Pentru copiii de peste 16 ani, acesta poate fi propria persoană.",
                            type: "number",
                            variables: ["mainralt1", "mainralt2", "mainralt3"],
                            table: 23,
                            row: 7,
                            showlabels :false,
                            textposition:'side',
                            textwidth:'30%'
                        }
                    ]
                }
            ]
        }
    ]
}



function load_chestionar() {
    document.getElementById('formular_content').innerHTML = '';
    for (var i = 0; i < chestionar.section.length; i++) {
        let csection = chestionar.section[i];
        section = drawSection(csection);
        document.getElementById('formular_content').appendChild(section);
    }
}

function drawSection(section) {
    console.log('Section  ' + section.text);
    // console.log(section);
    // console.log('-----------------------------------');

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
            nsect = drawSection(section.section[k]);
            section_container.appendChild(nsect);
        }
    } else {

        var questions = [];

        for (let i = 0; i < section.questions.length; i++) {
            console.log('Question: ' + section.questions[i].text);
            question = drawQuestion(section.questions[i]);
            questions.push(question);
        }
        //codul de punere in pagina a intrebarilor
        for (let h = 0; h < questions.length; h++) {
            section_container.appendChild(questions[h]);
        }
    }
    return section_container;
}

function drawQuestion(question) {
    console.log(question);
    console.log(question.variables.length);
    if (question.hasOwnProperty('variables') && question.variables.length > 1 ) {

        return drawMultiQuestion(question);
    } else  {
        return drawSingleQuestion(question);
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

function drawMultiQuestion(question) {
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

