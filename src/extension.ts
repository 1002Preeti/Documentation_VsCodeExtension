import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.showDocumentation', () => {
        vscode.window.showInformationMessage('Documentation Bar Activated!');
    });

    context.subscriptions.push(disposable);

    const documentationPanel = vscode.window.createWebviewPanel(
        'documentationBar',
        'Documentation Bar',
        vscode.ViewColumn.One,
        {}
    );

    documentationPanel.webview.html = getWebviewContent();
}

function getWebviewContent() {
    return `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                }
                h1 {
                    font-size: 24px;
                }
                h2 {
                    font-size: 20px;
                    margin-top: 20px;
                }
                a {
                    color: #1E90FF;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <h1>Documentation Bar</h1>
            <div>
                <h2>Python</h2>
                <p><a href="https://docs.python.org/3/" target="_blank">Python Official Documentation</a></p>
            </div>
            <div>
                <h2>C++</h2>
                <p><a href="https://en.cppreference.com/w/" target="_blank">C++ Reference</a></p>
            </div>
            <div>
                <h2>HTML</h2>
                <p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">MDN Web Docs: HTML</a></p>
            </div>
            <div>
                <h2>JavaScript</h2>
                <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN Web Docs: JavaScript</a></p>
            </div>
            <!-- Add more sections as needed -->
        </body>
        </html>
    `;
}

export function deactivate() {}

