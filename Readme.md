## Turma da Pelada

- Crie um arquivo credentials.js no diretório api/config que exporta as credenciais do mongodb.
```javascript
module.exports = {
    username: String,
    userpass: String,
    dbname: String
}
```
```javascript
`mongodb://${credentials.username}:${credentials.userpass}@ds115446.mlab.com:15446/${credentials.dbname}`
```