# Loading page
---

``` js code
const counterElem = document.querySelector(".counter");
const BarElem = document.querySelector(".loading-bar_frant");

// counterElem.innerHTML = "20%"

let index = 0;

change();

function change() {

    counterElem.innerHTML = index + "%";
    BarElem.style.width = index + "%";

    index++;
    if (index <= 100) {
    setTimeout(change,30);

  }
}

```

```css code
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: lalezar;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(80deg,black,rgb(12, 12, 77));
    color: aliceblue;
}

.container {
    text-align: center;
    width: 400px;
    position: relative;
}
h4 {
    color: rgb(129, 112, 124);
    font-size: 55px;
    font-weight: 400;
    text-shadow: 0 0 8px black;
}
.counter {
    font-size: 40px;

}

.loading-bar_back,
.loading-bar_frant {
    position: absolute;
    height: 10px;
    width: 100%;
    border-radius: 5px;
    background-color: #fff;
    border: none;
}
.loading-bar_frant {
    width: 0%;
    background-color: #06d83a;
}
```
```html code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lading bar</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
<div class="container">
    <h4>Loading...</h4>
    <div class="counter">0%</div>
    <hr class="loading-bar_back">
    <hr class="loading-bar_frant">
</div>
    

<script src="./js/app.js"></script>
</body>
</html>
```
