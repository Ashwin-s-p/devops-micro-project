#!/bin/bash
echo "Building Docker image..."
docker build -t ashwin-micro-app .

echo "Running container..."
docker run -d -p 3000:3000 --name ashwin_micro_container ashwin-micro-app