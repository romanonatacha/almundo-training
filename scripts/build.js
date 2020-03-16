const { spawnSync } = require('child_process');

function build() {
  const environment = process.env.NODE_ENV;
  const locale = process.env.LOCALE;

  if (!locale) throw new Error('No locale specified');

  console.log('Building Angular bundle with the following configuration:');
  console.log('Locale: %s', locale);
  if (environment) {
    console.log('Environment: %s', environment);
  }

  const outputPathPrefix = environment === 'production' ? 'dist-production' : 'dist';

  const args = [
    'build',
    '--progress=false',
    `--deploy-url=/dist/${locale}/`,
    `--output-path=${outputPathPrefix}/${locale}`,
    `--i18n-locale=${locale}`,
    `--i18n-file=src/client/locale/messages.${locale}.xlf`,
  ];

  if (environment) {
    args.push(`--configuration=${environment}`);
  }

  const status = spawnSync('ng', args, { stdio: 'inherit' }).status;
  if (status !== 0) process.exit(status);
}

build();
