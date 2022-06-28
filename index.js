const nodeHtmlToImage = require('node-html-to-image')

const example_logo = 'https://d33mscjxwsx5f6.cloudfront.net/7ad61caf-90c0-4f59-acc9-fb99e00bdb3c/74355831-ff8e-4700-b3a5-9116b725ea27.jpeg'
const opengraph = 'https://raw.githubusercontent.com/lharo-clip/Assets/main/OG_img.jpg'

//The idea here is to receive the handlebars template as a param or read it from a config not to have it hardcoded.
//We'll try just directly giving it the src, if it does not work we'll download the img with axios i guess

const template = 
`
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <style>

      body {
        width: 600px;
        height: 315px;
      }

      .OG{
          display: flex;
          width: 600px;
          height: 315px;
          background-image: url("{{og_background}}");
      }
      
      .left{
          width: 240px;
          height: 240px;
          align-self: center;
          display: flex;
          justify-content: center;
          align-items: center; 
      }
      
      .right{
          display: grid;
          border-radius: 25px;
          width: 360px;
          height: auto;
          text-align: center;
      }
      .pagaA{
          align-self: center;
          font-size: large;
          color: #000000;
      }
      
      .url{
          font-size: large;
          color: #fa4d09;
      }
      
      .divimg{
          width: 160px;
          height: 160px;
          border-radius: 300px;
          background: #ffffff;
          background-image: url("{{logo_image}}");
          background-size: cover;
      }

    </style>
    <body>
        <div class="OG">
            <div class="left">
                    <div class="divimg"></div>
            </div>
            <div class="right">
                <div class="empty"></div>
                <div class="pagaA">
                    Paga a 
                    <b>{{publicName}}</b>
                </div>
                <div class="url">
                    clip.mx/@{{alias}}
                </div>
                <div class="empty"></div>
                <div class="empty"></div>
                <div class="empty"></div>
                <div class="empty"></div>
            </div>
        </div>     
    </body> 
</html>
`


nodeHtmlToImage({
  output: './image.png',
  html: template,
  content: { 
    og_background: opengraph, 
    logo_image: example_logo ,
    publicName: 'Weird Things',
    alias: 'daweirdthings'
  }
})
