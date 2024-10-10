export class UserCreatedEntity {
  id: string;
  phone: string;
  photo: Base64URLString;
  birth: Date;
  rg: string;
  cpf: string;
  fatherName: string;
  motherName: string;
  dependents: boolean;
  informationsDependentes?: {
    cpf: string;
    nome: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
