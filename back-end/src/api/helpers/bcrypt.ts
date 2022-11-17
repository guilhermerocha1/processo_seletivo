import bcrypt from 'bcrypt';

const NUMBER_HASH = 8

const hash = (password: string) => {
  return bcrypt.hashSync(password, NUMBER_HASH);
}

const compare = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
}

export { hash, compare };
