const fetchUrl = async ({ url, method = 'GET', body }) => {
  const absoluteUrl = `${process.env.NEXT_PUBLIC_ABSOLUTE_URL}${url}`
  return new Promise((resolve) => {
    setTimeout(async () => {
      const params = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      }
      if (method === 'POST') {
        params.body = JSON.stringify(body)
      }
      const reposnse = await fetch(absoluteUrl, params)
      resolve(await reposnse.json())
    }, 0)
  })
}

export default fetchUrl
