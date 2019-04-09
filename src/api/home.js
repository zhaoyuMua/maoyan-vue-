import Mock from 'mockjs'
import axios from 'axios'

const base = 'http://localhost:8080/api'

Mock.mock(base + '/movies/hot', 'get', {
  code: 1,
  'data|10': [{
    id: '@increment',
    'img|+1': [
      'https://p0.meituan.net/128.180/movie/c106904da68edd848afd4a320976d051346321.jpg',
      'https://p0.meituan.net/128.180/movie/034069fc367db8a7d9644717b416cc2c332883.jpg',
      'https://p1.meituan.net/128.180/movie/c9b280de01549fcb71913edec05880585769972.jpg',
      'https://p0.meituan.net/128.180/movie/50dd0a416492c2c8086afb05f1d3216f137417.jpg',
      'https://p0.meituan.net/128.180/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg'
    ],
    nm: '@cname',
    version: '@integer(0, 1)',
    sc: '@float(1, 10, 1, 1)',
    'star|2-4': ['@cname'],
    showInfo: '@ctitle(3, 5)'
  }]
})

Mock.mock(base + '/movies/comming', 'get', {
  code: 1,
  'data|3': [{
    date: '@date("yyyy-MM-dd")',
    'items|2-5': [{
      id: '@increment(100)',
      'img|+1': [
        'https://p0.meituan.net/128.180/movie/c106904da68edd848afd4a320976d051346321.jpg',
        'https://p0.meituan.net/128.180/movie/034069fc367db8a7d9644717b416cc2c332883.jpg',
        'https://p1.meituan.net/128.180/movie/c9b280de01549fcb71913edec05880585769972.jpg',
        'https://p0.meituan.net/128.180/movie/50dd0a416492c2c8086afb05f1d3216f137417.jpg',
        'https://p0.meituan.net/128.180/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg'
      ],
      nm: '@cname',
      sc: '@integer(100, 10000)',
      version: '@integer(0, 1)',
      'star|2-4': ['@cname'],
      showInfo: '即将上映'
    }]
  }]
})

export function getHotMovies() {
  return axios.get(base + '/movies/hot').then(res => Promise.resolve(res.data))
}

export function getCommingMovies() {
  return axios
    .get(base + '/movies/comming')
    .then(res => Promise.resolve(res.data))
}
