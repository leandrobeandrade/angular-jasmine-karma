# Depósito de Produtos

## Descrição
O Depósito é onde gerenciamos os produtos, criando, editando, correlacionado (Depósitos, produtos, clientes e fornecedores) e localizando (Sub-depósito) eles.  
Nele nós também categorizamos os produtos (categoria) e criamos o roteiro de operações, com a família e suas linhas de roteiro.

## Mockups
![Gerenciamento_de_depósitos1](uploads/1c51a8904a19d7c48085f371efb825be/Gerenciamento_de_depósitos1.png)
![Gerenciamento_de_depósitos2](uploads/bbc583eed95f7f8855bd3d309f07940d/Gerenciamento_de_depósitos2.png)![Gerenciamento_de_depósitos3](uploads/ac4830135f74264c9d2660324a1fe2f2/Gerenciamento_de_depósitos3.png)
![Gerenciamento_de_depósitos4](uploads/7d88b8f426857da652f26090c118eb7b/Gerenciamento_de_depósitos4.png)![Gerenciamento_de_depósitos5](uploads/433282b8a64d8b506e946d3b17924a73/Gerenciamento_de_depósitos5.png)![Gerenciamento_de_depósitos6](uploads/e29cba20aaed8894aaf0196da212470a/Gerenciamento_de_depósitos6.png)![Gerenciamento_de_depósitos7](uploads/ab3131ef0888d005d402d91c92e2a6de/Gerenciamento_de_depósitos7.png)![Gerenciamento_de_depósitos8](uploads/94c5b65e13c06cf06c8ab8f99e92065e/Gerenciamento_de_depósitos8.png)![Gerenciamento_de_depósitos9](uploads/380fb1c20e913f6d1cb6df83be60fc66/Gerenciamento_de_depósitos9.png)
![Gerenciamento_de_depósitos10](uploads/efb78f2c123d73fcc22c66ad919deec6/Gerenciamento_de_depósitos10.png)
![image](uploads/dfe6052ebef52899bd991745e635ed7c/image.png)
![image](uploads/fc436f3a2a02524f20d70ad69a584dac/image.png)

## Processo RSP
RSP - O que **Representa**, para que **Serve** e o que **Pode**
### Formulários
#### Produto
* Código: Representa o produto. Serve para identificar o produto. Não pode ser editado, até 15 carácteres e **NÃO** é opcional (desenho não acompanha).
* Descrição: Representa mais informações do produto. Serve para descrever o produto. Pode ser editado, até 100 carácteres e é opcional.
* Categoria: Representa o grupo (tecnologia ou processo) que o produto pertence. Serve para agrupar, categorizar e filtrar produtos. Pode uma categoria, das categorias cadastradas na Gestão de Depósitos e é opcional.
* Foto padrão do Produto: Representa o produto. Serve para identificação visual do produto. Pode uma foto, de até 2MB e é opcional.
* Foto padrão da Evidência: Representa a etiqueta do produto. Serve para identificação visual do lote do produto. Pode uma foto, de até 2MB e é opcional. **O desenho não acompanha**
#### Categoria
* Nome: Representa o nome da categoria. Serve para identificar a categoria. Pode até 50 carácteres, pode ser editada e não é opcional.
#### Operação de Processo (Linha de Roteiro)
* Número da Operação (Código no formulário): Representa a linha do roteiro. Serve para identificar a linha do roteiro. Pode até 15 carácteres, pode ser editado e é opcional.
* Interna/Externa: Representa o escopo do roteiro. Serve para filtrar a Operação (O Select). Pode "Interna" (padrão) ou "Externa", não é opcional.
* Tempo padrão: Representa o tempo da operação em minutos para uma peça. Serve para o cálculo de OE e estudo de capacidade do produto (ambos coisas que virão). Pode números com várias casas decimais, pode ser editado e é opcional, com valor padrão 0.
* Operação: Representa uma etapa no processo de produção do produto. Serve para identificar a operação que atuará no produto, o local onde será atuado e quem ou o que atuará. Pode uma as operações de processo cadastras no sistema, filtradas com base no "Interna/Externa". Adendo: **Fundamental** a presença de um filtro para esse *select*.  
**Atenção**, o *select* de setor não estará mais presente, **desconsiderar** o que está no desenho.
#### Depósito (Correlação)
* Depósitos: Representa os depósitos onde o produto está. Serve para correlacionar o produto em vários depósitos. Pode **todos** os depósitos de produto do sistema (com os nomes customizados, se tiver algum)
#### Produto (Correlação)
* Produtos: Representa os componentes do produto. Serve para correlacionar os componentes que compõe o produto. Pode **vários (0 -> Todos)** produtos da empresa.
#### Cliente (Correlação)
* Clientes: Representa os clientes que compram o produto. Serve para correlacionar os clientes que compram o produto. Pode **vários (0 -> Todos)** clientes da empresa.
#### Fornecedor (Correlação)
* Fornecedores: Representa os fornecedores que vendem o produto. Serve para correlacionar os fornecedores que vendem o produto. Pode **vários (0 -> Todos)** fornecedores da empresa.
#### Depósito (Edição)
* Nome: Representa o nome customizado do depósito. Serve para customizar o nome do depósito selecionado. Pode até 50 carácteres, pode ser editado.

### Listagem
#### Produtos
* Visualizar correlação: Aparece um modal com as listas das correlações do produto (Cliente, Fornecedor, Componente e Depósito)
* Gerenciar Item: Leva para uma janela (cockpit), com mais informações do produto.  
(Ao criar o produto, criar junto um roteiro em branco para ele)
#### Roteiro de Fabricação
* Destravar edição: Por padrão, caso o produto pertença a uma família, ele poderá **apenas** visualizar as linhas do roteiro. Para poder fazer alguma modificação, deverá clicar em "Destravar Edição". Nesse momento, o roteiro será **clonado** e o novo roteiro passará a fazer parte do produto. Ele (O produto) ainda manterá referência á família.  
Possibilidades de visualização do roteiro:
1. O produto **não tem família**, nesse caso o **roteiro do produto** é mostrado normalmente
2. O produto **tem família**, nesse caso:
    * O produto **está sujo** (Foi destravado):
        * O **roteiro do produto** é visualizado
    * O produto **não está sujo** (Não foi destravdo):
        * O **roteiro da família** é visualizado

### API
#### Rotas
* Part
    * `List => GET /generals/parts`
    * `Add => POST /generals/parts`
    * `Find => GET /generals/parts/{id}`
    * `Update => PUT /generals/parts/{id}`
    * `Delete => DELETE /generals/parts/{id}`
    * Sub Depósito
        * Sync => 
            * Verbo e URL => `POST /generals/parts/{id}/warehouses/subwarehouses`
            * Payload => `{ "subwarehouses": [1, 2, ..., 3] }`
        * `List => GET /generals/parts/{id}/warehouses/subwarehouses`
    * Componentes
        * Sync => 
            * Verbo e URL => `POST /generals/parts/{id}/components`
            * Payload => `{ "components": [1, 2, ..., 3] }`
        * `List => GET /generals/parts/{id}/components`
        * Update => 
            * Verbo e URL => `PUT /generals/parts/{id}/components/{componentId}`
            * Payload => `{ "quantity": 10 }`
    * Clientes
        * Sync => 
            * Verbo e URL => `POST /generals/parts/{id}/customers`
            * Payload => `{ "customers": [1, 2, ..., 3] }`
        * `List => GET /generals/parts/{id}/customers`
    * Fornecedores
        * Sync => 
            * Verbo e URL => `POST /generals/parts/{id}/providers`
            * Payload => `{ "providers": [1, 2, ..., 3] }`
        * `List => GET /generals/parts/{id}/providers`
        * Update => 
            * Verbo e URL => `PUT /generals/parts/{id}/providers/{providerId}`
            * Payload => `{ "costOfLastSupply": "50.0", "amountOfLastSupply": "100.0", "dateOfLastSupply": "2020-03-05 13:43:00" }`
* Categoria de Produtos
    * `List => GET /generals/parts/categories`
    * `Add => POST /generals/parts/categories`
    * `Update => PUT /generals/parts/categories/{id}`
    * `Delete => DELETE /generals/parts/categories/{id}`
* Depósito
    * `List => GET /generals/parts/warehouses`
    * `Update => PUT /generals/parts/warehouses/{id}`
* Sub Depósito
    * `List => GET /generals/parts/warehouses/{id}/subwarehouses`
    * `Add => POST /generals/parts/warehouses/{id}/subwarehouses`
    * `Update => PUT /generals/parts/warehouses/subwarehouses/{id}`
    * `Delete => DELETE /generals/parts/warehouses/subwarehouses/{id}`

#### Filtros (QueryParams)
* Part
    * `Sub Depósito => sub_warehouse (id do Sub Depósito)`
* Categoria de Produtos  
Nenhum
* Depósito  
Nenhum
* Sub Depósito
Nenhum

#### Estrutura
Assuma valores padrão: (id, createdAt, updatedAt, deletedAt e companyId)
* Part
    * `scriptId: number`
    * `script: IScriptModel`
    * `familyId: number`
    * `family: IFamilyModel`
    * `imageId: number`
    * `imageTagId: number`
    * `code: string`
    * `name: string`
    * `description: string`
    * `isComponent: boolean`
    * `maxQuantity: number`
    * `minQuantity: number`
* Categoria de Produtos
    * `name: string`
* Depósito
    * `customName: string`
    * `hasBeenCustomized: boolean`
* Sub Depósito
    * `name: string`
    * `warehouseId: number`
    * `layoutId: number`
    * `layout: ILayoutModel`
    * `capacity: number`
