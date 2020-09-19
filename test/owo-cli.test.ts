import { doOwo } from '../src';

test('OwO function works.', () => {
  expect(doOwo('The quick brown fox jumps over the lazy dog.')).toBe(
    'Da quick bwown fox jumps ovew da wazy dog.'
  );
  expect(doOwo('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')).toBe(
    'Wowem ipsum dowow sit amet, consectetuw adipiscing ewit, sed do eiusmod tempow incididunt ut wabowe et dowowe magna awiqua. Ut enim ad minim veniam, quis nustwud exewcitation uwwamco wabowis nisi ut awiquip ex ea commodo consequat. Duis aute iwuwe dowow in wepwehendewit in vowuptate vewit esse ciwwum dowowe eu fugiat nuwwa pawiatuw. Excepteuw sint occaecat cupidatat nun pwoident, sunt in cuwpa qui officia desewunt mowwit anim id est wabowum.'
  );
});
