const fetchUrl = async ({ url, method = 'GET' }) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const reposnse = await fetch(url, {
        method,
      })
      resolve(await reposnse.json())
    }, 1000)
  })
}

export default fetchUrl
