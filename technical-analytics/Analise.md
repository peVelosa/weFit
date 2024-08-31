# Documentação do Endpoint

## Método

`POST /api/register`

**Descrição**: Este endpoint é usado para cadastrar vendedores ou compradores no sistema.

## Headers

- Content-Type: application/json

## Body

```ts
type RequestDTO = {
  type: "juridica" | "fisica", // Obrigátorio
  cnpj: string, // Obrigatório apenas para pessoa jurídica
  cpf: string, // Obrigatório
  name: string, // Obrigatório
  phone: string, // Obrigatório
  cellphone: string, // Obrigatório
  email: string, // Obrigatório
  address: {
    cep: number, // Obrigatório
    logradouro: string, // Obrigatório
    numero: number, // Obrigatório
    complemento: string, // Opcional
    cidade: string, // Obrigatório
    bairro: string, // Obrigatório
    estado: string // Obrigatório
  }
}
```

## Respostas

### Sucesso (201 OK)

Retorna um objeto JSON com os detalhes do requisição.

**Resposta**:
```json
{
  "status": "success",
  "message": "Cadastrado com sucesso! Número do protocolo, <número-do-protocolo>",
  "data":{
    "protocol": "<número-do-protocolo>"
  }
}
```

### Explicação dos Campos:

- **status**: Indica o status da operação (sucesso ou erro).  
- **message**: Mensagem informativa sobre a operação realizada.  
- **data**: Objeto contendo dados adicionais relevantes para o sucesso da operação, como o número do protocolo.

## Erros Possíveis

### **500 Internal Server Error**

**Descrição**: Erro genérico caso de algum problema na transação do banco de dados ou na api.

**Resposta**:
```json
{
  "status": "error",
  "message": "<Nome do usuário>. Tente novamente mais tarde."
}
```

#### Explicação dos Campos:

- **status**: Indica o status da operação (sucesso ou erro).
- **message**: Mensagem geral sobre o erro.
- **details**: Informação adicional, incluindo detalhes específicos que podem ajudar na identificação do problema.

### **400 Bad Request**: 
**Decrição**: Se o `email` fornecido já estiver cadastrado.

**Resposta**:
```json
{
  "status": "error",
  "message": "Ocorreu um problema com os dados fornecidos.",
  "errors": [
    {
      "field": "email",
      "message": "Email já cadastrado"
    }
  ]
}
```
#### Explicação dos Campos:

- **status**: Indica o status da operação (sucesso ou erro).
- **message**: Mensagem geral sobre o problema encontrado.
- **errors**: Lista de erros específicos, cada um contendo:
  - **field**: Nome do campo onde o erro ocorreu.
  - **message**: Mensagem de erro detalhada.

# Análise do componente `Breadcrumb`
De acordo com a **1º regra de negócio**, as rotas do componente devem ser separadas por um `>`, mas de acordo com o componente apresentado sua separação está sendo do tipo `-`.

Outro problema que identifiquei foi a falta de um **lastPath**. O componente deve ser capaz de saber qual é a rota atual, que é representada pela propriedade `currentPath`, mas também deve ser capaz de identificar a última etapa pela qual o usuário passou. Dessa maneira, a última etapa poderá ficar em **negrito**, e a etapa a qual o usuário navegou poderá ficar <u>sublinhada</u>.

```ts
interface BreadcrumbRoute {
  path: string;
  name: string;
}

export interface BreadcrumbProps {
  routes: Array<BreadcrumbRoute>;
  currentPath?: string;
  lastPath?: string
}
```

```ts
{index + 1 !== routes.length && (
  <span> > </span>
)}
```

## Considerações

O componente está bem feito, sendo necessário apenas alguns ajustes para que a regra de negócios fique correta. Uma sugestão seria a implementação de testes e um desenvolvimento seguindo o TDD (Test Driven Development). Com isso, é possível deixar todos os casos da regras de negócios no teste e seguir com o desenvolvimento do componente depois.
