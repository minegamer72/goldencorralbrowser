# Golden Corral Browser Source

This is a browser source designed for OBS that occasionally displays (by default) a golden corral gif. This is directly inspired by [this wayneradiotv stream](https://youtu.be/ogbBLVzAkfc). This project makes use of the [libgif-js](https://github.com/buzzfeed/libgif-js) library.

## Usage

1. Clone the repository
``` bash
git clone https://github.com/minegamer72/goldencorralbrowser
``` 
Or, you can download the code by clicking the code button at the top, and clicking download ZIP. Extract it somewhere.

2. Open OBS and add a browser source, check Local file and choose the path of index.html
Then, configure the browser source like this:
* Width: 1024
* Height: 1024<br>
and ensure that the custom CSS is
```css
body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }
```

## Other information

If you wish to edit anything here, or would just prefer to use a web server over a local file in OBS, you can open a terminal or powershell, change directory into the goldencorralbrowser, and start a web server using your favorite service.

[python3](https://www.python.org/)
```bash
cd path/to/goldencorralbrowser
python3 -m http.server
# The address here will be 0.0.0.0:8000
```
Windows specific: <br>
[Pode](https://github.com/Badgerati/Pode)
```powershell
cd "C:\Path\To\goldencorralbrowser\"
Start-PodeStaticServer
# The address here will be localhost:8080
```

Then, you can navigate to the address in your browser, and/or set it in the Browser source properties.
