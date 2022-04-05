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
        "<p>Víctor Jones, un jóven que ya es casi un licenciado en ingeniería informática que sólo le faltan aprobar algunas asignaturas.</p></br></br>" +
        "<p>Un día, yendo a una de sus clases, escucha de otros compañeros en los pasillos un <em>cierto rumor</em> que corre sobre la receta de la inmortalidad " +
        "pero que sólo se encuentra en una zona desértica de Almería donde siempre hay mucha calima.</p>" +
        "<p>Fascinado y curioso por la idea, al acabar sus clases de la universidad <a href='final'>vuelve a su casa.</a></p>"
    ),
    final: new undum.SimpleSituation(
        "<h1>Todo lo que empieza, acaba</h1>" +
        "<p>INVENTARSE EL FINAL</p>"
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "comienzo";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
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

    system.setCharacterText("<p><span title='Poner el cursor encima de tus objetos revelará más información.'>Coloca el ratón encima de tus objetos o habilidades para más información.</span></p>");
};
