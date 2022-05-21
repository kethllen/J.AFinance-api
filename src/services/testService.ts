import { testsRepository } from "../repositories/testsRepository.js"


async function deleteAll() {
  await testsRepository.truncate();
}
async function seed() {
  await testsRepository.seed();
}

export const testsService ={
  deleteAll,
  seed
};