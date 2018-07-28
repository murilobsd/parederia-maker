[![Build Status](https://travis-ci.org/murilobsd/parederia-maker.svg?branch=master)](https://travis-ci.org/murilobsd/parederia-maker) [![Dependency Status](https://david-dm.org/murilobsd/parederia-maker.svg)](https://david-dm.org/murilobsd/parederia-maker)
[![License](https://img.shields.io/npm/l/@murilobsd-parederia-maker/core.svg)](https://github.com/murilobsd/parederia-maker/blob/master/LICENSE) 

Parederia Maker
=================
<p align="center">
  <img src="https://cdn.shopify.com/s/files/1/1743/9705/files/logo_parederia.svg?9144630378771702438" alt="Parederia logo"/>
</p>

Simples ambiente da [parederia](https://loja.parederia.com) para criação de **paredes**, sinta-se a vontade para dar vida a sua parede. 

Com alguns cliques você estiliza sua parede com quadros belíssimos e tem uma ótima
visualização de como vai ficar.

Uma vez publicada a sua parede, acompanhe seu pedido através do maker.

Instalação
----------
Antes de baixar o projeto crie seu db no [firebase](https://console.firebase.google.com) [na internet existem inúmeros artigos](https://duckduckgo.com/?q=how+create+firebase+db&t=canonical&ia=web) não se reprima.


Será necessário instalar node e o npm, siga instruções nesse [link](https://nodejs.org/en/download/package-manager/) de acordo
com o sistema operação que você está utilizando.


Certifique-se também que tenha o [angular-cli](https://cli.angular.io/) instalado. Caso contrário:

```sh
$ npm i -g @angular/cli
```

```sh
$ git clone https://github.com/murilobsd/parederia-maker
$ cd parederia-maker/
$ npm i
```

ou via packge (**não existe ainda**):

```sh
$ npm install parederia-maker@0.0.1
```

Rodando localmente
------------------

Depois de instalado para desenvolver localmente.

```sh
$ ng serve
```

Acesse pelo seu navegador: [http://localhost:4200](http://localhost:4200)

Produção
--------

Caso queira usar em produção sugerimos fazer o hosting no firebase, porque já
tem os arquivos configurados caso contrário basta pegar os arquivos gerados
dentro da pasta **dist/<nome_projeto>**.

```sh
$ npm i -g firebase-tools
$ firebase login
$ ng build --prod
$ firebase deploy
```

Contribuir
----------

Autor
-----

Toda **idéia** e **layout** foi matutada pelo [Sir. Mazza](https://github.com/mazzazzam)
