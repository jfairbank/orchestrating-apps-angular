import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config, { HOST, PORT } from './webpack.config';

const server = new WebpackDevServer(webpack(config), {
  contentBase: config.devServer.contentBase,
  hot: true
});

server.listen(PORT, HOST, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Listening at http://${HOST}:${PORT}`);
});
