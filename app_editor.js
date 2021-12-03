const express = require( 'express');
const app = express();
const port = 8001;
const path = require( "path" );

app.use( '/static', express.static( __dirname + '/public' ));

app.set( "view engine", "ejs");
app.set( "views", __dirname + "/views" );
app.get( '/', ( req, res )   => {
    res.render( "upload");
});
// 파이썬의 managepy 서버 열어라 app도 변수, express도 불러온 함수
app.listen( port, () => {
    console.log("8001!");
} );

app.get( '/form', ( req, res )   => {
    res.render( 'editor2' );
});
app.get( '/form4', ( req, res )   => {
    res.render( 'editor4' );
});
//simple and free
app.get( '/form6', ( req, res )   => {
    res.render( 'editor6' );
});

app.get( '/form61', ( req, res )   => {
    res.render( 'editor61' );
});

app.get( '/form7', ( req, res )   => {
    res.render( 'editor7' );
});
//light prism
app.get( '/form8', ( req, res )   => {
    res.render( 'editor8' );
});
// dark prism
app.get( '/form9', ( req, res )   => {
    res.render( 'editor9' );
});
//codemirror
app.get( '/form92', ( req, res )   => {
    res.render( 'editor92' );
});
app.get( '/form93', ( req, res )   => {
    res.render( 'editor93' );
});
app.get( '/form95', ( req, res )   => {
    res.render( 'editor95' );
});

app.get( '/form5', ( req, res )   => {
    res.render( 'editor5' );
});

app.get( '/new1', ( req, res )   => {
    res.render( 'new1' );
});
app.get( '/new2', ( req, res )   => {
    res.render( 'new2' );
});
app.get( '/flat', ( req, res )   => {
    res.render( 'editorflatdesign' );
});

const currentDirectory = __dirname
console.log(currentDirectory)


app.get( '/form9', ( req, res )   => {
    var textarea = document.getElementById('editor');
    var editor = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true,
        lineWrapping: true,
        theme: "eclipse",
        val: textarea.value
    });


    res.render( 'editor9' );
});

