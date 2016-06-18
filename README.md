# chaosMachine
Chaos Machine 2.0 plays random sounds at random intervals you sort of control for whatever purpose you need.

Instructions:

1. npm install
2. grunt
3. node server/server.js
4. navigate to localhost:3030

Sounds are pulled from a folder in public/ called sounds/. Add folders to sounds/ with the names of all of your categories of sounds. Sound files should go in those subfolders. Sounds put directly in the sounds/ folder will be ignored. Any and all audio formats are supported (as far as I know).

Special sound folders are:

shutup/ - (required) Audio files in a folder named "shutup" folder are not played randomly but instead play when you press the "SHUT UP" button. Some dafault shut up sounds are included.

music/ - (optional) Audio files in a folder named "music" are played one at a time. This is to allow for longer audio files that would just overlap and snowball out of control... but maybe that's what you're looking for.
