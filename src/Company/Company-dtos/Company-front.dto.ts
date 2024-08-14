export class CompanyDto {
    readonly name:              String;
    readonly email:             String;
    readonly password:          String;
    readonly cnpj:              String;
    readonly corporateReason:   String;
    readonly phoneNumber:       String;
    readonly startDate:         Date;
    readonly updateAt:          Date;
    readonly endDate?:          Date;
    readonly deletedAt?:        Boolean;
}
