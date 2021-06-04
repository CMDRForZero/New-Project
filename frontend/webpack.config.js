const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const openBrowser = require('react-dev-utils/openBrowser');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {environment} = require('./src/constants/environment');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const stand = (env && env.STAND) || 'dev1';
  const standVars = environment[stand];
  const YM_ID = env && env.YM_ID;

  const config = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      chunkFilename: isProduction ? '[name].build.[chunkhash:8].js' : '[name].build.[hash:8].js'
    },
    devtool: 'inline-source-map',
    devServer: {
      port: 9000,
      hot: true,
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      before: () => {
        openBrowser('http://localhost:9000');
      },
      proxy: {
        '/api': {
          target: standVars.API,
          logLevel: 'debug'
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                      },
                    },
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg|pdf|ico|woff|ttf|woff2|eot)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: './[path][name]-[hash:8].[ext]',
                limit: 100000
              }
            }
          ]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: '/'
              }
            },
            {
              loader: 'css-loader' // translates CSS into CommonJS
            },
            {
              loader: 'less-loader', // compiles Less to CSS,
            }
          ]
        },
        {
          test: /^((?!\.global).)*s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: '/'
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  exportLocalsConvention: "camelCase",
                  localIdentName: '[name]__[local]'
                },
                sourceMap: true,
              }
            },
            'sass-loader' // compiles Sass to CSS, using Node Sass by default
          ]
        },
        {
          test: /\.global\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: '/'
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  exportLocalsConvention: "camelCase"
                },
                sourceMap: true
              }
            },
            'sass-loader' // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ]
    },
    plugins: [
      new webpack.ids.HashedModuleIdsPlugin({
        context: __dirname,
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 20
      }),
      new webpack.ProgressPlugin(),
      new CopyPlugin({
          patterns: [{from: 'src/assets', to: 'assets'}]
        }
      ),
      new CopyPlugin({
          patterns: [{from: 'public/img', to: 'img'}]
        }
      ),
      new CopyPlugin({
          patterns: [{from: 'public/js', to: 'js'}]
        }
      ),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false
      })
    ]
  };

  if (isProduction) {
    config.optimization = {
      runtimeChunk: 'multiple',
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false, // Must be set to true if using source-maps in production
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ]
    };
  }
  return config;
};
