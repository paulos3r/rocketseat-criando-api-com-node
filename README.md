### docker 

docker build -t projeto .

docker run -p 3333:3333 projetos

### comandos do docker
- docker ps - listagem de container
- docker ps -a lista todas as imagens
- docker rm id - remove o container
- docker start id - inicia o container
- docker stop id - para a imagem 
- docker-composer up -d -subir a extrutura
- docker-composer down - remover tudo que for criado
- docker exec -it projeto /bin/bash - acessar uma maquina para verificar se esta correto
- docker logs nome da aplicação - acessa os logs
- docker logs nome da imagem -f para monitorar os logs
- docker-compose up --force-recreate força a recriação da imagem