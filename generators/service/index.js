'use strict';
const Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Service Name',
        default: process
          .cwd()
          .split(path.sep)
          .pop()
      },
      {
        type: 'input',
        name: 'image',
        message: 'Docker Image'
      },
      {
        type: 'input',
        name: 'port',
        message: 'Service Port'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    return this.fs.copyTpl(this.templatePath(''), this.destinationRoot(), {
      ...this.props
    });
  }

  install() {
    this.installDependencies();
  }
};
