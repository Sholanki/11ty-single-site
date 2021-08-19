const path = require('path')
const sass = require('node-sass-promise')
const CleanCSS = require('clean-css')

const inputFile = path.join(__dirname, './styles.scss')
const outputFile = path.join(__dirname, './components/styles.css')

const comment = `/* This is an example comment */`

module.exports = class {
  data() {
    return {
      permalink: 'css/styles.css',
      eleventyExcludeFromCollections: true
    }
  }

  async render() {
    const { css } = await sass.render({ file: inputFile })
    const output = new CleanCSS({}).minify(css.toString()).styles

    return `${comment}\n\n${output}`
  }
}