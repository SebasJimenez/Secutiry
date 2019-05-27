import { Rol } from './Rol.model';

export interface User {
  id: number;
  user: string;
  password: string;
  email: string;
  nameC: string;
  rol: Rol;
}
