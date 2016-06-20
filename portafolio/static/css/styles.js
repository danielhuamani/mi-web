import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "[class^=\"icon-\"]": {
        "fontFamily": "'icomoon' !important",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "[class*=\" icon-\"]": {
        "fontFamily": "'icomoon' !important",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "icon-bitbucket:before": {
        "content": "\\e900"
    },
    "icon-angular path1:before": {
        "content": "\\e901",
        "color": "#dd0031"
    },
    "icon-angular path2:before": {
        "content": "\\e902",
        "marginLeft": -1,
        "color": "#c3002f"
    },
    "icon-angular path3:before": {
        "content": "\\e903",
        "marginLeft": -1,
        "color": "#fff"
    },
    "icon-1416364765_java_coffee_x_cup_application:before": {
        "content": "\\e904"
    },
    "icon-JQuery_logo:before": {
        "content": "\\e905"
    },
    "icon-js:before": {
        "content": "\\e906"
    },
    "icon-Python_logo:before": {
        "content": "\\e907"
    },
    "icon-facebook:before": {
        "content": "\\e908"
    },
    "icon-whatsapp:before": {
        "content": "\\e909"
    },
    "icon-twitter:before": {
        "content": "\\e90a"
    },
    "icon-youtube:before": {
        "content": "\\e90b"
    },
    "icon-github:before": {
        "content": "\\e90c"
    },
    "icon-wordpress:before": {
        "content": "\\e90d"
    },
    "icon-skype:before": {
        "content": "\\e90e"
    },
    "icon-linkedin2:before": {
        "content": "\\e90f"
    },
    "icon-html-five:before": {
        "content": "\\e910"
    },
    "icon-css3:before": {
        "content": "\\e911"
    },
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ul li": {
        "listStyleType": "none"
    },
    "a": {
        "textDecoration": "none"
    },
    "cnt-general": {
        "width": "98%",
        "maxWidth": 1020,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "btn": {
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15,
        "fontFamily": "'Lato', sans-serif",
        "borderRadius": 4
    },
    "btn-primary": {
        "background": "#1c2833",
        "color": "#fff",
        "transition": "0.3s ease all"
    },
    "btn-primary:hover": {
        "background": "#ea5455"
    },
    "header": {
        "position": "fixed",
        "top": 0,
        "zIndex": 1100,
        "background": "#1c2833",
        "width": "100%"
    },
    "header:before": {
        "content": ""
    },
    "header cnt-general": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between"
    },
    "header cnt-general h1logo": {
        "fontSize": 32,
        "fontFamily": "'Lato', sans-serif",
        "color": "#fff"
    },
    "header cnt-general navmenu-principal ul": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-around"
    },
    "header cnt-general navmenu-principal ul li a": {
        "display": "block",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "color": "#fff",
        "fontFamily": "'Lato', sans-serif",
        "fontSize": 18,
        "transition": "0.2s all ease",
        "fontWeight": "400",
        "borderBottom": "5px solid transparent"
    },
    "header cnt-general navmenu-principal ul li:hover a": {
        "background": "#ea5455"
    },
    "presentacion": {
        "backgroundImage": "url(\"../img/perfil-2.jpeg\")",
        "marginTop": 66,
        "paddingTop": 30,
        "paddingBottom": 30,
        "backgroundSize": "cover",
        "position": "relative",
        "height": 300
    },
    "presentacion:after": {
        "content": "",
        "width": "100%",
        "height": "100%",
        "background": "#000",
        "opacity": 0.6,
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "presentacion cnt-general": {
        "position": "relative",
        "zIndex": 2,
        "display": "flex",
        "alignItems": "center",
        "height": "100%",
        "justifyContent": "center"
    },
    "presentacion cnt-general links": {
        "marginTop": 40
    },
    "presentacion cnt-general links ul": {
        "display": "flex",
        "justifyContent": "space-around"
    },
    "presentacion cnt-general links ul li": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 10
    },
    "presentacion cnt-general links ul li a": {
        "borderRadius": 5,
        "transition": "0.3s ease all",
        "paddingTop": 8,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 24
    },
    "presentacion cnt-general links ul li a i": {
        "color": "#fff"
    },
    "presentacion cnt-general links ul li abitbucket:hover": {
        "background": "#205081"
    },
    "presentacion cnt-general links ul li agithub:hover": {
        "background": "#000"
    },
    "presentacion cnt-general links ul li afacebook:hover": {
        "background": "#365899"
    },
    "presentacion cnt-general links ul li ayoutube:hover": {
        "background": "#cc181e"
    },
    "presentacion cnt-general links ul li alinkedin:hover": {
        "background": "#00a0dc"
    },
    "presentacion cnt-general page": {
        "paddingTop": 30,
        "paddingRight": 50,
        "paddingBottom": 30,
        "paddingLeft": 50,
        "position": "relative",
        "border": "1px solid #fff",
        "borderBottom": "none"
    },
    "presentacion cnt-general page:after": {
        "content": "",
        "left": 0,
        "bottom": 0,
        "position": "absolute",
        "width": 50,
        "height": 1,
        "background": "#fff"
    },
    "presentacion cnt-general page:before": {
        "content": "",
        "right": 0,
        "bottom": 0,
        "position": "absolute",
        "width": 50,
        "height": 1,
        "background": "#fff"
    },
    "presentacion cnt-general page h2": {
        "color": "#fff",
        "fontFamily": "'Lato', sans-serif",
        "fontSize": 42,
        "textAlign": "center",
        "marginBottom": 10
    },
    "presentacion cnt-general page h3": {
        "color": "#fff",
        "fontFamily": "'Lato', sans-serif",
        "fontSize": 28,
        "textAlign": "center",
        "position": "absolute",
        "bottom": -12,
        "left": 0,
        "right": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "letterSpacing": 2
    },
    "presentacion cnt-general figure": {
        "marginRight": 60,
        "width": 250
    },
    "presentacion cnt-general figure img": {
        "borderRadius": "50%",
        "width": 250,
        "height": "auto"
    },
    "presentacion cnt-general descripcion": {
        "fontSize": 20,
        "color": "#fff",
        "lineHeight": 28,
        "fontFamily": "'Lato', sans-serif"
    },
    "h2title": {
        "marginBottom": 50,
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "fontSize": 30,
        "color": "#1c2833",
        "fontFamily": "'Lato', sans-serif",
        "borderBottom": "2px solid #ea5455"
    },
    "perfil": {
        "background": "#f6f6f6",
        "paddingTop": 50,
        "paddingBottom": 30
    },
    "perfil mis-hablidades": {
        "marginTop": 50
    },
    "perfil mis-hablidades cnt-skill": {
        "display": "flex",
        "justifyContent": "space-between",
        "flexWrap": "wrap"
    },
    "perfil mis-hablidades cnt-skill skill": {
        "borderRadius": 5,
        "width": "28%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "background": "#1c2833"
    },
    "perfil mis-hablidades cnt-skill skill title-skill": {
        "background": "#ea5455",
        "textAlign": "left",
        "color": "#fff",
        "width": "60%",
        "borderRadius": 5,
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 8,
        "paddingLeft": 15
    },
    "perfil mis-hablidades cnt-skill skill title-skill span": {
        "fontSize": 16,
        "textTransform": "uppercase",
        "display": "inline-block",
        "fontFamily": "'Lato', sans-serif"
    },
    "perfil mis-hablidades cnt-skill skill title-skill span i": {
        "fontSize": 20,
        "marginRight": 8
    },
    "perfil cnt-general": {
        "textAlign": "center"
    },
    "perfil cnt-general descripcion": {
        "fontFamily": "'Open Sans', sans-serif"
    },
    "perfil cnt-general detalle-avatar": {
        "marginTop": 40,
        "display": "flex",
        "justifyContent": "center"
    },
    "perfil cnt-general detalle-avatar figure": {
        "marginRight": 40
    },
    "perfil cnt-general detalle-avatar detalle": {
        "textAlign": "left"
    },
    "perfil cnt-general detalle-avatar detalle ul li": {
        "fontSize": 14,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontFamily": "'Open Sans', sans-serif"
    },
    "perfil cnt-general detalle-avatar detalle ul li span": {
        "fontWeight": "bold"
    },
    "perfil cnt-general detalle-avatar detalle descargar-cv": {
        "marginTop": 20
    },
    "perfil cnt-general detalle-avatar educacion": {
        "textAlign": "left",
        "marginTop": 7,
        "marginLeft": 40,
        "fontFamily": "'Lato', sans-serif"
    },
    "perfil cnt-general detalle-avatar educacion p": {
        "marginTop": 5,
        "marginBottom": "5 PX",
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 14
    },
    "experiencia": {
        "paddingTop": 50
    },
    "experiencia cnt-general": {
        "textAlign": "center"
    },
    "experiencia cnt-general cnt-exp": {
        "display": "flex",
        "flexWrap": "wrap",
        "justifyContent": "space-between"
    },
    "experiencia cnt-general cnt-exp exp": {
        "maxWidth": 300,
        "display": "flex",
        "height": 120,
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 20,
        "marginLeft": 10,
        "background": "#f6f6f6",
        "border": "1px solid #1c2833",
        "borderRadius": 4,
        "transition": "0.3s ease all",
        "transform": "scale(1)"
    },
    "experiencia cnt-general cnt-exp exp:hover": {
        "boxShadow": "1px 1px 2px #1c2833"
    },
    "experiencia cnt-general cnt-exp exp figure": {
        "width": 200
    },
    "experiencia cnt-general cnt-exp exp figure img": {
        "width": "100%",
        "height": "auto",
        "display": "block"
    },
    "experiencia cnt-general cnt-exp exp descripcion": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "textAlign": "left",
        "position": "relative",
        "color": "#000"
    },
    "experiencia cnt-general cnt-exp exp descripcion titulo-exp": {
        "fontFamily": "'Lato', sans-serif",
        "display": "block",
        "marginBottom": 5,
        "fontSize": 16,
        "color": "#1c2833",
        "transition": "0.3s eaes all",
        "fontWeight": "bold"
    },
    "experiencia cnt-general cnt-exp exp descripcion titulo-exp:hover": {
        "color": "#ea5455"
    },
    "experiencia cnt-general cnt-exp exp descripcion labor": {
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 14,
        "textAlign": "justify",
        "marginBottom": 10
    },
    "experiencia cnt-general cnt-exp exp descripcion periodo": {
        "color": "#000",
        "position": "absolute",
        "left": 0,
        "right": 0,
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 10,
        "bottom": 5,
        "display": "flex",
        "justifyContent": "space-between"
    },
    "experiencia cnt-general cnt-exp exp descripcion periodo span": {
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 14
    },
    "experiencia cnt-general cnt-exp exp descripcion periodo inicio": {
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 14
    },
    "experiencia cnt-general cnt-exp exp descripcion periodo fin": {
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 14
    },
    "portafolio": {
        "textAlign": "center",
        "marginTop": 20
    },
    "portafolio categorias": {
        "marginBottom": 50
    },
    "portafolio categorias ul": {
        "display": "flex",
        "justifyContent": "center"
    },
    "portafolio categorias ul li": {
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 20
    },
    "portafolio categorias ul li a": {
        "paddingTop": 5,
        "paddingRight": 12,
        "paddingBottom": 5,
        "paddingLeft": 12,
        "borderRadius": 5,
        "color": "#fff",
        "background": "#1c2833",
        "fontFamily": "'Lato', sans-serif",
        "transition": "0.3s ease all"
    },
    "portafolio categorias ul li a:hover": {
        "background": "#ea5455"
    },
    "portafolio categorias ul li aactive": {
        "background": "#ea5455"
    },
    "portafolio proyectos": {
        "display": "flex",
        "flexWrap": "wrap",
        "justifyContent": "space-between"
    },
    "portafolio proyectos proyecto": {
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "position": "relative",
        "cursor": "pointer"
    },
    "portafolio proyectos proyecto figure img": {
        "display": "block"
    },
    "portafolio proyectos proyecto h3titulo-proyecto": {
        "position": "absolute",
        "left": 0,
        "right": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "top": "30%",
        "fontFamily": "'Lato', sans-serif",
        "opacity": 0,
        "zIndex": 20,
        "transition": "0.4s ease all",
        "color": "#fff",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "fontSize": 18
    },
    "portafolio proyectos proyecto capa": {
        "background": "#ea5455",
        "position": "absolute",
        "left": 0,
        "right": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "top": 0,
        "height": "100%",
        "width": "100%",
        "opacity": 0,
        "zIndex": 10,
        "transition": "0.2s ease all"
    },
    "portafolio proyectos proyecto:hover capa": {
        "opacity": 0.7
    },
    "portafolio proyectos proyecto:hover h3titulo-proyecto": {
        "opacity": 1,
        "top": "45%"
    },
    "portafolio paginacion": {
        "marginTop": 20
    },
    "portafolio paginacion ul": {
        "display": "flex",
        "justifyContent": "center"
    },
    "portafolio paginacion ul li": {
        "marginTop": 0,
        "marginRight": 8,
        "marginBottom": 0,
        "marginLeft": 8
    },
    "portafolio paginacion ul li a": {
        "fontSize": 17,
        "borderRadius": 4,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "background": "#1c2833",
        "color": "#fff",
        "transition": "0.3s ease all",
        "fontFamily": "'Lato', sans-serif"
    },
    "portafolio paginacion ul li a:hover": {
        "background": "#ea5455"
    },
    "sectioncontacto": {
        "textAlign": "center",
        "backgroundImage": "url(\"../img/img-contacto.jpg\")",
        "paddingTop": 30,
        "paddingBottom": 30,
        "marginTop": 40,
        "backgroundSize": "cover",
        "position": "relative",
        "height": 400
    },
    "sectioncontacto:after": {
        "content": "",
        "width": "100%",
        "height": "100%",
        "background": "#000",
        "opacity": 0.6,
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "sectioncontacto cnt-general": {
        "zIndex": 2,
        "position": "relative"
    },
    "sectioncontacto cnt-general h2title": {
        "color": "#fff"
    },
    "sectioncontacto cnt-general descripcion": {
        "color": "#fff",
        "fontSize": 16,
        "maxWidth": 800,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": 40,
        "marginLeft": "auto",
        "fontFamily": "'Open Sans', sans-serif",
        "textAlign": "justify"
    },
    "sectioncontacto cnt-general form": {
        "display": "flex",
        "justifyContent": "space-between",
        "flexWrap": "wrap"
    },
    "sectioncontacto cnt-general form cnt-input": {
        "marginRight": 20,
        "width": "55%"
    },
    "sectioncontacto cnt-general form cnt-input input": {
        "paddingLeft": 5,
        "fontFamily": "'Lato', sans-serif",
        "marginBottom": 10,
        "border": "none",
        "height": 30,
        "borderRadius": 4,
        "width": "100%",
        "color": "#1c2833",
        "fontSize": 16
    },
    "sectioncontacto cnt-general form cnt-area": {
        "width": "40%"
    },
    "sectioncontacto cnt-general form cnt-area textarea": {
        "paddingLeft": 5,
        "paddingTop": 4,
        "fontFamily": "'Lato', sans-serif",
        "borderRadius": 4,
        "width": "100%",
        "height": 105,
        "color": "#1c2833",
        "fontSize": 16
    },
    "sectioncontacto cnt-general form cnt-button button": {
        "fontFamily": "'Lato', sans-serif",
        "border": "none",
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "cursor": "pointer",
        "fontSize": 16,
        "color": "#fff",
        "borderRadius": 4,
        "transition": "0.3s ease all",
        "background": "#ea5455"
    },
    "sectioncontacto cnt-general form cnt-button button:hover": {
        "background": "#1c2833"
    },
    "footer": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "background": "#1c2833",
        "color": "#fff"
    },
    "footer copyright": {
        "fontSize": 16,
        "fontFamily": "'Lato', sans-serif"
    }
});