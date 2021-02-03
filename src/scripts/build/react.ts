import { CantaraApplication } from '../../util/types';
import createReactWebpackConfig from '../../util/config/webpackReactConfig';
import webpack from 'webpack';
import getGlobalConfig from '../../cantara-config/global-config';
import getRuntimeConfig from '../../cantara-config/runtime-config';

function compile(config: webpack.Configuration): Promise<void> {
  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err) => {
      if (err) {
        reject(new Error('Error while compiling.'));
        return;
      }
      compiler.close((err) => {
        if (err) {
          reject(new Error('Error while compiling.'));
        } else {
          console.log('Successfully compiled!');
          resolve();
        }
      });
    });
  });
}

export default async function buildReactApp(app: CantaraApplication) {
  const {
    includes: { internalPackages },
    projectDir,
    aliases: { packageAliases },
  } = getGlobalConfig();

  const {
    env,
    aliases: { otherAliases },
  } = getRuntimeConfig();

  const webpackConfig = createReactWebpackConfig({
    alias: {
      ...packageAliases,
      ...otherAliases,
    },
    app,
    env: env,
    mode: 'production',
    projectDir,
    include: internalPackages,
  });

  return compile(webpackConfig);
}
