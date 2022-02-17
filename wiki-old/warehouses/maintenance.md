# Depósito de Manutenção

## <a name="anchor-sumario"></a>Sumário

### Mockups

- [Subcategoria](#mockups-subcategoria)
- [Item](#mockups-item)
- [Criar Subdepósito](#mockups-subdeposito)
- [Subdepósito](#mockups-geral-subdeposito)
- [Posição](#mockups-posicao)
- [Movimentação do Subdepósito](#mockups-gerenciar-subdeposito)
- [Gerenciar Item](#mockups-gerenciar-item)

### Formulários

- [Subcategoria](#formularios-subcategoria)
- [Cadastro de Item](#formularios-item)
- [Subdepósito](#formularios-subdeposito)
- [Posição](#formularios-posicao)
- [Movimentação do Subdepósito](#formularios-movimentacao-subdeposito)
- [Gerenciar Item](#formularios-gerenciar-item)

## Descrição

Onde tem produto vai substituir por item e componente. Criando depósitos e suas categorias, como: Itens, conjunto e subconjunto. E suas subcategorias, como: Hidráulica, Elétrica e Mecânica. E suas correlação entre categorias (itens, conjunto e subconjunto) e fornecedores.

## Mockups

### <a name="mockups-subcategoria"></a>Subcategoria [_topo_](#anchor-sumario)

![Dep_FE_MT_SEG_Q_AU_subcategoria](uploads/1aec62194c3c665dd33da7c16d6e0c74/Dep_FE_MT_SEG_Q_AU_subcategoria.png)

#### Atualizado

![image](uploads/03f46968147af13d88d284605a8d23c1/image.png)
_O desenho está confuso. O que está sendo dito é que a categoria possui valores pré-cadastrados e que eles (os valores) não são cadastrados pelo usuário._

### <a name="mockups-item"></a>Item [_topo_](#anchor-sumario)

#### Atualizado

![image__1_](uploads/ecc62a00879bc97f534c1bf2f1740dd1/image__1_.png)
_A quantidade atual tem dois valores diferentes, dependendo de onde está sendo vista. Se estiver na "visão geral" é soma de quantidade atual do produto em todos os subdepósitos do "Manutenção", se estiver em um subdepósito, é a quantidade do produto naquele subdep. Já o **mínimo** e o **máximo** são os valores cadastrados no Item._

### <a name="mockups-subdeposito"></a>Criar Subdepósito [_topo_](#anchor-sumario)

![Dep_FE_MT_SEG_Q_AU_criar_subdepósito](uploads/66f895dce295b04762ed4455946a8dbc/Dep_FE_MT_SEG_Q_AU_criar_subdepósito.png)

#### Atualizado

![image](uploads/f9633a44cb69872d80d741f3c09cc939/image.png)

### <a name="mockups-geral-subdeposito"></a>Visão geral do subdepósito [_topo_](#anchor-sumario)

![deposito](uploads/9dfe991671060b78c8aac6736ad29e7f/deposito.png)

#### Atualizado

![image__3_](uploads/7c0286a541cce2ac433c22aef0689787/image__3_.png)

### <a name="mockups-posicao"></a>Posição [_topo_](#anchor-sumario)

![Dep_FE_MT_SEG_Q_AU_gerenciamento_posições](uploads/92d9de9a427f4bb89d836ec441ce13c8/Dep_FE_MT_SEG_Q_AU_gerenciamento_posições.png)

#### Atualizado

![image](uploads/8490127208354bb0a72e11b940cca240/image.png)
_O formulário de posição possui os mesmos campos que aparecem na tabela (Rua, Prédio, Andar, Apartamento e Código). Para chegar nessa tela o usuário deverá clicar em "Gerenciamento de Subdepósito" na tela [anterior](#mockups-geral-subdeposito)_

### <a name="mockups-gerenciar-subdeposito"></a>Movimentação do Subdepósito [_topo_](#anchor-sumario)

![Dep_FE_MT_SEG_Q_AU_gerenciar_subdepósito](uploads/7d214475a6ac736977ea82d89ef23bba/Dep_FE_MT_SEG_Q_AU_gerenciar_subdepósito.png)

#### Atualizado

##### Entrada

![image](uploads/0df85744e52d1f43ee45d26826364491/image.png)

##### Retirada

![image](uploads/663419a0b92ab08b088898f6325cb790/image.png)
_O desenho do "Destino" está confuso. O que está sendo dito é que o destino da movimentação pode ser tanto para um subdepósito, quanto para um ativo. Sendo uma movimentação para um subdep. a posição deverá ser selecionada. Caso seja para um ativo, o setor deverá ser indicado._

### <a name="mockups-gerenciar-item"></a>Gerenciar Item [_topo_](#anchor-sumario)

![Dep_FE_MT_SEG_Q_AU_item](uploads/4f494a879e4d93556f40e40f78611074/Dep_FE_MT_SEG_Q_AU_item.png)
_Atenção ao desenho da "Visualização das correlações". Usar o mesmo esquema do Depósito de produtos, um modal, com várias abas para cada correlação._

## Processo RSP

RSP - O que **Representa**, para que **Serve** e o que **Pode**

### Formulário

#### <a name="formularios-subcategoria"></a>Subcategoria [_topo_](#anchor-sumario)

- Nome: Representa a subcategoria. Serve para identificar a subcategoria. Podem **até 50 carácteres** **não é** opcional e **pode** ser editado.

#### <a name="formularios-item">Cadastro de Item [_topo_](#anchor-sumario)

- CI - Código de Item: Representa o Item. Serve para identificar o Item. Podem **até 15 carácteres**, **não** é opcional e **não** pode ser editado.
- Descrição: Representa detalhes do Item. Serve para detalhar o item e suas particularidades. Podem **até 100 carácteres**, **é** opcional e **pode** ser editado.
- Categoria: Representa uma generalização do item. Serve para filtrar o item. Pode uma categoria das seguintes:
  - Item
  - Conjunto
  - Subconjunto
- Subcategoria: Representa o tipo do item. Serve para filtrar o item. Pode uma das Subcategorias cadastradas na empresa do usuário.
- Código do Catálogo: Representa o código do manual do equipamento. Serve para referência e documentação. Podem **até 15 carácteres**, **é** opcional e **pode** ser editado.
- Kanban/Quantiade Ideal: Representa os limites (min, max) da quantidade em estoque nos subdepósitos do item. Serve de comparação, do valor atual, com os ideias. Pode **números** maiores que 0, em ambos, mínimo e máximo.
- Unidade: Representa a unidade de medida da quantidade. Serve para referência. Pode uma das unidades disponíveis no sistema.  
  **Unidade não está no desenho.**
- Foto padrão do Item: Representa a aparência do item. Serve para identificação visual. Pode uma image de **até** 2MB, **é** opcional e **pode** ser editado.

#### <a name="formularios-subdeposito">Subdepósito [_topo_](#anchor-sumario)

- Nome: Representa o subdepósito. Serve para identificação. Pode **até 50 carácteres**, **não** é opcional e **pode** ser editado.
- Área: Representa a Área do subdepósito. Serve para filtrar o setor do subdepósito. Pode uma das Áreas cadastradas no sistema.
- Setor: Representa o Setor do subdepósito. Serve para localizar o subdepósito. Pode um dos setores, pertencentes a área selecionada.

#### <a name="formularios-posicao">Posição [_topo_](#anchor-sumario)

- Rua: Representa o nível mais genérico de localização do item. Serve para identificar o item na fábrica. Podem **até 50 carácteres**, **não é** opcional e **pode** ser editado.
- Prédio: Representa o 2° nível de localização do item. Serve para identificar o item dentro da rua. Podem **até 50 carácteres**, **não é** opcional e **pode** ser editado.
- Andar: Representa o 3° nível de localização do item. Serve para identificar o item no prédio. Podem **até 50 carácteres**, **não é** opcional e **pode** ser editado.
- Apartamento: Representa o 4°, e último, nível de localização do item. Serve para identificar o item dentro do andar. Podem **até 50 carácteres**, **não é** opcional e **pode** ser editado.
- Código da Posição: Representa a posição, com os seus parâmetros (rua, prédio, andar e apartamento). Serve para identificação. Podem **até 15 carácteres**, **não é** opcional e **não pode** ser editado.

#### <a name="formularios-movimentacao-subdeposito">Movimentação do Subdepósito [_topo_](#anchor-sumario)

- Tipo de movimento: Representa o tipo de movimentação que será realizada. Serve para indicar o tipo de movimentação que será realizada. Pode um dos seguintes:
  - Entrada
  - Retirada
  - Transferência
  - Reserva
- Data: Representa a data atual. Serve para referência e rastreabilidade. O Campo é preenchido com a data e hora atual e **não** pode ser editado.
- NF: Representa a Nota Fiscal que gerou a movimentação. Serve para referência e rastreabilidade. Podem **até 50 carácteres**, **é** opcional e **não** pode ser editado.
- Pedido: Representa o número do pedido. Serve para identificação e rastreabilidade. Podem **até 50 carácteres**, **é** opcional e **não pode** ser editado.
- Representa o código/número do lote. Serve para identificação da origem do item e rastreabilidade. Podem **até 50 carácteres**, **é** opcional, **não pode** ser editado.
- Quantidade: Representa a quantia de item afetados pela movimentação. Serve para documentação e controle de estoque. Podem **números** (inteiros e fracionados) de no mínimo 0 e **sem máximo**, valor padrão 0 e **não pode** ser editado.
- Posição: Representa a origem dos itens afetados pela movimentação. Serve para controle de estoque e rastreabilidade. Pode uma das posições/localizações cadastradas no subdepósito atual, **é** opcional e **não pode** ser editado.
- Destino: Representa o destino dos itens afetado pela movimentação. Serve para controle de estoque e rastreabilidade. Caso o destino da movimentação seja para um depósito, será necessário indicar a posição, que será uma das posições cadastradas no subdep. de destino. Caso seja um ativo, será necessário indicar, além do ativo, o setor de destino.
  _No lugar do botão "Visualização Depósito", colocar um campo para cada parâmetro da localização selecionada._

#### <a name="formularios-gerenciar-item"></a>Gerenciar Item [_topo_](#anchor-sumario)

##### Correlação com Itens

1. Criar um Componente para o botão da Correlação de item com itens, ele vai ser usando por todos os itens na tela de gerenciamento de item.

   Componente vai receber:

   - O Id do item que está sendo acessado
   - Um Observable que aponta para a requisição de listar categorias de item
   - Uma string, com o nome padrão da categoria (O que vai estar salvo no enviroments.ts(
   - Uma string com o nome do botão (O que o usuário vai ver)

2. Cada botão vai usar o Observable que receber, para se inscrever nele e aplicar a "técnica do depósito" (Usando o nome-padrão que recebeu)

3. Com a "técnica do depósito", o botão vai obter e salvar o ID da categoria que ele representa

4. O botão vai preencher o select da Correlação com uma listagem de itens, filtrando pelo Id da categoria (listItems, passando { category: ID DA CATEGORIA })

5. O botão vai usar o listItemsOfWarehouseItem (passando { category: ID DA CATEGORIA }) para listar os itens que já estão correlacionados. O resultado dessa requisição precisa ser "parseada", para se pegar apenas os IDs e colocar-los no "ngModel" do select

6. Para salvar o que está sendo correlacionado, o botão precisa pegar o array do ngModel e passar para o syncItemsOfWarehouseItem (Passando { category: ID DA CATEGORIA})

##### Durabilidade

- Durabilidade: Representa a "vida útil" do item. Serve para controle de vida útil. Em ambos os campos podem valores numéricos (inteiros e fracionados) maiores que 0. Ao contrário do que leva a crer o desenho, ao mandar para a API, mandar **o total de horas**. Para isso, multiplicar o número de dias por **24** e somar com as horas, o resultado dessa operação é o que a API receberá. A API somente retornará o total de horas, para poder preencher os campos corretamente, a operação inversa tem que ser realizada.
  As operações podem ser vistas aqui:
  ![image](uploads/43c90180b9fbaf5cac9912fd34bae9aa/image.png)
- Devolução do item: Representa se o item deve ser devolvido quando ultrapassar sua vida útil. Serve para controle de vida útil. Pode um dos seguintes:
  - Sim (true)
  - Não (false)

##### Fornecedor

- Fornecedores: Representa os fornecedores da empresa. Serve para indicar os fornecedores do item selecionado. Pode **até todos** os fornecedores da empresa. Usar o formato padrão da correlação.
