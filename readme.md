# O que é?
[SEMANA KUBEDEV](https://kubedev.io)
* Aula 01 - Segunda-feira (28/09/2020)
  * Criação de imagem com Dockerfile
  * Distruição através do Docker Hub
  * Criação de container com imagem
  * Utilização do Azure App Service
# Como Executar?
Na raiz do projeto:
```
node index.js 
```
# Docker Local
Criação da imagem: 
```
docker build -t jailtonjunior/api-conversao:v1 .    
``` 
Execução da imagem:
```
docker run -p 8080:8080 -d jailtonjunior/api-conversao:v1 
``` 
# Docker Registry (Docker Hub)
Autenticando no Docker Hub: 
```
docker login
```
Subindo imagem para o Docker Hub
```
docker push jailtonjunior/api-conversao:v1    
```
