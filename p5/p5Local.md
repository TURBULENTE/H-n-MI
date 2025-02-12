
## **Setting up p5.js**

1. **Download the files**: complete https://p5js.org/download/  
    
    Include the code inside the script.js inside the example 
    
2. **Set up a local server**: Some functionality (loading external files, for example) works as expected when the files are placed online via FTP or SSH. However, if you try to view them locally, you see some kind of "cross-origin" errors in console. The solution to this is to view them using what's called a local web server. 

<aside>
ℹ️ https://github.com/processing/p5.js/wiki/Local-server

</aside>

Server with node: 

- [Download and Install node.js](https://nodejs.org/en/download/)
- Open a terminal or command prompt (on Windows you might need to open the command prompt as admin)
- In the terminal type:
    
    `npm install -g http-server`
    
    From then on just `cd` to the folder that has the files you want to serve and type 
    `http-server`
    
    Then point your browser at `http://localhost:8080/`