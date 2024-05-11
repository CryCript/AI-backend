/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InvitationTypeWhereInput } from "./InvitationTypeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { InvitationTypeOrderByInput } from "./InvitationTypeOrderByInput";

@ArgsType()
class InvitationTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InvitationTypeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => InvitationTypeWhereInput, { nullable: true })
  @Type(() => InvitationTypeWhereInput)
  where?: InvitationTypeWhereInput;

  @ApiProperty({
    required: false,
    type: [InvitationTypeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [InvitationTypeOrderByInput], { nullable: true })
  @Type(() => InvitationTypeOrderByInput)
  orderBy?: Array<InvitationTypeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { InvitationTypeFindManyArgs as InvitationTypeFindManyArgs };
