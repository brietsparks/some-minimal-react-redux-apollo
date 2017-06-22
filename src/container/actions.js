export const DEFAULT_ACTION = 'actions.DEFAULT_ACTION';

export const defaultAction = () => {
  console.log('action: DEFAULT_ACTION')
  return { type: DEFAULT_ACTION }
}