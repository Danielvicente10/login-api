export class OfficialsDto {
    readonly name:           String;
    readonly email:          String;
    readonly password:       String;
    readonly cpf:            String;
    readonly phoneNumber:    String;
    readonly startDate:      Date;
    readonly updateAt:       Date;
    readonly endDate?:       Date;
    readonly deletedAt?:     Boolean;
}
