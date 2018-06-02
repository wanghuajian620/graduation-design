// import wepy from 'wepy'

// var header
// header = {
//   'content-type': 'application/x-www-form-urlencoded',
//   'cookie': wepy.getStorageSync('sessionid') // 读取cookie
// }
// export const RepoList = async () => {
//   try {
//     const repo = await wepy.request({
//       url: 'http://192.168.0.105:8080/graduation/student/get',
//       method: 'GET',
//       header: header
//     })
//     console.log(repo.data, 'rrrrr')
//     return repo.data.data
//   } catch (err) {
//     console.error(`fetch repos error: ${JSON.stringify(err)}`)
//   }
// }
