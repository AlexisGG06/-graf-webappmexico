# -graf-webappmexico
# Proyecto: Bandera de México Interactiva  

## **Integrantes**  
- **Juan Alexis Gonzalez Garcia** - NC: 23200142  
- **Vanessa Gissel Hinojosa Morales** - NC: 23200300  
- **Adolfo Esau Perez Escamilla** - NC: 23200152  

## **Descripción del Proyecto**  
Este proyecto es una representación interactiva de la Bandera de México, donde los colores verde y rojo pueden modificarse mediante sliders.  

## **Código Fuente**  

### **index.html**  
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bandera de México</title>
    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
        }
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            margin-top: 20px;
        }
        .color-section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .flag-section {
            width: 250px;
            height: 250px;
            margin-top: 10px;
            border: 2px solid black;
        }
        .separator {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: black;
        }
        .authors {
            margin-top: 30px;
            font-size: 18px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Bandera de México</h1>
    <div class="container">
        <div class="color-section">
            <label for="green">Esperanza</label>
            <input type="range" id="green" min="0" max="255" value="0">
            <span id="greenHex">#008000</span>
            <div class="flag-section" id="greenBox" style="background-color: #008000;"></div>
        </div>
        <div class="separator">
            <p class="symbol">@@@@</p>
            <p class="symbol">@@@@</p>
            <p class="symbol">@@@@</p>
        </div>
        <div class="color-section">
            <label for="red">Sangre de nuestros héroes nacionales</label>
            <input type="range" id="red" min="0" max="255" value="128">
            <span id="redHex">#800000</span>
            <div class="flag-section" id="redBox" style="background-color: #800000;"></div>
        </div>
    </div>
    <div class="authors">
        <p>Juan Alexis Gonzalez Garcia - NC: 23200142</p>
        <p>Vanessa Gissel Hinojosa Morales - NC: 23200300</p>
        <p>Adolfo Esau Perez Escamilla - NC: 23200152</p>
    </div>
    <script>
        document.getElementById('green').addEventListener('input', function() {
            let greenValue = parseInt(this.value).toString(16).padStart(2, '0');
            let hexColor = `#${greenValue}8000`;
            document.getElementById('greenBox').style.backgroundColor = hexColor;
            document.getElementById('greenHex').textContent = hexColor;
        });

        document.getElementById('red').addEventListener('input', function() {
            let redValue = parseInt(this.value).toString(16).padStart(2, '0');
            let hexColor = `#${redValue}0000`;
            document.getElementById('redBox').style.backgroundColor = hexColor;
            document.getElementById('redHex').textContent = hexColor;
        });
    </script>
</body>
</html>
