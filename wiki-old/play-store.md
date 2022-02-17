# Geração e teste do APK

* Verificar como esta o nome nos seguintes arquivos: `AndroidManifest.xml` e `build.gradle`. Nomes de pacotes, `applicationId`, `package` name no AndroidManifest.xml devem seguir o mesmo padrão: `br.com.gestaokaizen.<ferramenta>`. Qualquer outro nome que não diz respeito a empresa deve ser substituído.

* Fazer um Rebuild -> Verificar se o Rebuild está ok. Se apresentar erro, resolver e fazer o rebuild novamente.

### No build gerado, testar os seguintes cenários:
* Enviar uma solicitação da base WEB para o aplicativo com foto;
* Verificar se o login esta ok;
* Verificar se esta sincronizando corretamente conforme foi aberto na WEB;
* Realiza a solicitação, anexando fotos e usando o microfone(se possivel) para preencimento dos campos de texto;
* Fazer a sincronização do aplicativo para o sistema Web;
* Verificar no sistema WEB se tudo que foi digitado no aplicativo, as notas geradas pelo sistema e o anexo de fotos esta ok;

**Em caso de problema em uma das etapas acima voltar no código, resolver o problema e repetir o processo!**

# Assinando o aplicativo antes de subir para a Play Store:

**Usar a mesma Key Store para todos aplicativos**

Acessar o menu *Build -> Generate Signed APK -> Android App Bundle ->*

* Key Store Path: `Apontar pro arquivo do keystore`
* Key Store password: `<senha>`
* Key alias: `release`
* Key password: `<senha do alias`

# Dados de publicação na loja:

Abrir o console Google Play 
Criar APP ->
Idioma -> 
pt-BR ->

## Detalhes do App
..todo..
