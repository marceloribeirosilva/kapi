# Bem vindo ao projeto KAPI!

Este projeto consiste em integrar os sistemas Pipedrive e Bling.
Os negócios criados no sistema pipedrive com o status "ganho", são enviados para o sistema Bling como se fossem vendas.

Obs.: Foi utilizado nos dois sistemas contas gratuitas que irão expirar.

# Rotas

**/integration** => Responsável por buscar os negócios com o status "ganho" no sistema Pipedrive e inserir como pedidos de venda no sistema Bling. Além de realizar essa integração, também é salvo banco de dados NoSql MongoDb.

**/report** => Responsável por exibir um relatório de vendas consolidado por dia.

## Iniciando servidor

    npm rum server
