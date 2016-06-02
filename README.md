# chaosMachine
Chaos Machine 2.0 plays random sounds at random intervals you sort of control for whatever purpose you need.

Instructions:

1. npm install
2. grunt
3. node server/server.js
4. navigate to localhost:3030

Sounds are pulled from a folder in public/ called sounds/. Git doesn't allow empty folders so you'll just have to add one. After that, add folders to sounds/ with the names of all of your categories of sounds. Sound files should go in those subfolders. Sounds put directly in the sounds/ folder will be ignored. Any and all audio formats are supported (as far as I know).
