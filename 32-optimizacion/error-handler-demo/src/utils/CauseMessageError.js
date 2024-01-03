export const generatorUserError = (user) => {
  return `Todos lo campos son requerios y deben ser valido 😱.
  Lista de campos recibidos en la solicitud:
    - first_name  : ${user.first_name}
    - last_name   : ${user.last_name}
    - email       : ${user.email}
    - phone       : ${user.phone}
    - age         : ${user.age}
    - password    : ${user.password}
    `;
};

export const generatorUserIdError = (id) => {
 return `Se debe enviar un identificador valido 😱.
  Valor recibido: ${id}`;
} 