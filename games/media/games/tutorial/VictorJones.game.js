// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "ed6b1564-3195-4d67-b212-7cdae0580379";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    comienzo: new undum.SimpleSituation(
        "<h1>Una receta para ser inmortal</h1>" +
        "<p>Víctor Jones es un jóven que ya es casi un licenciado en ingeniería informática, pues sólo le faltan aprobar algunas asignaturas.</p></br></br>" +
        "<p>Un día, yendo a una de sus clases, escucha de otros compañeros en los pasillos un <em>cierto rumor</em> que corre sobre la receta de la inmortalidad..</br></br></p>" +
        "<img src='media/img/victorjones/rumor.jpg' width='60%' class='centrado'>" +
        "<p>Compañero 1 - <em>Oye, ¿sabes que en Almería está la receta de la inmortalidad?</em></p>" +
        "<p>Compañero 2 - <em>Pero qué dices</em></p>" +
        "<p>Compañero 1 - <em>Que sí, que allí está la vida eterna. Te lo digo yo.</em></br></p>" +
        "<p>Compañero 2 - <em>¿Y cómo te has enterado tú d'eso?</em></p>" +
        "<p>Compañero 1 - <em>Pues lo escuché de un experto de inmortalidades en Youtube.</em></p>" +
        "<p>Compañero 2 - <em>¿Pero eso tié' que estar muy escondío', no?</em></p>" +
        "<p>Compañero 1 - <em>Según tengo entendido está en un lugar desértico donde siempre hay mucha calima. Lo llaman 'Oasis C'.</em></p>" +
        "<p>Compañero 2 - <em>Va a ir quié' yo me sé ha'ta allí. No te creas todo lo que está por el Interné dese'.</em></p></br>" +

        "<p>Víctor, fascinado y curioso por la idea de vivir eternamente, al acabar sus clases de la universidad <a href='casa'>vuelve a su casa</a> para coger todo lo necesario " +
        "y hacer un plan para llegar hasta allí.</p>"
    ),
    casa: new undum.SimpleSituation(
        "<p></br>Después de una larga sesión de prácticas en la universidad, Víctor entra a su habitación para recoger cosas que va a necesitar para el viaje.</br></p>" +
        "<p><img src='media/img/victorjones/habitacion.jpg' width='100%' class='centrado'></p>" +
        "<p><br>Entra muy bien los rayos de luz por la ventana, así que puede ver con claridad lo que puede llevarse de su estantería o escritorio:</p>" +
        "<p class='transient'><a href='./panuelos'>Pañuelos</a></p>" +
        "<p class='transient'><a href='./gafassol'>Gafas de sol y Botella de agua</a></p>" +
        "<p class='transient'><a href='./linterna'>Linterna</a></p>" +
        "<p class='transient'><a href='salircasa'>Salir</a></p>"
        ,{
            actions: {
                'panuelos' : function (character, system, action) {
                    if(character.qualities.linterna > 0 || character.qualities.gafassol > 0){
                        system.setQuality("panuelos",1);
                        system.doLink("salircasa");
                    }else{
                        system.setQuality("panuelos",1);
                    }
                    system.setQuality("panuelos",1);
                },
                'gafassol' : function (character, system, action) {
                    if (character.qualities.panuelos > 0 || character.qualities.linterna > 0){
                        system.setQuality("gafassol",1);
                        system.setQuality("botella",1);
                        system.doLink("salircasa");
                    }else{
                        system.setQuality("gafassol",1);
                        system.setQuality("botella",1);
                    }
                },
                'linterna' : function (character, system, action) {
                    if(character.qualities.panuelos > 0 || character.qualities.gafassol > 0){
                        system.setQuality("linterna",1);
                        system.doLink("salircasa");
                    }else{
                        system.setQuality("linterna",1);
                    }
                }
            }
        }
    ),
    salircasa: new undum.SimpleSituation(
        "<p><br/>Crees que ya has cogido lo necesario y estás listo para <a href='hub1'>irte</a></p>"),
    situationsautobus: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("dinero", character.qualities.dinero-21);
            system.write($("#EleccionAutobus").html());   
        },
        tags: ["topic1"],
        optionText: "Coger el Autobus... (21€)",
        displayOrder: 1
    }),
    
    situationstaxi: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("dinero", character.qualities.dinero-40);
            system.write($("#EleccionTaxi").html());
        },
        tags: ["topic1"],
        optionText: "Coger el Taxi... (40€)",
        displayOrder: 2
    }),
    situationsblablacar: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("dinero", character.qualities.dinero-8);
            system.write($("#EleccionBlaBlaCar").html());
        },
        tags: ["topic1"],
        optionText: "Coger el BlaBlaCar... (8€)",
        displayOrder: 3
    }),
    situationsautostop: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#EleccionAutostop").html());
        },
        tags: ["topic1"],
        optionText: "Hacer autostop... (0€)",
        displayOrder: 4
    }),
    situationopccara: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("dinero", character.qualities.dinero-18);
            if (character.qualities.dinero<0) {
                system.write($("#EleccionComidaCaraMal").html());
            } else {
                system.write($("#EleccionComidaCaraBien").html());
            }  
        },
        tags: ["topic2"],
        optionText: "Chuletón de ternera (18€)",
        displayOrder: 1
    }),
    situationopcnormal: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("dinero", character.qualities.dinero-10);
            system.write($("#EleccionComidaNormal").html());
        },
        tags: ["topic2"],
        optionText: "Nachos y quesadillas (10€)",
        displayOrder: 2
    }),
    situationopcbarata: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("dinero", character.qualities.dinero-6);
            system.write($("#EleccionComidaBarata").html());
        },
        tags: ["topic2"],
        optionText: "Menú pizza turca (6€)",
        displayOrder: 3
    }),
    situationconversacion1: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#EleccionConversacion1mal").html());
        },
        tags: ["topic3"],
        optionText: "No me interesan...",
        displayOrder: 1
    }),
    situationconversacion1part2: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#EleccionConversacion1bien").html());
        },
        tags: ["topic3"],
        optionText: "Sólo los estaba mirando...",
        displayOrder: 2
    }),
    situationconversacion2: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("dinero", character.qualities.dinero-5);
            system.write($("#EleccionConversacion2bien").html());
            system.setQuality("indalo",1);
        },

        tags: ["topic4"],
        optionText: "Me lo llevo... (5€)",
        displayOrder: 1
    }),
    situationconversacion2part2: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#EleccionConversacion2mal").html());
        },
        tags: ["topic4"],
        optionText: "No gracias, no lo voy a comprar...",
        displayOrder: 2
    }),
	situationrutacorrecta: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#EleccionRutaBuena").html());
        },
        tags: ["topic5"],
        optionText: "Carretera 24",
        displayOrder: 1
    }),
	situationrutaincorrecta: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#EleccionRutaMala").html());
        },
        tags: ["topic5"],
        optionText: "Carretera 19",
        displayOrder: 2
    }),
	situationrutaincorrecta2: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#EleccionRutaMala").html());
        },
        tags: ["topic5"],
        optionText: "Carretera 12",
        displayOrder: 3
    }),
	situationmochila: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#EleccionMochila").html());
			system.setQuality("indalo",0);
			system.setQuality("dinero", 0);
        },
        tags: ["topic6"],
        optionText: "Te colocas la mochila en la cabeza y sigues recto",
        displayOrder: 1
    }),
	situationantebrazo: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#EleccionAntebrazo").html());
        },
        tags: ["topic6"],
        optionText: "Pones tu antebrazo ante tus ojos para protegerte y sigues adelante",
        displayOrder: 2
    }),
	situationindalo: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#EleccionIndalo").html());
        },
        tags: ["topic7"],
        optionText: "Introducir el Índalo (Requiere tener el Índalo)",
        displayOrder: 1,
		canChoose: function(character, system, host) {
            return character.qualities.indalo;
        }
    }),
	situationvacio: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#EleccionVacio").html());
        },
        tags: ["topic7"],
        optionText: "No dispones de nada para probar.",
        displayOrder: 2
    }),
    vendedor: new undum.SimpleSituation(
        "<img src='media/img/victorjones/indalo.jpg' alt='imagen indalo' class='float_right imagenLogo'>"+
        "</br><p>Tras saciarte, te sientes con energía y te acuerdas que a tu prima pequeña le gustan mucho los souvenirs y cada vez que viajas intentas llevarle algo.</p>" +
        "<p></br>Dando una vuelta por el Carrefive para ver donde comprar los souvenirs, te encuentras con una sección con unos indalos que te llaman la atención y te acercas a verlos:</br></br> </p>" +
        "<p>"+
        "<img src='media/img/victorjones/desconocido.jpg' alt='Imagen de una persona desconocida' class='imagenConversacion'>"+
        " - <em>Buenas. Parece que te han llamado la atención los <a href='indalos'>indalos</a>. Son muy especiales. ¿Qué te parecen?</em>"+
        "</p>"+
        "<p class='transient'><a href='hub3'>Click para continuar...</a></p>"
    ),
    indalos: new undum.SimpleSituation(
        "<p> <em>Cuando te acercas para verlo puedes notar que no es de gran valor pero te llama la atención lo antiguo y mistico que es. Tiene un color Marroncillo y esta hecho como de piedra tallado.</em></p></br>"+
        "<p class='transient'><a href='hub3'>Click para continuar...</a></p>"
    ),
	ruta: new undum.SimpleSituation(
		"<h1>Ruta a Oasis C</h1>"+
        "<p> Después de estar un tiempo por Carrefive decides que es momento de proseguir con el viaje. No hay mucha gente por las calles así que sigues caminando. Te encuentras en una zona rural de por allí y parece que has dado con la ruta pero el caso es que hay más de una. </p>"+
        "<img src='media/img/victorjones/cruce.jpg' alt='Hay un cruce en el camino y debes elegir por dónde ir.' class='centrado'>"+
		"<p> Fijándote a tu alrededor encuentras un cartel que indica una pista del camino que debes tomar.</p>"+
		"<p class='transient'><a href='hub5'>Observar el cartel...</a></p>"
    ),
    inhospito: new undum.SimpleSituation(
        "<h1>Un lugar inhóspito</h1>" +
        "<p><a href='http://www.youtube.es/watch?v=WVSnLBKJfso'>Caminando, crees que ves a indígenas del templo con armas, por lo que te desvías a un hueco de la pared. Parece que no estás solo en el templo, pues, van a realizar un sacrificio...</a></p>" +
        "<p>Como te da muy mala espina esa situación, aprovechas que están distraídos para ir a encontrar rápido la receta de la inmortalidad y salir de allí cuánto antes.</p>" +
        "<p><br>Por fin, Víctor Jones logra ver, delante de sus narices, la receta de la inmortalidad encima de un altar de piedra. " +
        "En la sala no parece haber nada más que el altar de piedra, lo cuál es motivo para que Víctor sospeche.</p>" +
        "<p></br>Además, en este viaje sólo has pasado por una tormenta de arena, resolver puzzles muy raros, gente extraña haciendo sacrificios, lo cuál es de lo más mundano, pero ese altar te provoca ciertas sospechas. " +
        "Víctor se acerca al altar y encuentra que hay un mecanismo que detecta el peso de la receta. ¡No puede ser! Hay que sustituir la botella por algo… </p>" +
        "<img src='media/img/victorjones/indiana.jpg' alt='Hay un cruce en el camino y debes elegir por dónde ir.' class='cienxcien'></br>" +
        "<p class='transient'><a href='cogerbotella'>Intentar coger la botella.</a></br>" +
        "<a href='sustituirbotella'>Sustituir el índalo por la botella.</a></p>"
    ),
    cogerbotella: new undum.SimpleSituation(
        "<p>Tratas de coger la botella y salir corriendo, pero el mecanismo cierra todas las puertas y te encierra allí, hasta el fin de los días.</p>" +
        "<img src='media/img/victorjones/encerrado.png' alt='Hay un cruce en el camino y debes elegir por dónde ir.' class='cienxcien'>" +
        "<h1 class='gameover'>HAS PERDIDO</h1>"
    ),
    sustituirbotella: new undum.SimpleSituation(
        "<p>Todo parece ir fenomenal y sales <em>pitando</em> de allí por donde crees que es la salida.</p>" +
        "<img src='media/img/victorjones/salida.jpg' alt='Hay un cruce en el camino y debes elegir por dónde ir.' class='cienxcien'>" +
        "<p>Finalmente logras <a href='final'>salir de la cueva</a> sudando <em>'la gota gorda'</em>.</p>"
        ,{
            enter: function(character, system, from) {
                system.setQuality("indalo", 0);
            }
        }
    ),
    final: new undum.SimpleSituation(
        "<h1 class='fin'>Todo lo que empieza, acaba</h1>" +
        "<p>Por fin, Víctor Jones logra ver, delante de sus narices, la receta de la inmortalidad encima de un altar de piedra.</p>" +
        "</br><p>Ya no hay vuelta atrás. Víctor saca el corcho de la botella, y en la luz del atardecer, extiende el papel enrollado con sus dos brazos. " +
        "Sus ojos leyeron lo más rápido posible aquel escrito:</br></br></p>" +
        "<p>Víctor Jones - <em>¿Estás de guasa?.</em></p>" +
        "</br><p>A Víctor se le abrieron aún más los ojos cuando descubrió, que lo que era una receta de la inmortalidad, resultó ser nada menos que una receta para hacer churros de calidad.</p>" +
        "<img src='media/img/victorjones/receta.webp' alt='La receta de la inmortalidad es una receta para hacer churros.' class='cienxcien'>" +
        "</br><p>Estaba cansado. Le ilusionó mucho que fuese de verdad la receta de la inmortalidad aunque no se ha aburrido e incluso se ha divertido con la experiencia. " +
        "Además, Víctor es joven y aún no sabe hacerse ni un huevo frito, por lo que, valorando cuánto le ha gustado encontrar finalmente la receta, le comenta a los cuatro vientos: </br></p>" +
        "</br><p>Víctor Jones - <em>¿Para hacer churros?. Nah, de locos.</em></p>" +
        "</br><p>Acto seguido, llama a su madre para ver si le recogen y para negociar el desayuno de mañana.</p>" +
        "<img src='media/img/victorjones/atardecer.png' alt='Llamas a tu madre' class='cienxcien'>" +
        "<h1>F I N</h1>"
    ),
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "comienzo";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    dinero: new undum.IntegerQuality(
        '<span title=\"Siempre está bien llevar algo de dinero encima por si lo necesitases en alguna ocasión.\">Dinero</span>', {priority:"0001", group:'mochila'}
    ),
    indalo: new undum.OnOffQuality(
        '<span title=\"Es un recuedo para tu prima. Tiene un color marroncete y está hecho como de piedra tallada...\">Indalo</span>', {priority:"0002", group:'mochila'}
    ),
    linterna: new undum.OnOffQuality(
        '<span title=\"Es una linterna de las que necesitan las pilas más grandes que tengas.\">Linterna</span>', {priority:"0003", group:'mochila'}
    ),
    gafassol: new undum.OnOffQuality(
        '<span title=\"Esas Ray-Ban Ultra Deluxe que te regalaron y que te hacen lucir tan bien.. Son polarizadas\">Gafas de sol</span>', {priority:"0004", group:'mochila'}
    ),
    panuelos: new undum.OnOffQuality(
        '<span title=\"Nunca sabes cuando te va a asomar un moco.\">Pañuelos</span>', {priority:"0005", group:'mochila'}
    ),
    botella: new undum.OnOffQuality(
        '<span title=\"Es muy importante beber agua. Sobretodo porque lo dicen los médicos.\">Botella de agua</span>', {priority:"0006", group:'mochila'}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    mochila: new undum.QualityGroup('<span title="A lo largo de la aventura, Víctor Jones podrá recoger objetos de su entorno y llevarlo en su mochila.">Mochila</span>', {priority: "0001"}),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.dinero = 55;
    character.qualities.indalo = 0;
    character.qualities.gafassol = 0;
    character.qualities.linterna = 0;
    character.qualities.panuelos = 0;
    system.setCharacterText("<p><span title='Poner el cursor encima de tus objetos revelará más información.'>Coloca el ratón encima de tus objetos o habilidades para más información.</span></p>");
};
