/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { WeddingInvitationShareWhereUniqueInput } from "../../weddingInvitationShare/base/WeddingInvitationShareWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WeddingInvitationShareUpdateManyWithoutWeddingInvitationsInput {
  @Field(() => [WeddingInvitationShareWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WeddingInvitationShareWhereUniqueInput],
  })
  connect?: Array<WeddingInvitationShareWhereUniqueInput>;

  @Field(() => [WeddingInvitationShareWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WeddingInvitationShareWhereUniqueInput],
  })
  disconnect?: Array<WeddingInvitationShareWhereUniqueInput>;

  @Field(() => [WeddingInvitationShareWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WeddingInvitationShareWhereUniqueInput],
  })
  set?: Array<WeddingInvitationShareWhereUniqueInput>;
}

export { WeddingInvitationShareUpdateManyWithoutWeddingInvitationsInput as WeddingInvitationShareUpdateManyWithoutWeddingInvitationsInput };
