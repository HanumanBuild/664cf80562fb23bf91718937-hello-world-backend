var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/docs', function (req, res) {
    const documentation = `
    <h1>Project Documentation</h1>
    <h2>Project Purpose</h2>
    <p>The <code>hello-world-backend</code> project is a simple Node.js application using the Express framework. Its primary purpose is to return "Hello World" when the root endpoint is accessed.</p>
    <h2>Project Structure</h2>
    <p>The project directory structure is as follows:</p>
    <ul>
        <li><code>package.json</code>: Contains metadata about the Node.js project and its dependencies.</li>
        <li><code>.gitignore</code>: Specifies files and directories to be ignored by Git.</li>
        <li><code>package-lock.json</code>: Locks the versions of the project's dependencies for consistent installs.</li>
        <li><code>app.js</code>: The main entry point for the Express server application.</li>
    </ul>
    <h2>How to Use</h2>
    <ul>
        <li><strong>Access the Root Endpoint</strong>: Visit the root URL to see the "Hello World" message.</li>
        <li><strong>Access the Documentation</strong>: Visit the <code>/docs</code> URL to view this documentation.</li>
    </ul>
    `;
    res.send(documentation);
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port ' + (process.env.PORT || 3000) + '!');
});