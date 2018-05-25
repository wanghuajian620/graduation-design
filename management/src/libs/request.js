import wepy from 'wepy'

export const RepoList = async (res) => {
  try {
    const repo = await wepy.request({
      url: '',
      method: 'POST',
      data: {
        name: res.name,
        pass: res.pass
      }
    })
    return repo.data.data
  } catch (err) {
    console.error(`fetch repos error: ${JSON.stringify(err)}`)
  }
}
