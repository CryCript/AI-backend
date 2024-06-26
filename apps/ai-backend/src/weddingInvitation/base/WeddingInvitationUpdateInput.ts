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
import { IsJSONValue } from "../../validators";
import { IsOptional, ValidateNested, IsString } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { WeddingInvitationCommentUpdateManyWithoutWeddingInvitationsInput } from "./WeddingInvitationCommentUpdateManyWithoutWeddingInvitationsInput";
import { WeddingInvitationShareUpdateManyWithoutWeddingInvitationsInput } from "./WeddingInvitationShareUpdateManyWithoutWeddingInvitationsInput";

@InputType()
class WeddingInvitationUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  bride?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  design?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  events?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  galleries?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  gifts?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  groom?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  invites?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  moments?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  quotes?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  userId?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  video?: string | null;

  @ApiProperty({
    required: false,
    type: () =>
      WeddingInvitationCommentUpdateManyWithoutWeddingInvitationsInput,
  })
  @ValidateNested()
  @Type(() => WeddingInvitationCommentUpdateManyWithoutWeddingInvitationsInput)
  @IsOptional()
  @Field(
    () => WeddingInvitationCommentUpdateManyWithoutWeddingInvitationsInput,
    {
      nullable: true,
    }
  )
  weddingInvitationComments?: WeddingInvitationCommentUpdateManyWithoutWeddingInvitationsInput;

  @ApiProperty({
    required: false,
    type: () => WeddingInvitationShareUpdateManyWithoutWeddingInvitationsInput,
  })
  @ValidateNested()
  @Type(() => WeddingInvitationShareUpdateManyWithoutWeddingInvitationsInput)
  @IsOptional()
  @Field(() => WeddingInvitationShareUpdateManyWithoutWeddingInvitationsInput, {
    nullable: true,
  })
  weddingInvitationShares?: WeddingInvitationShareUpdateManyWithoutWeddingInvitationsInput;
}

export { WeddingInvitationUpdateInput as WeddingInvitationUpdateInput };
