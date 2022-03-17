Command for Docker deployment:

Docker Build:
   
   -Dev:
   
   docker build -f Dockerfile.dev -t ufa-app .
  
  docker run -it --env-file ./.env -v ${pwd}:/ufaApp:ro -d -p {host端口}:3000 --name ufa-app ufa-app
   
   
   -Production (with Nginx):
   
   docker build -f Dockerfile.prod -t ufa-app .
   
   docker run --env-file ./.env -d -p {host端口}:80 --name ufa-app ufa-app
 
Docker-Compose up

   -Dev:
  
  #修改 docker-compose.yml，使指向dockerfile_dev
  
  docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
   
   -Production:
   
   #修改yml，使dockerfile指向dockerfile_dev
   
   docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
   
   
   
   
   
