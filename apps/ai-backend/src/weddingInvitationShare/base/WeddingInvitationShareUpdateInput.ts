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
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { WeddingInvitationWhereUniqueInput } from "../../weddingInvitation/base/WeddingInvitationWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class WeddingInvitationShareUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  institution?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  link?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  open?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  view?: number | null;

  @ApiProperty({
    required: false,
    type: () => WeddingInvitationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WeddingInvitationWhereUniqueInput)
  @IsOptional()
  @Field(() => WeddingInvitationWhereUniqueInput, {
    nullable: true,
  })
  weddingId?: WeddingInvitationWhereUniqueInput | null;
}

export { WeddingInvitationShareUpdateInput as WeddingInvitationShareUpdateInput };
