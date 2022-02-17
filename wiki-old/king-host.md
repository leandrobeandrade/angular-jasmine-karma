## Overview
Passo a passo para executar o deploy para KingHost. Por enquanto não temos separação de ambientes entre produção, dev, test e etc.

## Deploy de mudanças
Executar apenas os passos 3 e 5.

## Primeiro deploy

#### Passo 1
Criar um diretório na raiz do usuário no servidor da KingHost específico para armazenar nossa aplicação. Pode ser feito via FTP ou SSH. Esse novo diretório ficará no mesmo nível do `www` já existente. Via SSH pode ser feito da seguinte forma:
```
$ cd ~
$ mkdir api.<dominio>
```
Trocar `<dominio>` pelo domínio que estiver sendo usado no acesso.

#### Passo 2
Copiar o projeto para o diretório api.<dominio>:
- Via FTP: Não copiar coisas que não fazem parte do projeto, por exemplo: `.git`, `README`, `.gitignore`, `vendor` e etc.
- Via SSH: Entrar na pasta e `git clone <link ssh>`. Para atualizações, entrar no diretório e `git pull`.
Obs: O usuário `bot-ekaizen` está adicionar no repositório do projeto e um par de chaves já está configurado no usuário e no servidor. 

#### Passo 3
Instalar o composer via SSH na pasta acima. Na KingHost, nesse momento, essa etapa só pode ser feita via SSH. Ex:
```
$ cd ~/api.<dominio>
$ curl -sS https://getcomposer.org/installer | php
```

#### Passo 4
Link simbólico de `api.<dominio>/public` para o diretório público `www` (ou `www/<subdominio>` no caso de um subdomínio). Essa etapa só pode ser feita via SSH. Ex:
```
$ ln -s ~/api.<dominio>/public www/<pasta de subdominio se for o caso>
```
Obs: Trocar `api.<dominio>` pelo nome do diretório que foi criado e se estivermos usando subdominio, acrescentar o sufixo após o `www`, ex: `www/api`.

#### Passo 5
Executar `php composer.phar install --no-dev` (Via SSH) no diretório raiz do repositório clonado. Essa etapa só pode ser feita via SSH.

#### Passo 6
Criar arquivo .htaccess no mesmo diretório do `index.php`.
`.htaccess`
```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.php [QSA,L]
```
Obs: Esse arquivo está comitado no nosso repositório então teoricamente não precisamos nos preocupar com isso.

#### Passo 7
Garantir que o arquivo `.env`, com todas as variáveis de ambiente necessárias para aplicação, esteja no mesmo nível do `index.html`.
