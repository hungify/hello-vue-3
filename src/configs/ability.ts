import { AbilityBuilder, Ability } from '@casl/ability';
import type { AbilityClass } from '@casl/ability';
import type { Actions, Roles, Subjects } from '~/interfaces/auth';
import { ACTIONS, ROLES, SUBJECTS } from './auth';

export type AppAbility = Ability<[Actions, Subjects]>;
export const appAbility = Ability as AbilityClass<AppAbility>;

function defineRulesForRole(role: Roles) {
  const { can, cannot, rules } = new AbilityBuilder(appAbility);

  if (role === ROLES.Admin) {
    can([ACTIONS.delete, ACTIONS.read], SUBJECTS.Todo);
    cannot([ACTIONS.create], SUBJECTS.Todo).because(
      'Only editor can create Todos'
    );
  } else if (role === ROLES.Editor) {
    can([ACTIONS.create, ACTIONS.read], SUBJECTS.Todo);
    cannot([ACTIONS.delete], SUBJECTS.Todo).because(
      'Only admins can delete Todos'
    );
  } else if (role === ROLES.Subscriber) {
    can([ACTIONS.read], SUBJECTS.Todo);
    cannot([ACTIONS.delete, ACTIONS.read], SUBJECTS.Todo).because(
      'Only admins can delete Todos'
    );
    cannot([ACTIONS.create], SUBJECTS.Todo).because(
      'Only editor can create Todos'
    );
  } else {
    cannot([ACTIONS.read], SUBJECTS.Todo).because('You are not logged in');
  }

  return rules;
}

export default function buildAbilityForRole(role: Roles): AppAbility {
  return new appAbility(defineRulesForRole(role), {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    detectSubjectType: (object: any) => object?.type
  });
}
