# Portfolio

Welcome to my personal portfolio project!
This website doubles as my resume.

## Overview

This is a Node.js-based project created to showcase my work, skills, and experience. 

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your local machine.

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install the project dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the application, run the following command:
```bash
npm start
```

### Webhook Listener Setup

The server uses a webhook listener process to receive GitHub webhook events. On the Ubuntu server, the process is started and managed with `pm2`:

```bash
pm2 start webhook --name "portfolio-webhook" -- -hooks $HOME/portfolio/hooks.json -port 9000 -hotreload -verbose
```

This command does the following:
- starts the webhook listener binary or script named `webhook`
- names the process `portfolio-webhook`
- loads webhook configuration from `$HOME/portfolio/hooks.json`
- listens on port `9000`
- enables hot reload for configuration changes
- runs in verbose mode for detailed logs

Make sure GitHub webhook events are configured to point to the server URL using port `9000` and that the server is allowed to receive inbound traffic on that port.

### Redeploy Script

The GitHub webhook is configured in `$HOME/portfolio/hooks.json` to invoke the redeploy script when a push event is received. The script located at `$HOME/portfolio/scripts/redeploy-portfolio.sh` performs the following steps:

- changes into the portfolio project directory at `$HOME/portfolio`
- pulls the latest source from `origin main`
- installs any new Node.js dependencies with `npm install`
- builds the production assets with `npm run build`
- restarts the `portfolio` PM2 process by deleting the old process and starting a new one with `serve -s build -l 3000`
- saves the PM2 process list so it restarts automatically after server reboot

This ensures the latest code is rebuilt and redeployed automatically whenever the webhook is triggered.
