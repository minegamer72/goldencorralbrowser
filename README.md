# Golden Corral Browser Source

This is a browser source designed for OBS that occasionally displays (by default) a golden corral gif. This is directly inspired by [this wayneradiotv stream](https://youtu.be/ogbBLVzAkfc). This project makes use of the [libgif-js](https://github.com/buzzfeed/libgif-js) library.

## Usage:

### Linux:
Clone the repository and change directory
``` bash
git clone https://github.com/minegamer72/goldencorralbrowser
cd goldencorralbrowser
```
Then start a web server, for this I use python3
```bash
python3 -m http.server
```
Then, in OBS, create a browser source with this configuration:

* URL: 0.0.0.0:8000
* Width: 1024
* Height: 1024<br>
and ensure that the custom CSS is
```css
body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }
```
I set the page permissions to Full access to OBS, but I'm unsure as if 