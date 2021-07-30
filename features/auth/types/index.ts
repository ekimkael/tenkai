import { User } from "../../users/types"

/**
 *  Types should be related to the context
 * 
 * For API calls for example we need to have:
 * a [FEATURE]RequestProps type and 
 * a [FEATURE][State]ResponseProps
 * [State] stand for the type of API response you
 * would have. A success or an Error
 * 
 *  But as you can see Error messages seem to have the same
 * format so, we'll move it to types at the root of the
 * project 
 * 
 */

export type SignInRequestProps = {
  email: string;
  password: string;
} 

export type SignInSuccessResponseProps = {
  jwt: string;
  user: User;
} 
