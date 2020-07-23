let windowHandler = {}

if (process.browser) {
  windowHandler = window
} else {
  windowHandler = {}
}

export default windowHandler
