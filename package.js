/* global Package, Npm */

Package.describe({
  summary: 'Authorization package for Meteor',
  version: '2.2.0',
  git: 'https://github.com/Meteor-Community-Packages/meteor-roles.git',
  name: 'alanning:roles'
})

Package.onUse(function (api) {
  api.versionsFrom('1.9')

  var both = ['client', 'server']

  api.use([
    'ecmascript',
    'accounts-base@1.9.0 || 2.0.0',
    'tracker',
    'mongo',
    'check'
  ], both)

  api.use(['blaze@2.5.0'], 'client', { weak: true })

  api.export('Roles')

  api.addFiles('roles/roles_common.js', both)
  api.addFiles('roles/roles_server.js', 'server')
  api.addFiles([
    'roles/client/debug.js',
    'roles/client/uiHelpers.js',
    'roles/client/subscriptions.js'
  ], 'client')
})

Package.onTest(function (api) {
  // Add code coverage
  api.use([
    'lmieulet:meteor-packages-coverage@0.2.0',
    'lmieulet:meteor-coverage@3.0.0',
    'meteortesting:mocha'
  ])

  Npm.depends({
    'chai': '4.2.0'
  })

  api.versionsFrom('1.9')

  var both = ['client', 'server']

  api.use([
    'ecmascript',
    'alanning:roles',
    'mongo'
  ], both)

  api.addFiles('roles/tests/client.js', 'client')
  api.addFiles('roles/tests/server.js', 'server')
})
