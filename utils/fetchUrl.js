const fetchUrl = async ({ url, method = 'GET' }) => {
  const absoluteUrl = `${process.env.ABSOLUTE_URL}${url}`
  return new Promise((resolve) => {
    setTimeout(async () => {
      const reposnse = await fetch(absoluteUrl, {
        method,
      })
      resolve(await reposnse.json())
    }, 0)
  })
}

export default fetchUrl
