#!/bin/bash

# Navigate to the project
cd /home/ubuntu/portfolio || exit

# 1. Pull the latest code
/usr/bin/git pull origin main

# 2. Install dependencies (in case you added new ones)
npm install

# 3. Build the static files
npm run build

# 4. Refresh the PM2 process
# Using '|| true' ensures the script continues even if the process wasn't already running
pm2 delete portfolio || true
pm2 start "serve -s build -l 3000" --name "portfolio"

# 5. Save PM2 state
pm2 save
