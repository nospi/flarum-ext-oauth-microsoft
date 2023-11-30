import app from 'flarum/admin/app';
import { ConfigureWithOAuthPage } from '@fof-oauth';

app.initializers.add('nospi/oauth-microsoft', () => {
  app.extensionData.for('nospi-oauth-microsoft').registerPage(ConfigureWithOAuthPage);
});
