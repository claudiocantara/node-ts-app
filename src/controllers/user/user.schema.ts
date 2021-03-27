/* eslint-disable camelcase */
import { prop, ReturnModelType } from '@typegoose/typegoose';
import { Typegoose } from 'typegoose';

class User extends Typegoose {
  @prop({ required: true, type: String })
  // eslint-disable-next-line prettier/prettier
  public name!: string;

  @prop({ required: false, type: Date })
  public birth_date!: Date | undefined;

  public static find(this: ReturnModelType<typeof User>) {
    return this.find({}).exec(); // thanks to "ReturnModelType" "this" has type information
  }
}

const UserModel = new User().getModelForClass(User);

export { UserModel };
