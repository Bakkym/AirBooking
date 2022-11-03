#!/bin/bash
sudo apt update -y
sudo apt install docker.io -y
sudo service docker start
sudo docker run -d -p 80:3000 bakkym/airbooking-frontend:1.0.0
sudo docker run -d -p 3001:3001 bakkym/airbooking-backend:1.0.0