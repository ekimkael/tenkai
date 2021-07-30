/**
 *  Types should be related to the context
 * 
 * For API calls for example we need to have:
 * a [FEATURE]RequestProps type and 
 * a [FEATURE][State]ResponseProps
 * [State] stand for the type of API response you
 * would have. A success or an Error
 * 
 * But as you can see Error messages seem to have the same
 * format so, we'll move it to types at the root of the
 * project 
 * 
 */

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  role: 'ADMIN' | 'USER';
} 

export type CreateUserRequestProps = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
} 

export type CreateUserResponseProps = {
  jwt: string;
  user: User;
} 
