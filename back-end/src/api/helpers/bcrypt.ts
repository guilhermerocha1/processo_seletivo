import bcrypt from 'bcrypt';

const NUMBER_HASH = 8

const hash = (password: string) => {
  return bcrypt.hashSync(password, NUMBER_HASH);
}

export default hash;
