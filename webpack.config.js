function buildEnvironment(env) {
  return require('./environments/' + env + '.js')({ env: env })
}

module.exports = buildEnvironment;