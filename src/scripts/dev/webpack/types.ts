import { CantaraApplication } from '../../../util/types';

export interface CreateWebpackConfigParams {
  app: CantaraApplication;
  /** Root of user's project */
  projectDir: string;
  alias?: { [key: string]: string };
  include?: string[];
}
