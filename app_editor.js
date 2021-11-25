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

app.get( '/form6', ( req, res )   => {
    res.render( 'editor6' );
});

app.get( '/form5', ( req, res )   => {
    res.render( 'editor5' );
});

const currentDirectory = __dirname
console.log(currentDirectory)

