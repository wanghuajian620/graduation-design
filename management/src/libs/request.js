import wepy from 'wepy'

export const RepoList = async () => {
  try {
    const repo = await wepy.request({
      url: 'http://192.168.0.109:8080/graduation/student/get',
      method: 'GET'
    })
    return repo.data.data
  } catch (err) {
    console.error(`fetch repos error: ${JSON.stringify(err)}`)
  }
}
