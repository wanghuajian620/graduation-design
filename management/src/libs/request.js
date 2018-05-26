import wepy from 'wepy'

export const RepoList = async () => {
  try {
    const repo = await wepy.request({
      url: '',
      method: 'GET'
    })
    return repo.data.data
  } catch (err) {
    console.error(`fetch repos error: ${JSON.stringify(err)}`)
  }
}
