// Check mot de passe et email avec Regexes

export const validEmail = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);

 export const validPassword = new RegExp(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/);