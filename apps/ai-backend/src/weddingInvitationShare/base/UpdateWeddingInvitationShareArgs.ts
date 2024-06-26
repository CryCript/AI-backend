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
import { WeddingInvitationShareWhereUniqueInput } from "./WeddingInvitationShareWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WeddingInvitationShareUpdateInput } from "./WeddingInvitationShareUpdateInput";

@ArgsType()
class UpdateWeddingInvitationShareArgs {
  @ApiProperty({
    required: true,
    type: () => WeddingInvitationShareWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WeddingInvitationShareWhereUniqueInput)
  @Field(() => WeddingInvitationShareWhereUniqueInput, { nullable: false })
  where!: WeddingInvitationShareWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WeddingInvitationShareUpdateInput,
  })
  @ValidateNested()
  @Type(() => WeddingInvitationShareUpdateInput)
  @Field(() => WeddingInvitationShareUpdateInput, { nullable: false })
  data!: WeddingInvitationShareUpdateInput;
}

export { UpdateWeddingInvitationShareArgs as UpdateWeddingInvitationShareArgs };
