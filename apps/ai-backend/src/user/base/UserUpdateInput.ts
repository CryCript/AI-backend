/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumUserAccessWeddingInvitation } from "./EnumUserAccessWeddingInvitation";
import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumUserStatus } from "./EnumUserStatus";
import { WeddingInvitationUpdateManyWithoutUsersInput } from "./WeddingInvitationUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumUserAccessWeddingInvitation,
  })
  @IsEnum(EnumUserAccessWeddingInvitation)
  @IsOptional()
  @Field(() => EnumUserAccessWeddingInvitation, {
    nullable: true,
  })
  accessWeddingInvitation?: "Yes" | "No" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: () => PaymentUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PaymentUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PaymentUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  payments?: PaymentUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumUserStatus,
  })
  @IsEnum(EnumUserStatus)
  @IsOptional()
  @Field(() => EnumUserStatus, {
    nullable: true,
  })
  status?: "Register" | "Active" | "Nonactive" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: () => WeddingInvitationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => WeddingInvitationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => WeddingInvitationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  weddingInvitations?: WeddingInvitationUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };
